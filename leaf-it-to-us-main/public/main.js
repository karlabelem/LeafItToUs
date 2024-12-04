import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";

async function loadNotebook() {
  const notebook = await import("https://api.observablehq.com/d/deb529f79d4e9f60.js?v=4");
  const runtime = new Runtime();
  

  runtime.module(notebook.default, name => {
    if (name === "viewof selectedRootAttribute") {
      return new Inspector(document.getElementById("viewofSelectedRootAttribute"));
    }
    if (name === "treeWithLegend") {
      return new Inspector(document.getElementById("treeWithLegend"));
    }
    return true;
  });
}

document.addEventListener("DOMContentLoaded", loadNotebook);