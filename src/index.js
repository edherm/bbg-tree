import "./styles/index.scss";
import createTree from "./scripts/create_tree";
import buildPage from "./scripts/build_page";



window.addEventListener("DOMContentLoaded", () => {
  // document.body.append(
  //   "Source: <a>https://www.bbg.org/cgi/plant-records/search.cgi"
  // );
  buildPage();
})