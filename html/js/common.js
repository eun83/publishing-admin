
$(function(){
  $('.btn_left_tgl').click(function(){
    let body = $('body');
    if(body.hasClass('folding')){
        body.removeClass('folding');
        // $(this).text('<<');
    } else {
        body.addClass('folding');
        // $(this).text('>>');
    }
    return false;
  });

  // 모바일 메뉴 열기
  $('.m_btn_menu').click(function(){
    $('.top_frame .m_menu').addClass('open');
  });

  // 모바일 메뉴 닫기
  $('.m_btn_x').click(function(){
    $('.top_frame .m_menu').removeClass('open');
  })

  updateHeaderMenu();
})


function updateHeaderMenu(){
  let targetPath = location.pathname;
  let targetLink = $('.main-header .nav-item a[href="'+targetPath+'"');
  if(targetLink.length){
    let navItem = targetLink.closest('.nav-item');
    navItem.addClass('active');
  } else {
    console.debug('haeder menu not found.')
  }
}