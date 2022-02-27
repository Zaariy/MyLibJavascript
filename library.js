class SinglePageJavascript {
  // single page javascript library
  // with just one click
  constructor(idHtmlElement) {
    this.idHtmlElement = idHtmlElement;
    this.chickFunction();
  }
  chickFunction() {
    if (!location.hash) {
      location.hash = "#home";
    }

    return location.hash;
  }

  switchContent(locationHash) {
    var pages = {
      home: "This is home Page",
      about: "This is about Page",
      contact: "This is contact Page",
    };
    return pages[locationHash];
  }

  getIdElement() {
    document.getElementById(
      this.idHtmlElement
    ).innerHTML = `<div class="content"> ${this.switchContent(
      this.chickFunction().substring(1)
    )}</div>`;
  }
}

const singlePage = new SinglePageJavascript("root");
// When do reload page
window.onload = singlePage.getIdElement();
//
window.addEventListener("hashchange", function () {
  singlePage.getIdElement();
});
