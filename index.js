// add menu toggle to bars icon in nav bar
import { Nav, Main } from "./Components";
import * as state from "./store";

const render = () => {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}

render();


document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
