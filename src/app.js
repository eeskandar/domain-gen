/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const test = document.querySelector("#allTheRes");

  let pron = ["the", "da", "our", "your"];
  let adj = ["best", "worst", "mid", "normal"];
  let nouns = ["page", "try", "invention", "experiment"];
  let dot = [".com", ".en", ".es", ".io"];
  const allMix = [""];
  const mixer = (arr1, arr2, arr3, arr4) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let ii = 0; ii < arr2.length; ii++) {
        for (let iii = 0; iii < arr3.length; iii++) {
          for (let iv = 0; iv < arr4.length; iv++) {
            let list = arr1[i] + arr2[ii] + arr3[iii] + arr4[iv];

            allMix.push(list);
          }
        }
      }
    }
  };

  mixer(pron, adj, nouns, dot);
  console.log(allMix);
};
