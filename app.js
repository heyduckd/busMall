'use strict'

function imageInformation(productName, src, productDescription, productPrice) {
  this.productName = productName;
  this.src = 'img/' + src;
  this.pDescription = productDescription;
  this.pPrice = productPrice;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
}

var totalClicks = 0;

function randomizer() {
  return Math.floor((Math.random() * products.length));
}

var r2d2 = new imageInformation('R2D2 Carry-On', 'bag.jpg', 'Take your own personal R2D2 around with you on your travels. This roller bag s TSA approved for carry-on size.', '$49.99');
var slicer = new imageInformation('Perfect Slice: Banana', 'banana.jpg', 'This contraption cuts your bananas in one easy motion. Great for feeding children or making fruit salads.', '$9.99');
var boots = new imageInformation('Boot Boots', 'boots.jpg', 'Looking for the rainboot style but not the feet sweat that comes with it? Try these on for size. They are styled like a rain boot but have ventilation for maximum breathability.', '$59.99');
var chair = new imageInformation('Bosu Chair', 'chair.jpg', 'Bosu balls have proven to increase core strength with certain excersizes. This chair allows you to sit and workout at the same time! Work on core strength while sitting at your computer, dinner table, or wherever you take this magnificent chair.', '$24.99');
var figure = new imageInformation('Cthulhu Action Figure', 'cthulhu.jpg', 'Your child\'s next favorite toy! This action figure is made with recycled materials and guarantees satisfaction for hours.', '$12.99');
var dragon = new imageInformation('Dragon Meat', 'dragon.jpg', 'Gain strength and muscle mass by consuming this canned dragon meat. A great source of protein and magical dragon powers.', '$3.99');
var pen = new imageInformation('Pen Cap Silverware', 'pen.jpg', 'Ultra compact eating utensils that attach to your writing aparatus! Never use your fingers to eat again.', '$2.99');
var pizza = new imageInformation('Pizza Scissors', 'scissors.jpg', 'This baby is the ultimate sidekick to eating pizza at home. Fuse your pizza cutter and your slice spatula into one and increase efficiency in the kitchen!', '$5.99');
var shark = new imageInformation('Shark Sleeping Bag', 'shark.jpg', 'Sleep in the warmth of this new sleeping bag that looks like a shark! Also doubles as a halloween costume.', '$69;99');
var sweep = new imageInformation('Baby Sweeper Onezie', 'sweep.jpg', 'Your beloved baby is always crawling around, so why not put them to use! They will be cleannig your floors without even knowing it!', '$27.99');
var unicorn = new imageInformation('Unicorn Meat', 'unicorn.jpg', 'Now you can fly with the mystical creatures of the universe. Eat this canned unicorn meat and you will start seeing these creatures all around you! Fly and run with them for 30 minutes after consumption.', '$3.99');
var usb = new imageInformation('Gator Tail 128GB USB', 'usb.gif', 'Never run out of thumb drive storage with this massive 128GB USB storage device. When you plug it in, the tail wiggles like it\'s been freshly chopped off!', '$15.99');
var water = new imageInformation('Infinity Water Pot', 'water-can.jpg', 'This watering pot never runs out of water! Once you put water in, it will water itself for as long as your arm can hold it up! Great photo prop.', '$9.99');
var wine = new imageInformation('Chug Wine Glass', 'wine-glass.jpg', 'Some people drink wine to be classy, but you drink wine to get drunk! This wine glass is made for you. Never spill when things get intense. Put your entire mouth around the opening and no liquid will be spilt!', '$7,99');

var img1 = document.getElementById('firstImage');
var img2 = document.getElementById('secondImage');
var img3 = document.getElementById('thirdImage');

var result1 = document.getElementById('hidden');

var rand1;
var rand2;
var rand3;

var products = [r2d2, slicer, boots, chair, figure, dragon, pen, pizza, shark, sweep, unicorn, usb, water, wine];

function populator() {
  rand1 = randomizer();
  img1.src = products[rand1].src;
  products[rand1].timesDisplayed++;

  rand2 = randomizer();
  while (rand1 === rand2) {
    rand2 = randomizer();
  }
  img2.src = products[rand2].src;
  products[rand2].timesDisplayed++;

  rand3 = randomizer();
  while (rand1 === rand3 || rand2 === rand3) {
    rand3 = randomizer();
  }
  img3.src = products[rand3].src;
  products[rand3].timesDisplayed++;
}
populator();

function eventChangeImage(image) {
  image.timesClicked++;
  totalClicks++;
  checkButton();
  populator();
};

firstImage.addEventListener('click', function() {
  eventChangeImage(products[rand1]);
  });

secondImage.addEventListener('click', function() {
  eventChangeImage(products[rand2]);
  });

thirdImage.addEventListener('click', function() {
  eventChangeImage(products[rand3]);
  });

var hidden;
  function checkButton() {
    if (totalClicks < 15) {
      resultButton.removeAttribute(hidden);
    } else {
      resultButton.style.display = 'block'
    }
  }

resultButton.addEventListener('click', firstChart);

function firstChart() {
var allClicks = [];
var allViewings = [];
  for (var i = 0; i < products.length; i++) {
    allClicks[i] = products[i].timesClicked;
    allViewings[i] = products[i].timesDisplayed;
}

var data = {
  labels: ['r2d2', 'slicer', 'boots', 'chair', 'figure', 'dragon', 'pen', 'pizza', 'shark', 'sweep', 'unicorn', 'usb', 'water', 'wine'],
  datasets: [
    {
    label: "Times Clicked",
    fillColor: "rgba(220,220,220,0.5)",
    strokeColor: "rgba(220,220,220,0.8)",
    highlightFill: "rgba(220,220,220,0.75)",
    highlightStroke: "rgba(220,220,220,1)",
    data: allClicks
    },
    {
    label: "Times Displayed",
    fillColor: "rgba(151,187,205,0.5)",
    strokeColor: "rgba(151,187,205,0.8)",
    highlightFill: "rgba(151,187,205,0.75)",
    highlightStroke: "rgba(151,187,205,1)",
    data: allViewings
    }
  ]
};

var context = document.getElementById('popularity').getContext('2d');
var myBarChart = new Chart(context).Bar(data);
}
