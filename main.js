$(document).ready(function () {
    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });


    $('#coltonprogp').hide();

    $('#coltonprog').click(function () {

      $('#coltonprogp').toggle();

    });

    $('#coltondesignp').hide();

    $('#coltondesign').click(function () {

      $('#coltondesignp').toggle();

    });

});
$(document).ready(function(){
  $("#button2Hide").click(function(){
    $(".p2").toggle();
  });
});

document.getElementById('coltonindexpic').addEventListener('mouseover', function(){
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('coltonindexpic').addEventListener('mouseout', function(){
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});

document.getElementById('cassidyindexpic').addEventListener('mouseover', function(){
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('cassidyindexpic').addEventListener('mouseout', function(){
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});

document.getElementById('kenyaindexpic').addEventListener('mouseover', function(){
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('kenyaindexpic').addEventListener('mouseout', function(){
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});

$(document).ready(function(){
  $("#button2Hide").click(function(){
    $(".p2").toggle();
  });
});
