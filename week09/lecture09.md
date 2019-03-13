---
title: Lecture 9
layout: lecture
---

<!-- .slide: class="titleslide" -->

# Data Visualization
<div style="height: 6.0em;"></div>
## AJ Christensen
## Spring 2019
## Lecture 9

---

## Warm-Up Activity

 1. What is the visualization trying to show?
 1. What are its methods?
 1. What are the strengths / weaknesses?

[XKCD Money](https://xkcd.com/980/huge)

---

## Networked and Hierarchical Data

 1. Node-link diagrams
 1. Matrix views


notes:
There are two primary types of visualization for data that has inherent linkages.

---

## Node-link Diagrams

 1. Trees
 1. Force-Directed Graphs

<img src="images/circlesTree.png" width="400"/>

notes:
These are the primary ways that you would draw a linked node diagram.

---

## Node-link Diagrams

 1. Nodes
   * might have 0-to-many edges linked to them
 1. Edges
   * associated specifically with 2 nodes
   * can have a direction
   * can have a weight

<img src="images/coldWarLong.jpg" width="800"/>

notes:
This is a diagram of some selected military alliances during the Cold War.

---

## Node-link Diagrams

 1. Nodes
   * might have 0-to-many edges linked to them
 1. Edges
   * associated specifically with 2 nodes
   * can have a direction
   * can have a weight

<img src="images/geneticNetwork.png" width="800"/>

notes:
One common use-case for these is genetics. Scientists need visualizations to understand how one gene affects another, either directly OR **indirectly**.

---

## Tree Diagrams

 * Topological
 * Ordered
   * Left-to-Right
   * Inside-Out
 * Always one incoming edge (low density)
 * Discrete, not Continuous

<img src="images/trees.png" width="800"/>

notes:
trees have a topology or hierarchy. These are especially good for a *deep* hierarchy.

The physical space between nodes isn't meaningful like it would be in a scatter plot. Rather the number of "hops" along edges is important.

---

## Force-Directed Graphs

 * Nodes push away from each other as if their edges are springs.
 * Nodes push away from each other by local repulsion force.
 * Forces can be weighted.

<img src="images/forceDirectedGraph.gif" width="450"/>

notes:
These use simulated forces to push apart what might otherwise look like a mad hairball.

Edge springyness can be weighted by edge weight, node repulsion can be weighted by node weight.

You could place the points in any arbitrary place and let them evolve. You could start with a scatter plot representing numerical values, but the nodes will just move. You could also put all the points at the same starting place.

---

## Force-Directed Graphs

 * Path Distance
 * Joint or Disjoint
 * Discrete, not Continuous

<img src="images/disjoint.png" width="450"/>

notes:
These are useful for identifying clusters, finding all possible paths, finding the shortest path, finding all adjacent nodes, finding bridges between unconnected nodes, etc.

---

## Force-Directed Graphs

 1. Drawbacks:
   * Non-deterministic (different every time)
   * Link Density can be an issue when over 3-4 links per node

<img src="images/SocialNetworkAnalysis.png" width="550"/>

notes:
this is a social network graph that looks fine at high resolution, but on this screen is more or less unreadable.

---

## Matrix Views

 1. Adjacency Matrix
   * List all values along X AND Y axes

<img src="images/coldWarLong.jpg" width="400"/></td>
<img src="images/coldWarMatrix.png" width="400"/></td>

notes:
Matrix views remove occlusion and hairball issues completely. They are preferred for extremely dense data.

However they do not show topology, and they might be less intuitive to identify clustering.

---

## Matrix Views

 1. Adjacency Matrix
   * List all values along X AND Y axes
   * Can cut in half along diagonal if non-directional

<img src="images/foldedAdjacencyMatrix.jpg" width="450"/>

notes:
This is sometimes called a "Folded" adjacency matrix

---

## Matrix Views

 1. Adjacency Matrix
   * List all values along X AND Y axes
   * Can cut in half along diagonal if non-directional
   * Color cells by edge weight

<img src="images/brains.png" width="400"/>

notes:
Matrix views remove occlusion and hairball issues completely. They are preferred for extremely dense data.

However they do not show topology, and they might be less intuitive to identify clustering.

---

## Matrix Views

<img src="images/pokemonTypeChart.png" width="500"/>

notes:
Pokemon type-effectiveness chart yay!

Notice this is directional - Attackers and Defenders don't have same effect on different types.

---

## Hierarchical Data

 1. Trees
 1. Containment
   1. Treemaps

<img src="images/d3treemap.png" width="500"/>

notes:
containment better at shallow, broad trees than node-link tree diagrams

good for identifying topological outliers

This visualization is file size of the D3 visualization library.

---

## Hierarchical Data

 1. Trees
 1. Containment
   1. Treemaps
   1. Nested Circles

<img src="images/circlePacking.png" width="400"/>

notes:
This is also known as circle-packing.

---

## Compound Networks

 1. Network and Tree together

<img src="images/grouseFlocks.gif" width="350"/>
<img src="images/compoundNetwork.png" width="450"/>

notes:
Now we're combining a hierarchical nested circle containment WITH linked nodes from our cold war alliances.

There are lots of ways to combine types of network visualizations like this.

---

## Today - and assignment

We will be ending early for the noontime presentation at CIRSS.

You will have an assignment for this presentation, to be turned in by class
next week.  Your assignment is to follow along with this talk, take notes, and
supply a writeup about its usage of visualization:

 * How was visualization used in the talk?
 * How was visualization used in the discovery?
 * What were the types of visualization used? What comments did you have about
   them?

This writeup should utilize the vocabulary we use in class, and the
classification of the types of visualization.  It should be at a minimum 2
pages and include a description of the discovery presented, its context, and a
reasonable discussion of how visualization was used in the process.

---

## ipyleaflet

Leaflet is another mechanism of plotting, displaying and interacting with maps.
We will introduce ipyleaflet this morning.

---

## Today's Lab

Today: we will be building a dashboard.

The dataset is on data.world and is entitled:

"Surgery Charges Across the U.S."

We will take time to explore this dataset on our own, then discuss what we can
explore.
