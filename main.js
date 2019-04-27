// Colton jQuery //
jQuery(document).ready(function () {

  $('#coltonprogp').hide();

  jQuery('#coltonprog').click(function () {

    jQuery('#coltonprogp').slideToggle();

  });

  $('#coltondesignp').hide();

  $('#coltondesign').click(function () {

    $('#coltondesignp').slideToggle();

  });

  $('#coltonpic').click(function () {
    var coltonpic = $("#coltonpic");
    coltonpic.animate({ left: '+=1em' }, 'fast');
    coltonpic.animate({ top: '+=1em' }, 'fast');
    coltonpic.animate({ left: '-=2em' }, 'fast');
    coltonpic.animate({ top: '-=1em' }, 'fast');
    coltonpic.animate({ left: '+=1em' }, 'fast');
  });
});
///////////////////
$(document).ready(function (){
    $(".changecolor").hover(function (){
        $(this).css("color", "green");
    }, function (){
        $(this).css("color", "black");
    });
});

// Cassidy jQuery //
$(document).ready(function () {
  $("#button2Hide").click(function () {
    $(".p2").toggle();
  });
});
$(document).ready(function () {
  $(".proghead").hover(function () {
    $(this).css("color", "green");
  }, function () {
    $(this).css("color", "black");
  });
});
///////////////////


window.onload = function() {
document.getElementById('coltonindexpic').addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('coltonindexpic').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});

document.getElementById('cassidyindexpic').addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('cassidyindexpic').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});

document.getElementById('kenyaindexpic').addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('kenyaindexpic').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});
};





