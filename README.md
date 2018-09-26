# MACHINE LEARNING

Process information similar to the way the brain does, through **[Neurons](https://www.quora.com/What-are-neurons-in-machine-learning)**. Neurons receive input, perform some sort of processing on that input, and sends it off as output (like a filter). Performs those same four steps as LSTM - delete, update, insert, output.

## HISTORY

### 1940s
Neural nets pioneered in the 1940s with [Turing B-Type Machines](https://en.wikipedia.org/wiki/Unorganized_machine), based off an ambition by [Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace)(first computer programmer) and [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage)(inventor of the first mechanical computer) to build a "calculus of the nervous system", and research being done into **neuroplasticity** - the idea that through repeat activations of neighboring neurons, efficiencies are gained, forming the basis for unsupervised learning (cells that fire together wire together).

#### 1950s
Marvin Minsky's [SNARC](https://en.wikipedia.org/wiki/Stochastic_neural_analog_reinforcement_calculator) is the first Neural Network Machine. The [Perceptron](https://en.wikipedia.org/wiki/Perceptron) brings attention to the field through its attempts to do image recognition via Linear Regression.

#### 1990s
Until this point, the primary application was in support vector machines, essentially calculating probability through linear regression. Examples include image classification and text categorization. 

IBM's Deep Blue beat Gary Kasparov in chess.

[LSTMs](https://en.wikipedia.org/wiki/Long_short-term_memory) invented, improving efficiencies.

[MNIST](https://en.wikipedia.org/wiki/MNIST_database) database for handwriting recognition by American Census Bureau and some high school kids. Free labor!

#### 2009
"deep belief networks" were introduce for speech recognition. 

[ImageNet](https://en.wikipedia.org/wiki/ImageNet) Introduced. Catalyst for our current AI boom. 

#### 2011

IBM's [Watson](https://en.wikipedia.org/wiki/Watson_(computer)) beats human competitors in Jeopardy.

#### 2012

**convolutional neural networks**(CNNs)

#### 2014

[DeepFace](https://en.wikipedia.org/wiki/DeepFace) by Facebook increases facial recognition accuracy by 27% over previous systems, rivaling human performance.

[Deep Dream](https://en.wikipedia.org/wiki/DeepDream)

![Google Deep Dream](https://upload.wikimedia.org/wikipedia/commons/6/65/Aurelia-aurita-3-0049.jpg)

#### TODAY

Deep Learning is more accessible than ever. Computation can be done in the cloud, we have more and more data available from which to learn from, and frameworks for machine learning are increasingly numerous. Popular frameworks such as [Tensorflow](https://en.wikipedia.org/wiki/TensorFlow) have been extrapolated to more and more accessible languages, including [ML5](https://ml5js.org/), which we'll be using in this class.

## MACHINE LEARNING FOR ART

Mario Klingemann

Gene Kogan


## WHAT IS IT?

Machine Learning is the concept of assigning an objective to a computer, giving it a concept of success, failure, and progress, and giving it the ability to evaluate and adapt along the way to find an optimal solution.

This is done through **neural networks**

How are neural nets trained? **Gradient descent**. Sort of like finding your way down a mountain in the dark with a weak flashlight. You Look in all directions, see which step takes you furthest down, take a step, then repeat. 

![Gradient Descent](https://ml4a.github.io/images/figures/lin_reg_mse_gradientdescent.png)

How do we evaluate our progress? **Linear regression** is one option: find a line of best fit. Our evaluation criteria is called a **loss function**, determining distance between line and data points and penalizing us for greater distances.

![Linear Regression](https://ml4a.github.io/images/figures/lin_reg_error.png)


![Gradient Descent](https://ml4a.github.io/images/figures/opt2a.gif)

But neural networks for practical problems are not linear! They have many dimensions / variables. Rather than having a nice easy bowl shape, they're full of hills and troughs, which can greatly complicate things.

![Dimensionality](https://ml4a.github.io/images/figures/non_convex_function.png)

The more variables we have to solve for, the more neurons we need, increasing processing time exponentially. With just brute force guessing, trying to classify a set of digits from 0-9 would take 10×12000 guesses (784 input neurons, 15 hidden, 10 output) . There are only 10*80 atoms in the universe! So we need to optimize.

One way to do this is to figure out how far we step in a given direction. This is influenced by learning rate. Too far, we may end up back uphill, too close, we'll never get down. 

There's gonna be some redundancy in our progress - if we have a long stretch of downhill, we don't need to evaluate every single step. In ML we can batch it out. 

When we have high confidence or continued success in our path, we can use inertia to keep going in more or less the same path. If we keep choosing uphill, we eventually run out of inertia and need to find a better path. 

Another optimization method is [back propagation](https://en.wikipedia.org/wiki/Backpropagation) - taking what we've learned at our current progress step and applying it backward to all previous ones to figure out what is no longer necessary. This allows us to increase our learning rate. Humans do this all the time! So you can see 





## IMAGES

### CNNs

Most commonly use a **[Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network)**. In a CNN, the **convolution** is the process of comparing one set of numbers to another based on defined weights and biases to arrive at a single output number. The mathematical operation that gives us this is the **dot product**. 

With respect to images, that means taking parts of an image, identifying their features, and using those features to make assumptions about the image as a whole.

  

Uses:

* Detecting and labeling things in images
* Speech to text
* Autonomous navigation
* Generative audio/visuals




### FEATURE EXTRACTION

[Link](https://en.wikipedia.org/wiki/Feature_extraction)

Starting with an initial set of measured values, we derive values, i.e. generalization, interpretation, prediction.

### IMAGE CLASSIFICATION

Predicting a label (mapping input to discrete output)


We will be using **ML5** for most of our image processing in class. ML5 is A machine learning library built on top of [tensorflow.js](https://js.tensorflow.org/) and modeling the coding practices of [p5.js](https://p5js.org/) / processing.

ML5 Image Classifier is trained on [ImageNet](http://www.image-net.org/) - a database of 15 million images.

[Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning) - Storing knowledge gained during solving one problem and applying it to another problem. Reduces the number of variables we have to solve for. In the case of images, methods might include feature or edge detection, thresholding, etc.`

[Dog Cat Example](hello/cat-dog.html)

#### REGRESSION

Predicting a quanitity (mapping input to continuous output) (see [difference between classification and regression](https://machinelearningmastery.com/classification-versus-regression-in-machine-learning/))

**Discrete output**: can only have a value that belongs to a set of values

**Continuous output**: can have any limitless value

**Loss**: The penalty for guessing wrong. Our model tries to minimize loss across all of our samples. If the prediction for a particular sample is perfect, the loss is zero. 

**Overfitting**: If you create too many samples and over-train your model, it can 'memorize' your training data, and is in danger of making improper assumptions about a wider set of data (**validation data**) with values that might be outliers to those found in your test data. 

### STYLE TRANSFER

Recomposing images in the style of other images using **[Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network)**. 

What is a style? In this case, it is a spatial correlation among images (i.e. comparing parts of one image to parts of another). Style is determined by calculating the **loss** with a **Gram matrix** - essentially just a matrix of dot products for the features of a style layer. If two images have the same Gram matrix, they have the same style (though not the same content necessarily).

![Gram Matrix](https://shafeentejani.github.io/assets/images/style_transfer/style_reconstruction.png)

CNNs build information layer by layer, with higher layers basing their information off the learnings of lower layers. The high level layers in the network capture the style of the image. The low level layers capture the content (house, river, trees). 

In Style Transfer, we are comparing pixel values of a source image to pixel values of reference image to arrive at a new image by deciding how heavily we want to favor the style or the content, and how heavily we want to favor the source or the reference. 

We can optimize this algorithmically, by calculating the **[gradient](https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html)** between content and style - figuring how much effort is required for a good result (cost) at each step (increase in weight between content and style). At the bottom of this curve is our optimal point. 

![Gradient](https://ml-cheatsheet.readthedocs.io/en/latest/_images/gradient_descent_demystified.png)

A CNN always assumes we are dealing with images.

![Dot Product](https://wikimedia.org/api/rest_v1/media/math/render/svg/be560d2c22a074c7711ae946954725d31ec77928)

![Convolution](https://upload.wikimedia.org/wikipedia/commons/b/b9/Convolution_of_spiky_function_with_box2.gif)


To create our own style with which to render images, we need to train a model. **This is a very time and processor intensive process**, therefore it is important to have a good GPU. Relying on the CPU could take months! 

Why so processor intensive? Our filter is a width/height/depth. For example, 5x5x3, where we are sampling 5 pixels in width by 5 pixels in height by 3 color channels - Red,Green,Blue.

This takes a ton of memory. Why? We have to store the results of previous tests to compare them to current ones if we are to have successful learning.

Optimizations have been gained with Fast Style Transfer, which, instead of iterative optimization, uses single-pass **[feed-forward generator networks](https://arxiv.org/pdf/1607.08022.pdf)**. 

#### STYLE TRANSFER MODEL TRAINING

[Using Tensorflow](https://github.com/ml5js/training-styletransfer)

[Using Paperspace](https://blog.paperspace.com/creating-your-own-style-transfer-mirror/):


Luckily, there are many cloud computing platforms that allow you to do your model training on machines dedicated to this sort of thing, and then download the result. 

We will be using paperspace's [gradient](https://www.paperspace.com/gradient). It has been trained on the [COCO](http://cocodataset.org/#home) dataset - 15GB of images trained for object detection. 

**Process**:

* Install dependencies (Git, NPM, PIP/Python)
  * [Node](https://nodejs.org/en/)
  * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [Python](https://www.python.org/downloads/)
* [Create paperspace account](https://www.paperspace.com/)
* [Create an API Key](https://www.paperspace.com/console/account/api)
* [Get the sample project](http://github.com/heaversm/)
* Install paperspace API on your machine:

`npm install -g paperspace-node` or `pip install paperspace`, or [download here](https://github.com/Paperspace/paperspace-node/releases).

* Log in to paperspace in your console:

`paperspace login`

* Pick an image from your computer that you want as the reference style. Make it no bigger than 500x500 pixels.

* Update the python script to reference that image.

    * In `run.sh`, change the path of `--style images/[YOUR_IMAGE]` to the filename of the image you want for styling all other images.

* Create a paperspace job to process the training in the cloud. This will take a few hours. 

`paperspace jobs create --container cvalenzuelab/styletransfer --machineType P5000 --command './run.sh' --project 'Style Transfer training'`:

  * `--container` refers to a **[docker](https://www.docker.com/) image that is pre-configured to do our style transfer processing. It installs all the stuff to train the model on the gradient cloud computer so we don't have to install it ourselves on our own machines. 

  * `--machineType` is a reference to the computer we want to use for processing. Faster machines cost more money. `P5000` is a mid-tier machine.

  * `--command` runs the `run.sh` script that we edited.

  * `--project` can be whatever we want to call this so we have a reference in Paperspace.

* Download the model and put it in our project:

From within the `models` directory of our local project, run: `paperspace jobs artifactsGet --jobId YOUR_JOB_ID` where job ID can be found in paperspace under `Gradient > Jobs` in the `Machine Type / JOBID` column. Or click on the item under `project` column, and click `download workspace` and then copy over the content of the `artifacts` folder into a new directory within `models` of your local project.

![INSERT JOB ID SCREENSHOT]()

* Point the sample project to our new model directory

In `sketch.js`, change `const style = new ml5.styleTransfer('./models/YOUR_NEW_MODEL');` to reference the name of the directory you made for your artifact from the step above.

* Run, and view the result!

  * From the directory containing `sketch.js`, run `python -m SimpleHTTPServer` (python2) or `python -m http.server` (python3).


#### STYLE TRANSFER REFERENCES

* [A Neural Algorithm of Artistic Style](https://arxiv.org/pdf/1508.06576.pdf)
* [Perceptual Losses for Real Time Style Transfer](https://cs.stanford.edu/people/jcjohns/eccv16/)
* [Art with Neural Networks](https://blog.paperspace.com/art-with-neural-networks/)
* [Instance Normalization for Fast Stylization](https://arxiv.org/pdf/1607.08022.pdf)
* [Fast Style Transfer Github Repo](https://github.com/lengstrom/fast-style-transfer#documentation)



## TEXT

### LSTM

[LSTM](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) stands for Long Short Term Memory. A neural network architecture useful for working with sequential data where the order of the sequence matters.

Trained on a **recurrent neural network (RNN)**: network with loops to create persistence. You don't learn by throwing away everything you learned and learning anew, you base your knowledge of things you've learned in the past. In machine learning, this is slow, but effective. **Long Term** means they can use the past to connect to the present.

Consists of 4 steps:

* Decide what to throw away
* Decide what to update
* Decide what new information to allow
* Decide what to output

Ex: Pretrained body of text to generate new text

**Temperature**: Controls the randomness of the output. 0 means random, but potentially unrecognizable english. 1 means english, but potentially more scripted from the reference material. Temperature involves finding a balance between inventive and referenced.