
  // $('.params-content .params-title').on('click',function(){
  //   console.log($(this));
  // //   if($(this).find('.icon-left')){
  // //     $(this).find('.icon-left').removeClass('icon-left').addClass('icon-left1')
  // //   }
  // //   if($(this).find('.icon-left1')){
  // //     $(this).find('.icon-left1').removeClass('icon-left1').addClass('icon-left')
  // //   }
  // //   var $index = $(this).index();
  // //   $('.content-main').eq($index).toggleClass('active');
  // })

  $(function(){
    var $pink = '#FA6CB0';
    var $red = '#FE0000';
    var $orange = '#FA6CB0';
    var $yellow = '#FFFF01';
    var $cyan = '#3FE0D0';
    var $blue = '#400097';
    var $purple = '#a874e1';
    // var colorArr = [$pink, $red, $orange, $yellow, $cyan, $blue, $purple];
    var colorArr = ['#1c1c1c', '#333', '#626262', '#bfbfbf']

    $('.changeColor li').click(function(){
      var $index = $(this).index();
      var $color = colorArr[$index];
      $('body,.main').css('background-color', $color);

    });

    $('.params-tabs>span').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      var $index = $(this).index();
      $('.params-tabs-content .params-content').eq($index).addClass('active').siblings().removeClass('active');
    })

    $('.tabs-nav .iconfont').click(function(){
      var $index = $(this).index();
      if($index < 2){
        $('.main-popup').show();
        setTimeout(function(){
          $('.main-popup').hide();
        }, 1000);
      }
      if($index === 2){
        $('.changeColor').toggleClass('active')
      }else if($index === 6){
        $('.all-search-wrap').toggleClass('active')
      }else{
        $('.tabs-content-item').removeClass('active').eq($index).addClass('active')
      }
      $(this).addClass('active').siblings().removeClass('active');
    })


    // 房间关系添加
    $('.relation-section .al-add-toggle-button').change(function(){
      var $panal = $('<div class="section-buttons">' + 
                       '<p>主从<input type="checkbox" class="al-toggle-button"></p>' +
                       '<p>分离<input type="checkbox" class="al-toggle-button"></p>' +
                       '<p>相邻<input type="checkbox" class="al-toggle-button"></p>' +
                     '</div>')
      var $checked = $(this).prop('checked');
      console.log($checked);
      if($checked === true){
        console.log($(this).parents('.relation-section'))
        $(this).parents('.relation-section').append($panal);
      }else{
        $(this).parents('.relation-section').find('.section-title').siblings().detach();
      }
    })

    // 参数设定区域点击收起
    $('.params .params-title').click(function(){
      var $target = $(this).next();
      if($target.hasClass('active')){
        $target.slideUp();
        $target.removeClass('active');
        $(this).find('.icon-left1').removeClass('icon-left1').addClass('icon-left')
      }else{
        $target.slideDown();
        $target.addClass('active');
        $(this).find('.icon-left').removeClass('icon-left').addClass('icon-left1')
      }
    })


  })