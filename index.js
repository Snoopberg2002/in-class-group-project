// add menu toggle to bars icon in nav bar
import { Nav, Main } from "./components";
import * as state from "./store";



document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
