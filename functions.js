$(document).ready(function(){
  // Smoothly scroll to place when nav buttons are pressed
  $(document).on('click', 'a.NavButtons', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($( $.attr(this, 'href') ).offset().top - (7 * (100 / document.documentElement.clientWidth)))
    }, Math.abs($( $.attr(this, 'href') ).offset().top - $(window).scrollTop()) / 2);
  });

  function scrollImages() {
    var imageOne = document.getElementById('spOne');
    var imageTwo = document.getElementById('spTwo');

    var topImage = imageTwo;
    var bottomImage = imageOne;
    if (imageOne.style.opacity >= 1.0) {topImage = imageOne; bottomImage = imageTwo;}
    else if (imageTwo.style.opacity >= 1.0) {topImage = imageTwo; bottomImage = imageOne}

    unfade(bottomImage);
    fade(topImage);
    setTimeout(scrollImages, 4000);
  }
  setTimeout(scrollImages, 5000);

  var index = 2;
  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1) {
          element.style.display = 'none';
          clearInterval(timer);
          if (index < 19) {index += 1}
          else if (index == 19) {index = 1}
          element.src = "Images/HEADERIMAGES/scrollingPic" + index + ".JPG";

      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 70);
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
    }, 70);
  }
});

function showVideo(source) {
  document.getElementById('videoPlayerContainer').style.width = '80%';
  document.getElementById('videoPlayerContainer').style.height = '45vw';
  document.getElementById('videoPlayer').src = source;
  document.getElementById('closeButton').text = "X"
  return false;
}
function closeVideo() {
  document.getElementById('videoPlayerContainer').style.width = '0';
  document.getElementById('videoPlayerContainer').style.height = '0';
  document.getElementById('videoPlayer').src = "";
  document.getElementById('closeButton').text = "";
}