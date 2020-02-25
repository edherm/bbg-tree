export default (collections) => {
  const collectionForm = document.createElement("form");
  const collectionSelect = document.createElement("select");
    collectionSelect.setAttribute("id", "collections");
  
  const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "default");
    defaultOption.innerHTML = "Select a Plant Collection"

  collectionSelect.append(defaultOption)

  collections.forEach(collection => {
    const collectionOption = document
      .createElement("option");
    collectionOption
      .setAttribute("value", collection);
      
    collectionOption.innerHTML = collection;
      // collectionOption.onclick = 
    
    collectionSelect.append(collectionOption)
    // debugger
  })
  debugger
  collectionForm.append(collectionSelect);
  document.getElementById("main").append(
    collectionForm)
}