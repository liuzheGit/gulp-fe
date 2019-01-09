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
    var colorArr = [$pink, $red, $orange, $yellow, $cyan, $blue, $purple];


    $('.changeColor li').click(function(){
      var $index = $(this).index();
      var $color = colorArr[$index];
      console.log($color);
    });

    $('.params .params-title').click(function(){
      var $index = $(this).index();
      var $target = $(this).next();
      if($target.hasClass('active')){
        $target.slideUp();
        $target.removeClass('active');
      }else{
        $target.slideDown();
        $target.addClass('active');
      }
    })
  })