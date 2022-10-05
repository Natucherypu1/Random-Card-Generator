/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["heart", "spade", "club", "diamond"];
  let rank = ["A", "K", "Q", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function getRandomInt(array) {
    return Math.floor(Math.random() * array.length);
  }
  console.log(suits[getRandomInt(suits)]);
  console.log(rank[getRandomInt(rank)]);
};
