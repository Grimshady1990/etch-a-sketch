# Introduction

This program is a web version of the classic etch-a-sketch that uses mouse over to draw by changing the colors of squares in a grid.

# Plan

For this to work it needs to achieve the following:

- A button that accepts a value between 1-100 ✅

- A function that takes that value and returns the square of that value ✅

- A function that takes the square and uses it to create the same number of cells as the value of square. ✅

- The cells need to be styled with flex so they fit the container and shrink and grow depending on the amount that have been created (The container must remain the same size).

- The cells must change color when the mouse hovers over them giving the illusion of drawing.

- The cells color must randomize with each hover.

- the cells opacity must increase by 10% every time the mouse hovers over a cell reaching full color after 10 hovers 


# BrainStorming

Okay so I have realized that flex is one dimensional meaning it can only be columns or rows it cannot be both. This means I cannot fill cells of different sizes into one container.

instead of finding the square number to fill the container I must use the root number. to create the root number of containers and the root number of cells. Lets write some pseudo code to work out how we are going to do this.

// CREATE a for loop that takes the root number and creates the same number of sub containers

// CREATE a for each loop that fills each sub container with the root number of cells.