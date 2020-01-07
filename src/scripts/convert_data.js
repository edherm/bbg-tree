let bbg_data;
d3.csv("src/data/bbg_data191204.csv").then(function(data) {
  bbg_data = d3.nest()
    .key(function(d) { return d[0]; })
    .key(function(d) { return d[1]; })
    .entries(data)
});

export default bbg_data;
