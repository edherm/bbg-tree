export default (collections) => {
  let collectionForm = document.createElement("form");
  let collectionSelect = document.createElement("select");
    collectionSelect.setAttribute("id", "collections");
  const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "default");
    defaultOption.innerHTML = "Select a Plant Collection"

    collectionSelect.append(defaultOption)
  collections.forEach(collection => {
    let collectionOption = document
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