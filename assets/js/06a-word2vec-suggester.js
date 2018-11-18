// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Word2Vec example with p5.js. Using a pre-trained model on common English words.
=== */

let word2Vec;

function modelLoaded() {
  select('#status').html('Model Loaded');
}

function setup() {
  noLoop();
  noCanvas();

  // Create the Word2Vec model with pre-trained file of 10,000 words
  word2Vec = ml5.word2vec('/assets/data/wordvecs10000.json', modelLoaded);

  // Select all the DOM elements
  let story = select('#story');
  let nearResults = select('#results');

  story.elt.addEventListener('keyup',(e)=>{
    //console.log(e.keyCode);
    if (e.keyCode === 32){ //spacebar
      const sentence = story.value(); 
      const words = sentence.split(" ");
      const lastWord = words[words.length -2];
      word2Vec.nearest(lastWord, (err, result) => {
        let output = '';
        if (result) {
          for (let i = 0; i < result.length; i++) {
            output += result[i].word + '<br/>';
          }
        } else {
          output = 'No word vector found';
        }
        nearResults.html(output);
      });
    }
  });

  

}
