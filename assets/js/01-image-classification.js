let featureExtractor; //the thing that allows to make assumptions about a specific group
let classifier; //the thing that separates those assumptions into one group vs another
let video; //the webcam image
let loss; //when comparing training vs. validation, how well is the model doing per iteration of optimization
let pose2Images = 0;
let pose1Images = 0;

function setup() {
  noCanvas();
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.parent('videoContainer');
  // Extract the already learned features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new classifier using those features and give the video we want to use
  classifier = featureExtractor.classification(video, videoReady);
  // Create the UI buttons
  setupButtons();
}

// A function to be called when the model has been loaded
function modelReady() {
  select('#modelStatus').html('Base Model (MobileNet) loaded!');
}

// A function to be called when the video has loaded
function videoReady () {
  select('#videoStatus').html('Video ready!');
}


// Classify the current frame.
function classify() {
  classifier.classify(gotResults);
}

// A util function to create UI buttons
function setupButtons() {
  // When the pose1 button is pressed, add the current frame
  // from the video with a label of "pose1" to the classifier
  buttonA = select('#pose1Button');
  buttonA.mousePressed(function() {
    classifier.addImage('pose1');
    select('#numPose1Images').html(pose1Images++);
  });

  // When the pose2 button is pressed, add the current frame
  // from the video with a label of "pose2" to the classifier
  buttonB = select('#pose2Button');
  buttonB.mousePressed(function() {
    classifier.addImage('pose2');
    select('#numPose2Images').html(pose2Images++);
  });

  // Train Button
  train = select('#train');
  train.mousePressed(function() {
    classifier.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);
}

// Show the results
function gotResults(err, result) {
  if (err) {
    console.error(err);
  }
  select('#result').html(result);
  classify();
}