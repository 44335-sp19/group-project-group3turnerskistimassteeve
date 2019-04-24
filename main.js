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

});






