  $(function(){
    var $pink = '#FA6CB0';
    var $red = '#FE0000';
    var $orange = '#FA6CB0';
    var $yellow = '#FFFF01';
    var $cyan = '#3FE0D0';
    var $blue = '#400097';
    var $purple = '#a874e1';
    // var colorArr = [$pink, $red, $orange, $yellow, $cyan, $blue, $purple];
    // var colorArr = ['#1c1c1c', '#333', '#626262', '#bfbfbf'];
    var colorArr = ['#0078D7', '#00B7C3', '#E81123', '#FFB900', '#E3008C', '#10893E'];

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
      $('.changeColor').removeClass('active');
      var $index = $(this).index();
        $('.main-popup').find('.popup-title').html('Perspective');
        $('.main-popup').find('.popup-words').html('3D model of the same plan');
      if($index < 2){
        $('.main-popup').show();
        setTimeout(function(){
          $('.main-popup').hide();
        }, 1000);
      }
      if($index === 2){
        if($('.changeColor').hasClass('active')){
          $('.changeColor').removeClass('active');
        }else{
          $('.changeColor').addClass('active');
        }
        
      }else if($index === 5){
        $('.main-popup').find('.popup-title').html('联系我们');
        $('.main-popup').find('.popup-words').html('150xxxxxxxx');
        $('.main-popup').addClass('slideInDown').show();
        setTimeout(function(){
          $('.main-popup').removeClass('slideInDown').hide();
        }, 2000);
      // }else if($index === 6){ $('.all-search-wrap').toggleClass('active');
      }else{
        $('.tabs-content-item').removeClass('active').eq($index).addClass('active');
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

    $('.params .params-title').eq(2).click(function(){
      if($(this).siblings().hasClass('active')){
        $(this).find('.windows-ratio-input').show();
      }else{
        $(this).find('.windows-ratio-input').hide()
      }
    });

    $('.windows-ratio-input').click(function(e){
      e.stopPropagation();
    })


  })