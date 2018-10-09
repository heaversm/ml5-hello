// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

let inputImgArr = [];
let statusMsg;
let transferBtn;
let style1;

const numImages = 19;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input images
  for (let i=0;i<numImages;i++){
    inputImgArr[i]= select(`#inputImg${i+1}`);
  }
  
  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);

  // Create style method
  style1 = ml5.styleTransfer('models/kinect', modelLoaded);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  for (let i=0;i<numImages;i++){
    style1.transfer(inputImgArr[i], function(err, result) {
      if (result){
        createImg(result.src).parent('output-images');
      }
    });
  }

  statusMsg.html('Done!');
}