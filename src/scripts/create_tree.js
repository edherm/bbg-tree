import convertFetchedData from "./convert_fetched_data";

const klass = (d) => {
  if (d.depth === 4) {
    return "upper branches"
  } else if (d.depth === 3) {
    return "middle branches"
  } else if (d.depth === 2) {
    return "lower branches"
  } else if (d.depth === 4) {
    return "leaves"
  } else {
    return "trunk"
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

  // .data(d3.entries(orientations))
  let svg = d3
    .select("body")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.right)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Load and convert csv data => each row becomes an object with columns as keys
  d3.csv("src/data/bbg_data191204.csv").then(function(data) {
    
    // Convert data to hierarchical structure
    let bbg_data = convertFetchedData(data);

    // svg.each(() => {
    //   const svg = d3.select(this)
      

      // Create tree and assign size from orientations
      let treemap = d3.tree().size([height, width]);

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
        nodes.descendants().forEach(d => {d.y = d.depth * 180});
        ///////// Nodes /////////
        // Update the nodes
        let node = svg
          .selectAll(".node")
          .data(nodes.descendants(), d => { return d.id || (d.id = ++i); })

        // Create node circles
        let nodeEnter = node
          .enter()
          .append("g")
          .attr("class", d => { 
            return `node ${klass(d)}`; })
          .attr("transform", d => { return `translate(${source.y0}, ${source.x0})`; })
          .on('click', (d) => click(d));
          
        // Add Circle to nodes
        nodeEnter
          .append("circle")
          .attr("r", 7)
          .style("fill", d => {
            return d.children ? "#654321" : "#fff";
          });

        // Node labels
        nodeEnter
          .append("text")
          .text(d => { return d.data.name; })
          .attr("x", d => { return d.children || d._children ? -13 : 13; })
          .attr("dy", ".35em")
          .attr("text-anchor", d => { return d.children || d._children ? "end" : "start"; })

        // Execute updating nodes
        const nodeUpdate = nodeEnter.merge(node);

        // Transition to proper node position
        nodeUpdate.transition()
          .duration(duration)
          .attr("transform", d => { return `translate(${d.y}, ${d.x})`; })
        
        nodeUpdate.select('.node')
          .attr('r', 7)
          .style("fill", d => { 
            debugger
            return d.children ? "forestgreen" : "#fff"; 
          })
          .attr('cursor', 'pointer');

        // Remove any exiting nodes
        let nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", d => { return `translate(${source.y}, ${source.x})`; })
          .remove();

        // Reduce exiting circles size to 0
        nodeExit.select('.node')
          .attr('r', 1e-6);

        // Reduce label opacity
        nodeExit.select('text')
          .style('fill-opacity', 1e-6);
      
        ///////// Links /////////
        // Create path between parent and child
        const diagonal = (s, d) => {
          return `M ${s.y} ${s.x} 
              C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
        }

        // Update links
        let link = svg.selectAll(".link")
          .data(links, d => { return d.id });

        // Update 'revealed' links
        let linkEnter = link.enter()
          .insert("path", "g")
          .attr("class", d => { return `link ${klass(d)}`; })
          .attr("d", d => { 
            const o = {x: source.x0, y: source.y0}
            return diagonal(o, o) 
          });

        // Update
        const linkUpdate = linkEnter.merge(link);

        // Add transition to parent element
        linkUpdate.transition()
          .duration(duration)
          .attr('d', d => { return diagonal(d, d.parent); })

        // Remove any exiting links
        const linkExit = link.exit().transition()
          .duration(duration)
          .attr('d', d => { 
            const o = {x: source.x, y: source.y}
            return diagonal(o, o) 
          })
          .remove();

        // Store old positions for transition
        nodes.descendants().forEach(function(d){
          d.x0 = d.x;
          d.y0 = d.y;
        });

        // Handle click - set visibility property
        const click = d => {
          if (d.children) {
            debugger
            d._children = d.children;
            d.children = null;
          } else {
            debugger
            d.children = d._children;
            d._children = null;
          }
          debugger
          update(d);
        }
      }

      root.children[0].children.forEach(collapse);
      // root.children[0].children.forEach((child => { 
      //   // child.children = child._children;
      //   child._children = null;
      // }));
      
      update(root);
    // })
    
  });
}