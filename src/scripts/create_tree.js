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

      // Create tree and assign size from orientations
      let treemap = d3.tree().size(o.size);

      // Assign root node
      let root = d3.hierarchy(bbg_data, d => { return d.children });
      root.x0 = height / 2;
      root.y0 = 0;

      // Collapse node and recursively collapse all children
      const collapse = d => {
        if(d.children) {
          d._children = d.children
          d._children.forEach(collapse)
          d.children = null
        }
      }

      // Collapse after collections
      
      const update = source => {
        // Categorize nodes and links
        let nodes = treemap(root);
        const links = nodes.descendants().slice(1);

        // Declare variables used for animation throughout
        let i = 0;
        const duration = 750;

        // Normalize depth
        nodes.descendants().forEach(d => {d.y = d.height * 90});

        ///////// Nodes /////////
        // Update the nodes
        // const node = svg.selectAll(".node")
        //   .data(nodes, d => { return d.id || (d.id = ++i); })

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

        // Create branchNode circles
        let branchNode = svg
          .selectAll(".branchNode")
          .data(branchNodes, d => { return d.id || (d.id = ++i); })

        let branchNodeEnter = branchNode
          .enter()
          .append("g")
          .attr("class", "branchNode")
          .on('click', (d) => click(d))
          .attr("transform", d => { return `translate(${d.y}, ${d.x})`; });
          
        // Add Circle to branchNodes
        branchNodeEnter
          .append("circle")
          .attr("r", 4.5)
          .attr("cx", o.x)
          .attr("cy", o.y)
          .style("fill", d => {
            return d._children ? "#654321" : "#fff";
          });

        // Update LeafNodes
        let leafNode = svg
          .selectAll(".leafNode")
          .data(leafNodes, d => { return d.id || (d.id = ++i); })
          
        let leafNodeEnter = leafNode  
          .enter()
          .append("g")
          .attr("class", ".leafNode")
          .on('click', d => click(d))
          .attr("transform", d => { return `translate(${o.y}, ${o.x})`; });

        // Add Circle to leafNodes
        leafNodeEnter
          .append("circle")
          .attr("r", 4.5)
          .attr("cx", o.x)
          .attr("cy", o.y)
          .style("fill", d => {
            return d._children ? "forestgreen" : "#fff";
          })

        branchNode
          .append("text")
          .text(function(d) {
            return d.data.name;
          })
          .attr("x", o.x)
          .attr("dx", 5)
          .attr("y", o.y);

        ///////// Links /////////


        // Create path between parent and child
        const diagonal = (d) => {
          return `M ${d.x} ${o.y(d)} 
              C ${d.x},
              ${(o.y(d) + o.y(d.parent)) / 2} ${d.parent.x},
              ${(o.y(d) + o.y(d.parent)) / 2} ${d.parent.x},
              ${o.y(d.parent)}`
        }

        // Update links
        let link = svg.selectAll(".link")
          .data(links, d => { return d.id });

        // Update 'revealed' links
        let linkEnter = link.enter()
          .append("path")
          .attr("class", d => { return branchLvl(d); })
          .attr("d", d => { return diagonal(d) });

        // Update
        const linkUpdate = linkEnter.merge(link);

        // Add transition to parent element
        linkUpdate.transition()
          .duration(duration)
          .attr('d', d => { return diagonal(d)})

        // Remove any exiting links
        const linkExit = link.exit().transition()
          .duration(duration)
          .attr('d', d => { return diagonal(d) })
          .remove();

        // Store old positions for transition
        nodes.descendants().forEach(function(d){
          d.x0 = d.x;
          d.y0 = d.y;
        });

        // Handle click
        const click = d => {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        }
      }

      debugger
      root.children[0].children.forEach(collapse);
      update(root);
    })
    
  });
}