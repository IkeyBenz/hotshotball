$(document).ready(function(){
  // Smoothly scroll to place when nav buttons are pressed
  $(document).on('click', 'a.NavButtons', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($( $.attr(this, 'href') ).offset().top - (20 * (100 / document.documentElement.clientWidth)))
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
          if (index < 23) {
            if (index == 15) {index += 3}
            else if (index == 19) {index += 2}
            else {index += 1}
          }
          else if (index == 23) {index = 1}
          element.src = "Images/HEADERIMAGES/scrollingPic" + index + ".JPG";
          // WHY DOESNT 16 17 OR 20 FUCKING WORK?????!!!!?!!?!??
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 20);
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
    }, 20);
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
var venueLeft = 0;

function moveVenueLeft() {
  var venueFigure = document.getElementById('venueFigure');
  document.getElementById('venueLastBtn').style.display = "";
  venueLeft -= (100 / 3);
  if (venueLeft == -(100 / 3)) {
    document.getElementById('venueCaption').innerHTML = "ROBUST GOALS";
  } else if (venueLeft == -(200 / 3)) {
    document.getElementById('venueCaption').innerHTML = "CUSTOM WOODEN BACKBAORDS";
  }
  venueFigure.style.WebkitTransform = "translatex("+venueLeft+"%)";
  venueFigure.style.msTransform = "translatex("+venueLeft+"%)";
  venueFigure.style.transform = "translatex("+venueLeft+"%)";
  if (venueLeft <= -65) {document.getElementById('venueNextBtn').style.display = "none";}
  return false;
}
function moveVenueRight() {
  var venueFigure = document.getElementById('venueFigure');
  venueLeft += (100 / 3);
  if (venueLeft == -(100 / 3)) {document.getElementById('venueCaption').innerHTML = "ROBUST GOALS"}
  else if (venueLeft == 0) {document.getElementById('venueCaption').innerHTML = "HOT SHOT SIGNATURE COURT"}
  document.getElementById('venueNextBtn').style.display = "";
  venueFigure.style.WebkitTransform = "translatex("+venueLeft+"%)";
  venueFigure.style.msTransform = "translatex("+venueLeft+"%)";
  venueFigure.style.transform = "translatex("+venueLeft+"%)";
  if (venueLeft == 0) {document.getElementById('venueLastBtn').style.display = "none"}
  return false;
}
var teamLeft = 0;

function slideTeamLeft() {
  var teamFigure = document.getElementById('teamFigure');
  document.getElementById('teamLastBtn').style.display = "";
  teamLeft -= (100 / 9);
  teamFigure.style.WebkitTransform = "translatex("+teamLeft+"%)";
  teamFigure.style.msTransform = "translatex("+teamLeft+"%)";
  teamFigure.style.transform = "translatex("+teamLeft+"%)";
  if (teamLeft <= -(800 / 9)) {document.getElementById('teamNextBtn').style.display = "none"}
  return false;
}
function slideTeamRight() {
  teamLeft += (100 / 9);
  var teamFigure = document.getElementById('teamFigure');
  teamFigure.style.WebkitTransform = "translatex("+teamLeft+"%)";
  teamFigure.style.msTransform = "translatex("+teamLeft+"%)";
  teamFigure.style.transform = "translatex("+teamLeft+"%)";
  if (teamLeft == 0) {document.getElementById('teamLastBtn').style.display = "none"}
  document.getElementById('teamNextBtn').style.display = "";
  return false;
}
function showWaiver() {
  document.getElementById('waiverFigure').style.WebkitTransform = "translateY(100%)";
  document.getElementById('waiverFigure').style.msTransform = "translateY(100%)";
  document.getElementById('waiverFigure').style.transform = "translateY(100%)";
  return false;
}
function closeWaiver() {
  document.getElementById('waiverFigure').style.WebkitTransform = "translateY(-100%)";
  document.getElementById('waiverFigure').style.msTransform = "translateY(-100%)";
  document.getElementById('waiverFigure').style.transform = "translateY(-100%)";
  document.getElementById('submitDiv').style.display = "";
  return false;
}
function checkForm() {
  var shouldSubmit = true;
  if (document.getElementById('one').value == "") {shouldSubmit = false;}
  else if (document.getElementById('two').value == "") {shouldSubmit = false;}
  else if (document.getElementById('three').value == "") {shouldSubmit = false;}
  else if (document.getElementById('four').value == "") {shouldSubmit = false;}
  else if (document.getElementById('five').value == "") {shouldSubmit = false;}
  else if (document.getElementById('six').value == "") {shouldSubmit = false;}
  else if (document.getElementById('seven').value == "") {shouldSubmit = false;}
  else if (document.getElementById('eight').value == "") {shouldSubmit = false;}
  else if (document.getElementById('nine').value == "") {shouldSubmit = false;}
  else if (document.getElementById('ten').value == "") {shouldSubmit = false;}

  if (shouldSubmit == false) {
    document.getElementById('alert').style.display = "";
  } else {
    document.getElementById('alert').style.display = "none";
  }


  return shouldSubmit;
}
