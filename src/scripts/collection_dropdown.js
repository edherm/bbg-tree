export default (collections) => {
  const collectionForm = document.createElement("form");
  const collectionSelect = document.createElement("select");
    collectionSelect.setAttribute("id", "collections");

  const collectionsSubmit = document.createElement("input");
    collectionsSubmit.setAttribute("type", "submit");
    collectionsSubmit.setAttribute("value", "Switch Collection");
    collectionsSubmit.setAttribute("id", "collectionSubmit");
  
  // const defaultOption = document.createElement("option");
  //   defaultOption.setAttribute("value", "default");
  //   defaultOption.innerHTML = "Select a Plant Collection"

  // collectionSelect.append(defaultOption)

  collections.forEach(collection => {
    const collectionOption = document
      .createElement("option");
    collectionOption
      .setAttribute("value", collection);
      
    collectionOption.addEventListener("click", () => {
      debugger
    })
    collectionOption.innerHTML = collection;
      // collectionOption.onclick = 
    
    collectionSelect.append(collectionOption)
    // debugger
  })
  
  collectionForm.append(collectionSelect);
  collectionForm.append(collectionsSubmit);
  document.getElementById("main").append(
    collectionForm)
}