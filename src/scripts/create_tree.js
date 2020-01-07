import bbg_data from "./convert_data";

// import {bbgData} from "./data/bbg_data_test_slice.csv";

export default () => {
  const margin = { top: 75, right: 75, bottom: 75, left: 75 },
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  const orientation = {
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
    .data(d3.entries(orientation))
    .enter()
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.right)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Convert csv data => each row becomes an object with columns as keys
  d3.csv("src/data/bbg_data191204.csv").then(function(data) {
    
    // Convert data to hierarchical structure
    let bbg_data = d3.nest()
      .key(function(d) { return "root" })
      .key(function(d) { return d.home; })
      .key(function(d) { return d.collection; })
      .key(function(d) { return d.genus; })
      .entries(data)

    console.log(data);
    console.log(bbg_data);
  });
}