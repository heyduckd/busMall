'use strict'
function imageInformation(productName, src, productDescription, productPrice) {
  this.productName = productName;
  this.src = 'img/' + src;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
}
function randomizer() {
  return Math.floor((Math.random() * products.length));}
var totalClicks = 0;
var r2d2 = new imageInformation('R2D2 Carry-On', 'bag.jpg');
var slicer = new imageInformation('Perfect Slice: Banana', 'banana.jpg');
var boots = new imageInformation('Boot Boots', 'boots.jpg');
var chair = new imageInformation('Bosu Chair', 'chair.jpg');
var figure = new imageInformation('Cthulhu Action Figure', 'cthulhu.jpg');
var dragon = new imageInformation('Dragon Meat', 'dragon.jpg');
var pen = new imageInformation('Pen Cap Silverware', 'pen.jpg');
var pizza = new imageInformation('Pizza Scissors', 'scissors.jpg');
var shark = new imageInformation('Shark Sleeping Bag', 'shark.jpg');
var sweep = new imageInformation('Baby Sweeper Onezie', 'sweep.jpg');
var unicorn = new imageInformation('Unicorn Meat', 'unicorn.jpg');
var usb = new imageInformation('Gator Tail 128GB USB', 'usb.gif');
var water = new imageInformation('Infinity Water Pot', 'water-can.jpg');
var wine = new imageInformation('Chug Wine Glass', 'wine-glass.jpg');
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
      rand2 = randomizer();}
      img2.src = products[rand2].src;
      products[rand2].timesDisplayed++;
  rand3 = randomizer();
    while (rand1 === rand3 || rand2 === rand3) {
      rand3 = randomizer();}
      img3.src = products[rand3].src;
      products[rand3].timesDisplayed++;}
  populator();
function eventChangeImage(image) {
  image.timesClicked++;
  totalClicks++;
  checkButton();
  populator();};
firstImage.addEventListener('click', function() {eventChangeImage(products[rand1]);});
secondImage.addEventListener('click', function() {eventChangeImage(products[rand2]);});
thirdImage.addEventListener('click', function() {eventChangeImage(products[rand3]);});
resultButton.addEventListener('click', firstChart);
var hidden;
  function checkButton() {
    if (totalClicks < 15) {
      resultButton.removeAttribute(hidden);
    } else {
      resultButton.style.display = 'block'}}
function firstChart() {
  document.getElementById('chartHeader').innerHTML = '';
  var chartHead = document.createElement('h1');
    chartHead.textContent = "Times Displayed (Blue) VS Times Clicked (Red)";
    chartHeader.appendChild(chartHead);
var allClicks = [];
var allViewings = [];
  for (var i = 0; i < products.length; i++) {
    allClicks[i] = products[i].timesClicked;
    allViewings[i] = products[i].timesDisplayed;}
var data = {
  labels: ['r2d2', 'slicer', 'boots', 'chair', 'figure', 'dragon', 'pen', 'pizza', 'shark', 'sweep', 'unicorn', 'usb', 'water', 'wine'],
  datasets: [
    {label: "Times Clicked",
    fillColor: "rgb(255,0,0)",
    strokeColor: "rgb(290,0,0)",
    highlightFill: "rgb(295,0,0)",
    highlightStroke: "rgb(290,0,0)",
    data: allClicks},
    {label: "Times Displayed",
    fillColor: "rgb(0,193,253)",
    strokeColor: "rgb(0,192,250)",
    highlightFill: "rgb(0,190,255)",
    highlightStroke: "rgb(0,191,255)",
    data: allViewings}]};
var context = document.getElementById('popularity').getContext('2d');
var myBarChart = new Chart(context).Bar(data);}
