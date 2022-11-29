import _ from "lodash";
import "./style.css";
import icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 원래 있던 div 에 이미지를 추가합니다.
  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
