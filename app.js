$(document).ready(function(){
  $('.parallax').parallax();
  var allLinks = '#stats-a, #battery-a, #gifter-a, #findMe-a, #feedable-a';
  var allWork = '#stats, #battery, #gifter, #findMe, #feedable';

  $(allWork).hide();
  $('#stats').show();

  $('#stats-a').click(function(){
    $(allLinks).removeClass('bold');
    $(this).addClass('bold');
    $(allWork).hide();
    $('#stats').show();
  })
  $('#battery-a').click(function(){
    $(allLinks).removeClass('bold');
    $(this).addClass('bold');
    $(allWork).hide();
    $('#battery').show();
  })
  $('#gifter-a').click(function(){
    $(allLinks).removeClass('bold');
    $(this).addClass('bold');
    $(allWork).hide();
    $('#gifter').show();
  })
  $('#findMe-a').click(function(){
    $(allLinks).removeClass('bold');
    $(this).addClass('bold');
    $(allWork).hide();
    $('#findMe').show();
  })
  $('#feedable-a').click(function(){
    $(allLinks).removeClass('bold');
    $(this).addClass('bold');
    $(allWork).hide();
    $('#feedable').show();
  })

});
