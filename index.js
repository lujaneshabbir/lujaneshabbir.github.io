$(document).ready(() => {
  $('#contact-icon').click(function(){
    $("#contact-window").show(1000);
  })
  $('.paint-tools img').click(function(){
    $('.paint-tools img').removeClass('border-3din');
    $('.paint-tools img').addClass('border-3d');
    $(this).removeClass("border-3d");
    $(this).addClass("border-3din");
  })

  $('.x-button').click(function(){
    // add delay to show x button clicked
    // $(this).removeClass("border-3d");
    // $(this).addClass("border-3din");
    $(this).parent().parent().parent().hide(1000);
  })
})
