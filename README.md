![Hitchhiker's Guide To Cocktails](/public/images/header.png "Sally's arm. Photo cred: Peter Holmgren") 
# Hitchhiker's Guide to Cocktails

## About 

  ### Menu Builder
  <p>I've written a lot of cocktail menus over the years, so this is a tool I've built to help streamline the process.
  It allows for you to input the name, ingredients and amounts of the cocktails, and spits out a formatted version to the text editor on the right (below on mobile devices). This formatted version automatically puts in methods for how to make the cocktail to DRY out some of the menu writing. You can also switch tabs to cost your cocktail and put the pricing in the menu if your bosses so please.</p>

  ### Cocktail Resource
  <p>This section is still under construction, but in the meantime I've included a link to (a slightly out of date) google doc of classic cocktails. I plan on rewriting this list to reflect the last few years of cocktail knowledge I've gained, and then convert it to a database that can be queried by Name, Ingredients, and Mother Cocktail.</p>

  ### Original Drinks 
  <p>This is just an area to show of some of my creations while I was at Bambara Kitchen and Bar in Cambridge MA. I was lucky enough to have a photographer on staff, so any of the really nice photos the credit all goes to Peter Holmgren.</p>

## Technologies Used

  - Built on React
  - CKEditor for a lightweight rich text editor
  - React-Router-Dom for CSR
  - Sass for styling
  - Webpack for minification

## What I've Learned So Far

  - Styling outside components

    <p>I had to do a lot of styling on the CKEditor to get it to fit with the site theme. In hindsight, it might've been easier to build my own editor from their source, so maybe I will try to do this in the future.</p>
  - Client side routing

    <p>I wanted this site to function as a SPA so I implemented React-Router-Dom, and got to play around with that. The CKEditor was a bit larger so I used lazy loading to hold off on loading that till the user picks the page.</p>
  - Sass Sass Sass

    <p>This is my first big project with Sass, I had a lot of fun playing around with mixins, variables, and some built in functions.</p>
  - Webpack

    <p>This is also my first big project where I'm configuring a lot of the webpack functionality. Learned a bit about code splitting, and a lot about the general webpack ecosystem. If anyone spots any errors in the config please let me know!</p>

## RoadMap

  - Add a cocktails state to the Menu Builder so that you can keep track of all of the cocktails you've built thus far.
  - Save states to local storage to prevent info loss on page refresh, and allow for switching between pages without losing cocktail info.
  - General accessibility concerns
    - Photo alts