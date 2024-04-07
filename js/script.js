// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack.LeVasseur
// Created on: March 30,2024 
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates permiter of a cricle.
 */
function calculatePermeterAndAreaOfRectangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfTriangle = baseOfTriangle + heightOfTriangle + 9.85
  const HeightOfTriangle = (baseOfTriangle + heightOfTriangle) + 9.85

  // output
  document.getElementById('area').innerHTML = 'Perimeter is: ' + areaOfTriangle + ' cm'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfRectangle + 'cm'
}
