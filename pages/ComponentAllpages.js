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
  <h1>Home page</h1>
</div>
`;
const contact = `
<div class="contact">
  <h1>contact single  page</h1>
</div>
`;

export const listPages = {
  // We need put names of route pages as keys
  // and value of the key
  about: about,
  home: home,
  contact: contact,
};
