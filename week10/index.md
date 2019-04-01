---
layout: week
visible: true
---

# Week 10 - Iterative Design, Idyll

This week we talked a bit about iterative design, then the final project, and
ended with discussion about the Idyll framework.

# Resources

 * <a href='corg/imgcropped.png' download>Example image to download for Idyll build</a>
 * <a href='data/corgiData.json' download>Example dataset for Idyll build</a>

## Beginning Idyll code

 * We will be heavily modifying you're default : the <a href="idyll_website/index.idyll" download>index.idyll</a> file.  I've included my notes in that download if its easier to follow along that way.
 * Also, check that the package.json file matchs <a href="idyll_website/package.json" download> the one right here</a>.

### General install instructions:

A video of this process (with errors & explaination) for Macs can be <a href="https://youtu.be/mWxXmWk_vDU">found right here</a>.

A video of this process (with errors & explaination) for Windows 10 can be <a href="https://youtu.be/nQ2FFGzREos">found right here</a> (and see notes at the end of this section).


1. Install Idyll:
```
npm install -g idyll
```
1. Create new post with idyll
```
idyll create
```
1. cd into post directory
1. Install dependencies to install vegalite
```
npm install --save acorn@^6.0.0 vega-lite@^2.0.0 react@^16.0.0 react-dom@^16.0.0 vega@^3.3.1
```
1. Install vegalite for Idyll
```
npm install --save idyll-vega-lite
```
1. Copy <a href="idyll_website/index.idyll" download>index.idyll</a> to your post directory
1. Update <a href="idyll_website/package.json" download>package.json</a> file to match the linked one
1. Build this website with
```
idyll
```

**Notes for Windows install:**

* You need to have Nodejs installed - <a href="https://nodejs.org/en/download/">download link here</a>. You will have to restart your computer.
* You need to have git installed - <a href="https://git-scm.com/">download link here</a>.  You will have to restart your computer.


# Final Project Resources

 * Google doc of <a href="https://docs.google.com/document/d/15UJinT5XokAHXd9fQAYD8f6d3vEkR6kJMq8kswmkOhY/edit?usp=sharing">available datasets</a>.  Feel free to use one of your own!
 
# Outline of Topics

This week our objectives will be to (1) think about how we construct visualizations based on our audiences, (2) discuss the final project, (3) start working on publishing some visualizations with Idyll, (4) have a brief introduction to the concept of scientific visualization.

We introduce Idyll this week and continue on with more Idyll next week.


 * Lecture
   1. Distinction of "viz for self", "viz for peers/experts", "viz for others/outreach/public"
   1. Storytelling and knowing your audience
   1. Visualizations for the web - overview of html/D3.js/etc

 * Programming
   1. Introduction to scientific visualization with Python and [yt](https://yt-project.org/) - how to get data and simple plots (we'll cover this more later, but if you want to use some sci viz for your final project we'll go through the basics)
   1. Introduction to some command line tools
   1. Introduction to Idyll
   1. Introduction to vega-lite in Idyll

# Extra Resources

 * <a href='corg/grabCorgData.py'>Webscrape Python code for this week's dataset</a>
 * <a href="chatWindowHist.txt">Chat window text from missed recording on Thursdays class</a>

**Long form Idyll install instructions more Macs/Unix/Linux:**

1. Install idyll with: ```npm: npm install -g idyll``` (the -g is to install globally - you probably need root access.  If you don't have root access, then leave out the -g and make a note of where idyll installs.  When I say "idyll" you will have to provide the entire path like ```/Users/jillnaiman1/MYINSTALLLOCATION/idyll```)
1. Run idyll: ```idyll create``` (select a directory and post name)
1. cd into your post directory
1. type ```idyll``` to build and run
1. install vega-lite for idyll, in your post directory run:
```
npm install --save idyll-vega-lite
```
you will probably get some errors about dependencies not being installed
1. To fix these dependencies run:
```
npm install --save acorn@^6.0.0 vega-lite@^2.0.0 react@^15.5.4 react-dom@^15.5.4 vega@^3.0.0
```
(or what ever packages you are missing)
1. Re run the vega-lite install to double check: ```npm install --save idyll-vega-lite``` and you should have less errors
1. You will want the latest version of react, so you can do:
```
npm install --save react@^16.0.0 react-dom@^16.0.0
```
1. Try replacing your index.idyll file with the <a href="idyll_website/index.idyll">index.idyll file attached above</a>
1. Check your package.json file and make sure it reacts like the <a href="idyll_website/package.json">package.json file attached above</a>

