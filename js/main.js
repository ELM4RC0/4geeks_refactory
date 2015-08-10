$(document).ready(function() {
  var scroll = $(document).scrollTop();
  if (scroll < 300) {
    $('.logo-black-v').css('opacity', 1 - scroll / 300); 
    $('.logo-mono-v').css('opacity', scroll / 300); 
  }
  else{
    $('.logo-mono-v').css('opacity', 1);
    $('.logo-black-v').css('opacity', 0); 
  }
});

$(document).scroll(function() {
  var scroll = $(document).scrollTop();
  if (scroll < 300) {
    $('.logo-black-v').css('opacity', 1 - scroll / 300); 
    $('.logo-mono-v').css('opacity', scroll / 300); 
  }
  else{
    $('.logo-mono-v').css('opacity', 1);
    $('.logo-black-v').css('opacity', 0); 
  }
});
window.addEventListener('scroll', function() {
  var scroll = $(document).scrollTop();
  if (scroll < 300) {
    $('.logo-black-v').css('opacity', 1 - scroll / 300); 
    $('.logo-mono-v').css('opacity', scroll / 300);
  }
});
// window.getElementById('body-landing').addEventListener('gesturechange', function() {});

