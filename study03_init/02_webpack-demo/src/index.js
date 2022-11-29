import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");
  //loadsh
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  //css import
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
