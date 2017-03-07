$(document).ready(function(){
  $('.parallax').parallax();

  $('#findMe, #feedable').hide();

  $('#gifter-a').click(function(){
    $(this).addClass('bold');
    $('#feedable-a, #findMe-a').removeClass('bold');
    $('#feedable, #findMe').hide();
    $('#gifter').show();
    $('#img-1').css({'background':'url("images/gifter.png") center no-repeat', 'background-size':'contain'});
  })

  $('#findMe-a').click(function(){
    $(this).addClass('bold');
    $('#feedable-a, #gifter-a').removeClass('bold');
    $('#feedable, #gifter').hide();
    $('#findMe').show();
    $('#img-1').css({'background':'url("images/findMe.png") center no-repeat', 'background-size':'contain'});
  })

  $('#feedable-a').click(function(){
    $(this).addClass('bold');
    $('#findMe-a, #gifter-a').removeClass('bold');
    $('#findMe, #gifter').hide();
    $('#feedable').show();
    $('#img-1').css({'background':'url("images/feedable.png") center no-repeat', 'background-size':'contain'});
  })

});
