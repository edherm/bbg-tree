export default () => {
  const margin = { top: 75, right: 75, bottom: 75, left: 75 },
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
    let bbg_data = d3.nest()
      .key(function(d) {
        return ""
      })
      .key(function(d) {
        return d.home;
      })
      .key(function(d) { 
        return d.collection; 
      })
      .key(function(d) { 
        return d.genus; 
      })
      .entries(data)

    // Force data into correct format for d3.hierarchy and .tree
    bbg_data.forEach(function(d) {
      d.name = d.key;
      d.children = d.values;
      d.children.forEach(function(child){
        child.name = child.key;
        child.children = child.values;
        child.children.forEach(function(grandchild) {
          grandchild.name = grandchild.key;
          grandchild.children = grandchild.values;
          grandchild.children.forEach(function(greatgrandchild) {
            greatgrandchild.name = greatgrandchild.key;
            greatgrandchild.children = greatgrandchild.values;
          })
        })
      })
    })

    const hierarchical_data = bbg_data.map

    svg.each(function(orientation) {
      
      const svg = d3.select(this),
        o = orientation.value;

      // Create a tree
      let treemap = d3.tree().size(o.size);

      let nodes = d3.hierarchy(...bbg_data);
      
      nodes = treemap(nodes);

      debugger
      let links = nodes.descendants().slice(1);

      console.log(links)

      // Link lines
      svg.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
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
        // Create node circles
        var node = svg
          .selectAll(".node")
          .data(nodes.descendants())
          .enter()
          .append("g");
        node
          .append("circle")
          .attr("class", "node")
          .attr("r", 4.5)
          .attr("cx", o.x)
          .attr("cy", o.y);

        node
          .append("text")
          .text(function(d) {
            return d.data.key;
          })
          .attr("x", o.x)
          .attr("dx", 5)
          .attr("y", o.y);
    })
    
  });
}