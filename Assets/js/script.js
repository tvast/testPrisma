//Script pour parralax en fonction du mouvement de la souris pour donner l'imrpession de voyager dans les étoiles

$(document).ready(function() {
  $('.background-img').mousemove(function(e) {
    var pageX;
    var pageY;
    var amountMovedX = e.pageX * -1 / 10;
    var amountMovedY = e.pageY * -1 / 10;
    $('.values').html(
      '<div>' + amountMovedX + 'px ' + amountMovedY + 'px' + '</div>',
    );
    $(this).css(
      'background-position',
      amountMovedX + 'px ' + amountMovedY + 'px',
    );
  });
});

//Parralax des deux images

$(document).ready(function() {
  $('#slide2').parallax('center', 900, 0.7, true);
  $('#slide3').parallax('center', 1000, 0.2, true);
});

//Side bar de materialize

$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens,
  onOpen: function(el) {
    /* Do Stuff*/
  },
  onClose: function(el) {
    alert('the force is awaken');
  },
});

//La proprieté sticky en css permet de réaliser la fonctionalité demandé pour le bloc publicitaire.
