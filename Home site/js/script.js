//плавное фиктивное появление текста
setTimeout(function() {
  const miniback_word = document.querySelector('.miniback_word');
  miniback_word.style.opacity = '1';
}, 3000);



//Кнопка с пузырьками
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


bubblyButtons.onclick = myFunction;

function myFunction(){
  document.body.classList.add('outloaded_hiding');
  setTimeout(function(){
    document.body.classList.add('outloaded');
  },100);
}


//кнопка музыки

const playButton = document.getElementById('volumebutton');
const audioElement = document.getElementById('audioElement');
audioElement.volume = 0.3;
// Обработчик клика на кнопку
playButton.addEventListener('click', () => {
  // Если аудио не проигрывается, то запускаем его
  if (audioElement.paused) {
    audioElement.play();
  } else { // Если аудио проигрывается, то останавливаем его
    audioElement.pause();
  }
  });


//прелоадер 
$(document).ready(function(){
  function updateDots(){ 
    $(".dot").each(function(i){
      var scale=1;
      var cur=$(this);
      var pos=cur.position();
      //var lastPos=cur.data("lastPos");
      $(".dot:not(.dot:eq("+i+"))").each(function(){
        var cur2=$(this); 
        var pos2=cur2.position();
        var dx=pos2.left-pos.left;
        var dy=pos2.top-pos.top;
        var distance=Math.sqrt((dx*dx)+(dy*dy));
        var max=20;
        var p=Math.max(0,(max-distance)/max);
        scale+=(1.5-scale)*0.4*p;
      })
      cur.children(".dot-gfx").css({
        transform:"scale("+(scale)+","+scale+")"  
      })
    })
    requestAnimationFrame(updateDots);
  }
  updateDots();
})


