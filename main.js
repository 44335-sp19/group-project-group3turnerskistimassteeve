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

document.getElementById('coltonindexpic').addEventListener('mouseover', function(){
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform .2s';
});

document.getElementById('coltonindexpic').addEventListener('mouseout', function(){
  this.style.transform = 'scale(1.0)';
  this.style.transition = 'transform .2s';
});







