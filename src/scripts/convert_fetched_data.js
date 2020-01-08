export default (fetchedData) => {
  // Convert data to hierarchical structure
    const hierarchicalData = d3.nest()
      .key(function(d) {
        return d.home;
      })
      .key(function(d) { 
        return d.collection; 
      })
      .key(function(d) { 
        return d.genus; 
      })
      .entries(fetchedData)

    // Correct key/value format for d3.hierarchy and .tree
    const shapedHierarchicalData = {
      "name": "",
      "children": hierarchicalData.map(home => {

        return {
          "name": home.key,
          "children": home.values.map(collection => {

            return {
              "name": collection.key,
              "children": collection.values.map(genus => {

                return {
                  "name": genus.key,
                  "children": genus.values.map(specimen => {
                    const {collection,genus,species,commonName,family,accession,provenance} = specimen;
                    return {
                      "name": {
                        "collection": collection,
                        "family": family,
                        "latinName": `${genus} ${species}`,
                        "commonName": commonName,
                        "accession": accession,
                        "provenance": provenance
                      }
                    }
                  })
                }
              })
            }
          })
        }
      })
    }

    // collection,genus,species,commonName,family,accession,provenance
    // hierarchicalData.forEach(function(d) {
    //   d.name = d.key;
    //   d.children = d.values;
    //   d.children.forEach(function(child){
    //     child.name = child.key;
    //     child.children = child.values;
    //     child.children.forEach(function(grandchild) {
    //       grandchild.name = grandchild.key;
    //       grandchild.children = grandchild.values;
    //       grandchild.children.forEach(function(greatgrandchild) {
    //         greatgrandchild.name = greatgrandchild.key;
    //         greatgrandchild.children = greatgrandchild.values;
    //       })
    //     })
    //   })
    // })

  return shapedHierarchicalData;
}