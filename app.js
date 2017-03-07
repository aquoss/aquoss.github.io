$(document).ready(function(){
  $('.parallax').parallax();

  $('#findMe, #feedable').hide();

  $('#gifter-a').click(function(){
    $(this).addClass('bold');
    $('#feedable-a, #findMe-a').removeClass('bold');
    $('#feedable, #findMe').hide();
    $('#gifter').show();
  })

  $('#findMe-a').click(function(){
    $(this).addClass('bold');
    $('#feedable-a, #gifter-a').removeClass('bold');
    $('#feedable, #gifter').hide();
    $('#findMe').show();
  })

  $('#feedable-a').click(function(){
    $(this).addClass('bold');
    $('#findMe-a, #gifter-a').removeClass('bold');
    $('#findMe, #gifter').hide();
    $('#feedable').show();
  })

});
