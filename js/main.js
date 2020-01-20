// creo una funzione che con azione 'click' agisca sulle classi 'prev' e 'next'
$(document) .ready(
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );

    $('.prev').click(
      function() {
        clickPrev();
      }
    );

//funzione che utilizza la tastiera. keyword keydown
    $(document).keydown(
      function() {
    //tramite console verifico la numerazione assegnata 37 = left 39 = right
        console.log(event.which);
        if(event.keyCode == 39) {
          clickNext();
        }
        else if(event.keyCode == 37) {
          clickPrev();
        }
      }
    );
  }
);
// funzione con clickNext in cui avro' lo scorrimento delle immagini
function clickNext() {
//var immagini
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
//var cerchi
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  //per farlo continuare all'infinito dobbiamo dire che se l'imageActive è ultima (last) allora si toglie la classe 'active' e viene aggiunta alla seguente.
  if (imageActive.hasClass('last') == true) {
    imageActive.removeClass('active');
    $('img.first').addClass('active');
    circleActive.removeClass('active');
    $('i.first').addClass('active');
  //altrimenti se è false imageActive aggiunge classe 'active' e imageNext la rimuove
  }else {
    imageActive.removeClass('active');
    imageNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }
}

//stesso procedimento per clickPrev
function clickPrev() {
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();
  //per farlo continuare all'infinito è necessario dire che se l'imageActive è prima (first) allora si toglie la classe 'active' e viene aggiunta alla seguente.
  if (imageActive.hasClass('first') == true) {
    imageActive.removeClass('active');
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  //altrimenti se è false imageActive aggiunge classe 'active' e imageNext la rimuove
  }else {
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
