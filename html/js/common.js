
$(function(){
  $('.sidebar_fold').click(function(){
    let body = $('body');
    if(body.hasClass('folding')){
        body.removeClass('folding');
        $(this).text('<<');
    } else {
        body.addClass('folding');
        $(this).text('>>');
    }
    return false;
  })  
})