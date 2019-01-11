$.fn.RangeSlider = function(cfg){
    this.sliderCfg = {
        min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, 
        max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
        step: cfg && Number(cfg.step) ? cfg.step : 1,
        callback: cfg && cfg.callback ? cfg.callback : null
    };

    var $input = $(this);
    var min = this.sliderCfg.min;
    var max = this.sliderCfg.max;
    var step = this.sliderCfg.step;
    var callback = this.sliderCfg.callback;

    $input.attr('min', min)
        .attr('max', max)
        .attr('step', step);

    $input.bind("input", function(e){
        $input.attr('value', this.value);
        $(this).siblings('.range-val').html(this.value);
        $input.css( 'background', 'linear-gradient(to right, #059CFA, white ' + this.value + '%, white)' );

        if ($.isFunction(callback)) {
            callback(this);
        }
    });
};

var change = function(){
//   $('input').css( 'background-size', this.value + '% 100%' ); 
//   console.log($(this).val());
}
$('input[type="range"]').RangeSlider({ min: 0,   max: 100,  step: 1,  callback: change});
$('.rooms-range input[type="range"]').RangeSlider({min: 1, max: 10, step: 1});