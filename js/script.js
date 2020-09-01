"use strict";

/** --------------- видео --------------- */
var closeVideo = document.querySelector(".video__icons-x");
var btnPlay = document.querySelector(".video__play");
var blockForVideo = document.querySelector(".video__hidden");
var dots = document.querySelector(".video__icons-dots");
var videoBlockVisible = true;

if (btnPlay != null) {
  btnPlay.addEventListener("click", function () {
    startVideo();
  });
}

function startVideo() {
  blockForVideo.classList.remove("video-bl-visible");
  var youtube = document.querySelector(".youtube-hidden");
  blockForVideo.classList.add("video-bl-hidden");
  videoBlockVisible = false;
  console.log(youtube);
  setTimeout(function () {
    dots.style.display = "none";
    youtube.classList.remove("youtube-hidden");
    youtube.classList.add("youtube-visible");
    player.playVideo();
  }, 1000);
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'ie78_SKHWVA'
  });
}

function stopVideo() {
  player.stopVideo();
}

if (closeVideo != null) {
  closeVideo.addEventListener("click", function () {
    if (!videoBlockVisible) {
      var youtube = document.querySelector(".youtube-visible");
      player.stopVideo();
      blockForVideo.classList.remove("video-bl-hidden");
      blockForVideo.classList.add("video-bl-visible");
      youtube.classList.add("youtube-hidden");
      youtube.classList.remove("youtube-visible");
      videoBlockVisible = true;
    }
  });
}
/** --------------- Карусель --------------- */


$('.specialty').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  }]
});
/** ------------- Кнопки мероприятий ----------- */

var btnNews = document.querySelector(".news-btn");

if (btnNews != null) {
  btnNews.addEventListener("click", function (event) {
    changeBtn(event.target);
  });
}

function changeBtn(target) {
  var btnAct = document.querySelector(".news-btn__text-1");
  var btnDis = document.querySelector(".news-btn__text-2");
  var sliderBtn;

  if (document.querySelector(".news-btn__active_right") != null) {
    sliderBtn = document.querySelector(".news-btn__active_right");
  } else {
    sliderBtn = document.querySelector(".news-btn__active_left");
  }

  ;

  if (target.classList[0] == "news-btn__text-2") {
    if (sliderBtn.getAttribute("data-side") == "left") {
      sliderBtn.setAttribute("data-side", "right");
      sliderBtn.classList.remove("news-btn__active_left");
      sliderBtn.classList.add("news-btn__active_right");
    } else {
      sliderBtn.setAttribute("data-side", "left");
      sliderBtn.classList.add("news-btn__active_left");
      sliderBtn.classList.remove("news-btn__active_right");
    }

    btnDis.classList.remove("news-btn__text-2");
    btnDis.classList.add("news-btn__text-1");
    btnAct.classList.remove("news-btn__text-1");
    btnAct.classList.add("news-btn__text-2");
  }
}
/** ------------- menu ----------- */


var hamburger = document.querySelector(".hamburger");
var menuRight = document.querySelector(".menu__right");
var longLine = document.querySelector(".hamburger__line_long");
var middleLine = document.querySelector(".hamburger__line_middle");
var shortLine = document.querySelector(".hamburger__line_short");
var menu = document.querySelector(".menu__nav");
var hamburgerClick = false;
hamburger.addEventListener("click", function (event) {
  if (hamburgerClick == true && (event.target == hamburger || event.target == longLine || event.target == shortLine)) {
    longLine.classList.remove("long-line_movement");
    middleLine.classList.remove("middle-line_movement");
    shortLine.classList.remove("short-line_movement");
    menu.classList.add("menu__nav");
    menu.classList.remove("menu__nav_tablet");
    hamburgerClick = false;
    menuRight.style.paddingTop = "12px";
  } else {
    longLine.classList.add("long-line_movement");
    middleLine.classList.add("middle-line_movement");
    shortLine.classList.add("short-line_movement");
    menu.classList.remove("menu__nav");
    menu.classList.add("menu__nav_tablet");
    menuRight.style.paddingTop = "0px";
    hamburgerClick = true;
  }
});