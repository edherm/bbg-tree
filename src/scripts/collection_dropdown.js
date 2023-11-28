export default (collections) => {
  const collectionForm = document.createElement("form");
  const collectionSelect = document.createElement("select");
    collectionSelect.setAttribute("id", "collections");
  const selectLabel = document.createElement('label')
    selectLabel.innerText = 'Collection Location:'
    selectLabel.setAttribute('for', 'collections')

  collections.forEach(collection => {
    const collectionOption = document
      .createElement("option");
    collectionOption
      .setAttribute("value", collection);

    collectionOption.innerHTML = collection;
    
    collectionSelect.append(collectionOption)
  })
  
  collectionForm.append(selectLabel);
  collectionForm.append(collectionSelect);
  document.getElementById("main").append(
    collectionForm)
}