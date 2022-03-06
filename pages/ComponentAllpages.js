/*
In this file we need to put all the pages 
we  need to show them on our website
*/

const about = `
<div class="about">
  <h1>About page</h1>
</div>


`;
const home = `
<div class="home">
  <div>
  <div class='logo'>
  <h1>SPG</h1>
  </div>
    
    <h2>Welcome in SPG library</h2>
  </div>
  <a href='https://github.com/Zaariy/MyLibJavascript' target='_blank' > Github Lib for Help </a>
</div>
`;
const contact = `
<div class="contact">
  <h1>contact single  page</h1>
</div>
`;
const errorPage = `
<div class="errorPage">
<h1>Error Page isn't defined</h1>
</div>
`;

export const listPages = {
  // We need put names of route pages as keys
  // and value of the key
  about: about,
  home: home,
  contact: contact,

  // this for error page like 404
  error: errorPage,
};

export const idOfElementHtml = "root";
