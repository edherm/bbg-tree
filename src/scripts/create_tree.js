import convertFetchedData from "./convert_fetched_data";

const branchLvl = (d) => {
  if (d.depth === 4) {
    return "link upperBranches"
  } else if (d.depth === 3) {
    return "link middleBranches"
  } else if (d.depth === 2) {
    return "link lowerBranches"
  } else {
    return "link trunk"
  }
}

export default () => {
  const margin = { top: 25, right: 25, bottom: 25, left: 25 },
    width = 1400 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  const orientations = {
    "grow-up": {
      size: [width, height],
      x: function(d) {
        return d.x;
      },
      y: function(d) {
        return height - d.y;
      }
    }
  };

  const svg = d3
    .select("body")
    .selectAll("svg")
    .data(d3.entries(orientations))
    .enter()
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.right)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Load and convert csv data => each row becomes an object with columns as keys
  d3.csv("src/data/bbg_data191204.csv").then(function(data) {
    
    // Convert data to hierarchical structure
    let bbg_data = convertFetchedData(data);

    svg.each(function(orientation) {
      const svg = d3.select(this),
        o = orientation.value;

      // Create tree
      let treemap = d3.tree().size(o.size);

      let nodes = d3.hierarchy(bbg_data);
      
      nodes = treemap(nodes);

      // Render and classify all links
      const links = nodes.descendants().slice(1);

      svg.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", function(d) { return branchLvl(d); })
        .attr("d", function(d) {
          return (
            "M" +
            d.x +
            "," +
            o.y(d) +
            "C" +
            d.x +
            "," +
            (o.y(d) + o.y(d.parent)) / 2 +
            " " +
            d.parent.x +
            "," +
            (o.y(d) + o.y(d.parent)) / 2 +
            " " +
            d.parent.x +
            "," +
            o.y(d.parent)
          );
        })

      // Group branch and leaf nodes
      let branchNodes = [];
      let leafNodes = [];
      nodes.descendants().forEach(node => {
        if (node.depth === 4){
          leafNodes.push(node);
        } else {
          branchNodes.push(node);
        }
      })      

      // Create leafNode diamonds
      let leafNode = svg
        .selectAll(".leafNode")
        .data(leafNodes)
        .enter()
        .append("g");
      leafNode
        .append("circle")
        .attr("class", ".leafNode")
        .attr("r", 4.5)
        .attr("cx", o.x)
        .attr("cy", o.y);

      // Create branchNode circles
      let branchNode = svg
        .selectAll(".branchNode")
        .data(branchNodes)
        .enter()
        .append("g");
      branchNode
        .append("circle")
        .attr("class", "branchNode")
        .attr("r", 4.5)
        .attr("cx", o.x)
        .attr("cy", o.y);

      branchNode
        .append("text")
        .text(function(d) {
          return d.data.name;
        })
        .attr("x", o.x)
        .attr("dx", 5)
        .attr("y", o.y);


    })
    
  });
}