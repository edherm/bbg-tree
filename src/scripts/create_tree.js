import convertFetchedData from "./convert_fetched_data";
import { klass, onMouseOver, onMouseOut, click, diagonal } from "./d3_utils";

export default () => {
  const collection = "Bonsai";
  const sides = collection.length < 10 ? (100) : (
    collection.length < 20 ? (150): (225));
  
  const margin = { top: 35, right: sides, bottom: 35, left: sides },
    width = 850 - margin.left - margin.right,
    height = 850 - margin.top - margin.bottom;

  // .data(d3.entries(orientations))
  let svg = d3
    .select("main")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.right)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Load and convert csv data => each row becomes an object with columns as keys
  d3.csv("src/data/bbg_data191204.csv").then(function(data) {
    // Convert data to hierarchical structure
    let bbg_data = convertFetchedData(data, collection);

    // Create tree and assign size from orientations
    let treemap = d3.tree().size([height, width]);

    // Assign root node
    let root = d3.hierarchy(bbg_data, d => { return d.children });
    root.x0 = height / 2;
    root.y0 = 0;

    const update = source => {
      // Categorize nodes and links
      let nodes = treemap(root);
      const links = nodes.descendants().slice(1);

      // Variables used for animation
      let i = 0;
      const duration = 1100;

      // Normalize depth
      nodes.descendants().forEach(d => {d.y = d.depth * 150});  

      ///////// Nodes /////////
      // Update the nodes
      const node = svg
        .selectAll("g.node")
        .data(nodes.descendants(), d => { return d.id || (d.id = ++i); })

      // Create nodes
      let nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => { return `translate(${source.y0}, ${source.x0})`; })
        .on('click', (d) => {
          click(d)
          if (d.depth < 3) {
            update(d)
          }
        })
        .on('mouseover', d => onMouseOver(d))
        .on('mouseout', d=> onMouseOut(d));
      
      // Add Circle to nodes
      nodeEnter
        .append("circle")
        .attr("class", d => {
          return `${klass(d)}`;
        })
        .attr("r", 7)
        .style("fill", d => {
          return d.children ? "grey" : "rgb(152, 199, 45)";
        });

      // Node labels
      nodeEnter
        .append("text")
        .text(d => {
          return d.data.name.commonName
            ? `- ${d.data.name.commonName} -`
            : `- ${d.data.name} -`; 
        })
        .attr("x", d => { return d.children || d._children ? -13 : 13; })
        .attr("dy", ".35em")
        .attr("class", d => {
          return `${klass(d)}`;
        })
        .attr("text-anchor", d => { return d.children || d._children ? "end" : "start"; })
      
      // Execute updating nodes
      const nodeUpdate = nodeEnter.merge(node);

      // Transition to proper node position
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", d => { 
          return `translate(${d.y}, ${d.x})`; });
      
      nodeUpdate.select('circle.branches')
        .attr('r', 7)
        .style("fill", d => { 
          return d.children ? "grey" : "rgb(64, 125, 194)"; 
        })
        .attr('cursor', 'pointer');

      // Remove any exiting nodes
      let nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", d => { return `translate(${source.y}, ${source.x})`; })
        .remove();

      // Reduce exiting circles size to 0
      nodeExit.select('circle.branches', 'circle.leaves')
        .attr('r', 1e-6);

      // Reduce label opacity
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // Add event listeners to leaves for info display  
      d3.selectAll("circle.leaves")
        .enter()
        .on("mouseOver", d => {
          return onMouseOver(d);
        })
        .on("mouseOut", d => {
           return onMouseOut(d);
        });
    
      ///////// Links /////////
      // Update links
      let link = svg.selectAll(".link")
        .data(links, d => { return d.id });

      // Update 'revealed' links
      let linkEnter = link.enter()
        .insert("path", "g")
        .attr("class", d => { return `link ${klass(d)}`; })
        .attr("d", () => { 
          const start = {x: source.x0, y: source.y0}
          return diagonal(start, start) 
        });

      // Update
      const linkUpdate = linkEnter.merge(link);

      // Add transition to parent element
      linkUpdate.transition()
        .duration(duration)
        .attr('d', d => { 
          return diagonal(d, d.parent); })

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
    } // Complete update function

    // Initial node, circle, link, and text creation
    update(root);

    // Collapse all nodes past 'Genus' level after initial render
    let n = 1116;
    root.children.forEach(d => {
      setTimeout( () => {
        click(d);
        update(d);
      }, n)
      n = n + 1116
    })

  }); // Complete data fetch
}