---
title: Lecture 12
layout: lecture
visible_lec: true
visible_n: true
---

<!-- .slide: class="titleslide" -->

# Data Visualization
<div style="height: 6.0em;"></div>
## Jill P. Naiman
## Spring 2019 (Online)
## Lecture 12

---

## Warm-Up Activity

 1. What is the visualization trying to show?
 1. What are its methods?
 1. What are the strengths / weaknesses?
 1. Would you know how to make something like this?

http://biologylabs.utah.edu/farmer/index_dinosaur.html

---

## Today

 * Scientific Visualization

---

## Information Visualization

So far: Spatial encoding is chosen by the designer

---

## Scientific Visualization

Sci Viz: Spatial encoding is provided in the data

---

## Spatial Data

 1. Geometry
 1. Volumetric Fields

---

## Spatial Data

 1. Geometry
   * Polygons
   * Point Clouds

notes:
point clouds can be static, or they can have physics which make them a "particle system".

---

## Spatial Data

 2. Volumetric Fields
    * Scalar
    * Vector

notes:
Fields can be 2D or 3D. Images can be used as 2D data fields.

---

## Spatial Data

 2. Volumetric Fields
    * Uniform or non-uniform
    * Rectangular or non-rectangular

notes:
Adaptive mesh refinement is an especially efficient 3D storage for datatypes that have small areas of high detail.

---

## Spatial Data Types

 1. Statistical
 1. Observational
 1. Simulated from computer models

---

## Visualizing Point Data

 * Dots with scale
 * Sprites
 * Meshing

---

## Visualizing Polygons

 * Vector lines with width, can be filled
    * Think geographic data
 * Direct rendering of architectural schematics
 * Direct rendering of 3D scans (pre-meshed)

---

## Visualizing Scalar Fields

 * Slice
 * Isosurface
 * 3D Volumetric Rendering

---

## Visualizing Vector Fields

 * Arrow glyphs
 * Streamlines / Streamtubes

---

## yt

yt is an open-source, permissively-licensed python package for analyzing and visualizing volumetric data.

There is a good portion of the yt group here at UCSC and NCSA!

<!--yt creator Dr. Matt Turk originated this course!-->

---

## Final Project: Part 3
