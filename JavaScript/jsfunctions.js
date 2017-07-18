function scrollImages() {
  var imageOne = document.getElementById('spOne');
  var imageTwo = document.getElementById('spTwo');

  var topImage = imageTwo;
  var bottomImage = imageOne;
  if (imageOne.style.opacity >= 1.0) {topImage = imageOne; bottomImage = imageTwo;}
  else if (imageTwo.style.opacity >= 1.0) {topImage = imageTwo; bottomImage = imageOne}

  fade(topImage);
  unfade(bottomImage);


  setTimeout(scrollImages, 4000);
}
setTimeout(scrollImages, 2000);



function showVideo(source) {
  document.getElementById('videoPlayerContainer').style.width = '80%';
  document.getElementById('videoPlayerContainer').style.height = '45vw';
  document.getElementById('videoPlayer').src = source;
  document.getElementById('closeButton').text = "Close"
  return false;
}
function closeVideo() {
  document.getElementById('videoPlayerContainer').style.width = '0';
  document.getElementById('videoPlayerContainer').style.height = '0';
  document.getElementById('videoPlayer').src = "";
  document.getElementById('closeButton').text = "";
}

var index = 2;
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
        if (index < 19) {index += 1}
        else if (index == 19) {index = 1}
        element.src = "Images/HEADERIMAGES/scrollingPic" + index + ".JPG";

    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

$('html, body').animate({
  scrollTop: $("#target-element").offset().top
  }, 1000);
});
