// import pages from file {ComponentAllpages.js}

import { listPages, idOfElementHtml } from "../pages/ComponentAllpages.js";

export class SinglePageJavascript {
  // single page javascript library
  // with just one click
  constructor(idHtmlElement) {
    this.idHtmlElement = idHtmlElement || "root"; // Default name of element html is 'root'
    this.chickFunction();
    // render page
  }

  chickFunction() {
    if (!location.hash) {
      location.hash = "#home";
    }

    return location.hash;
  }

  switchContent(locationHash) {
    // Here we put all pages from folder pages pages.js
    const arraySavePages = [];
    const keys = Object.keys(listPages);

    for (let i = 0; i < keys.length; i++) {
      arraySavePages[keys[i]] = listPages[keys[i]];
    }

    // If page is not  found
    if (!arraySavePages[locationHash]) {
      return arraySavePages.error;
    }
    return arraySavePages[locationHash];

    // console.log(listElementPages[0].element);
  }

  getIdElement() {
    document.getElementById(
      this.idHtmlElement
    ).innerHTML = `<div class="content"> ${this.switchContent(
      this.chickFunction().substring(1)
    )}</div>`; // this.chickFunction().substring(1)
  }
}
const singlePage = new SinglePageJavascript(idOfElementHtml);

window.onload = singlePage.getIdElement();
//
window.addEventListener("hashchange", function () {
  singlePage.getIdElement();
});
