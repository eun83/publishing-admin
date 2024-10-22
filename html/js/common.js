
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

  // 모바일 메뉴 토글 (애니메이션 효과를 위해 slide 효과용)
  $('.m_gnb a').click(function(){
    var me = $(this);
    var href = me.attr('href');
    if(href == '' || href == '#'){
      var target = me.siblings('ul');
      if(target.is(":visible")){
        target.parent().removeClass('actived').find('.actived').removeClass('actived').find('ul').hide();
        target.slideUp('fast');
      } else {
        if(target.hasClass('m_gnb_dp2')){
          var prev = $('.m_gnb .m_gnb_dp2');
          prev.parent().removeClass('actived').find('.actived').removeClass('actived').find('ul').hide();
          prev.hide(); // or prev.slideUp('fast');
        }
        target.parent().addClass('actived') 
        target.slideDown();
      }
      return false;
    }
  })

  
  $('.btn_model[model_target]').click(function(){
    var model_target = $(this).attr('model_target');
    if(model_target != ''){
      const target = $(model_target);
      target.toggleClass('on');
      return false;
    }
  });

  $('.popup_frame .btn_x').click(function(){
    $(this).closest('.popup_frame').removeClass('on');
  });  

  $('.dialog_pop .btn_x').click(function(){
    $(this).closest('.dialog_pop').remove();
  });

  $()

  updateHeaderMenu();
  updateLeftbMenu();
  updateGnbMenu();
})

/**
 * 
 * @param {*} target 
 * @param {*} path 
 * @returns 
 */
function findChildLink(target, path){
  var me = $(target);
  var selector = me.find('a[href]');
  var target = $(selector).filter((_,el)=> {
    var finded = el && el.href != '' 
      && !el.getAttribute('href').startsWith('#')
      && el.pathname == path;
    // console.debug(el);
    // console.debug(`${el.getAttribute('href')} : ${finded}`);
    return finded;
  });
  // if(target.length == 0){
  //   target = me.find(selector).filter((_,el)=>el.pathname == path).first();
  // }
  return target;
}

/**
 * Header 메뉴 업데이트
 */
function updateHeaderMenu(){
  let targetLink = findChildLink('.gnb', location.pathname);
  if(targetLink.length){
    let closest = targetLink.closest('li');
    closest.addClass('on');
  } else {
    console.debug('haeder menu not found.')
  }
}

/**
 * Left 메뉴 업데이트
 */
function updateLeftbMenu(){
  let targetLink = findChildLink('.left_frame ul li', location.pathname);
  if(targetLink.length){
    targetLink.addClass('on');
    let closest = targetLink.closest('.m_gnb');
    targetLink.parentsUntil(closest).filter('li').addClass('on');
  } else {
    console.debug('left menu not found.')
  }
}

/**
 * GNB 메뉴 업데이트
 */
function updateGnbMenu(){
  let targetLink = findChildLink('.m_gnb ul li', location.pathname);
  if(targetLink.length){
    let closest = targetLink.closest('.m_gnb');
    targetLink.parentsUntil(closest).filter('li').addClass('actived').children('ul').show();
  } else {
    console.debug('gnb menu not found.')
  }
}