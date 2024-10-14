
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

  // 모바일 메뉴 토글 (on class 기준으로 동작)
  // $('.m_gnb a').click(function(){
  //   var me = $(this);
  //   var href = me.attr('href');
  //   if(href == '' || href == '#'){
  //     if(me.parent().hasClass('on')){
  //       me.parent().removeClass('on');
  //     } else {
  //       // top menu 클릭한 경우 기존에 메뉴 닫기
  //       if(me.closest('ul').hasClass('m_gnb_dp1')){
  //         $('.m_gnb .on').removeClass('on');
  //       } 
  //       me.parent().addClass('on');
  //     }
  //     return false;
  //   }
  // })

  // 모바일 메뉴 토글 (애니메이션 효과를 위해 slide 효과용)
  $('.m_gnb a').click(function(){
    var me = $(this);
    var href = me.attr('href');
    if(href == '' || href == '#'){
      var target = me.siblings('ul');
      if(target.is(":visible")){
        target.slideUp();
      } else {
        if(target.hasClass('m_gnb_dp2')){
          $('.m_gnb .m_gnb_dp2').slideUp();
        } 
        target.slideDown();
      }
      return false;
    }
  })

  // model area toggle
  $('.model_btn[model_target]').click(function(){
    var model_target = $(this).attr('model_target');
    if(model_target != ''){
      console.debug(model_target);
      const target = $(model_target);
      target.toggleClass('on');
      return false;
    }
  });

  $('.dialog_pop .btn_x').click(function(){
    $(this).closest('.dialog_pop').remove();
  });

  updateHeaderMenu();
  updateLeftbMenu();
  updateGnbMenu();
})


function updateHeaderMenu(){
  let targetPath = location.pathname;
  let targetLink = $('.gnb a[href="'+targetPath+'"');
  if(targetLink.length){
    let closest = targetLink.closest('li');
    closest.addClass('on');
  } else {
    console.debug('haeder menu not found.')
  }
}

function updateLeftbMenu(){
  let targetPath = location.pathname;
  let targetLink = $('.left_frame ul li a[href="'+targetPath+'"');
  if(targetLink.length){
    targetLink.addClass('on');
    let closest = targetLink.closest('.m_gnb');
    targetLink.parentsUntil(closest).filter('li').addClass('on');
  } else {
    console.debug('left menu not found.')
  }
}

function updateGnbMenu(){
  let targetPath = location.pathname;
  let targetLink = $('.m_gnb ul li a[href="'+targetPath+'"');
  if(targetLink.length){
    let closest = targetLink.closest('.m_gnb');
    targetLink.parentsUntil(closest).filter('li').addClass('on');
  } else {
    console.debug('gnb menu not found.')
  }
}