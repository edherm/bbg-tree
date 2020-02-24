export default (fetchedData, subset) => {
  // Convert data to hierarchical structure
    const hierarchicalData = d3.nest()
      .key(function(d) { 
        return d.collection; 
      })
      .key(function(d) { 
        return d.genus; 
      })
      .entries(fetchedData)

    // Correct key/value format for d3.hierarchy and .tree
    const shapedHierarchicalData = {}

    hierarchicalData.forEach(collection => {
      shapedHierarchicalData[collection.key] = {
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
          // })
        // }
      // } )
    // }

  debugger
  return shapedHierarchicalData[subset];
}