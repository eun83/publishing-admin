
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
  });

  updateHeaderMenu();
})


function updateHeaderMenu(){
  let targetPath = location.pathname;
  let targetLink = $('.main-header .nav-item a[href="'+targetPath+'"');
  let navItem = targetLink.closest('.nav-item');
  navItem.addClass('selected');
}