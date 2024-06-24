(function($) {
    $(document).ready(function() {
        // Snowfall effect using jQuery Snowfall plugin
        $('body').snowfall({
            flakeCount: 100,
            flakeColor: '#ffffff',
            flakeIndex: 999999, // Ensure snow appears on top of all elements
            minSize: 2,
            maxSize: 5,
            round: true,
            shadow: false
        });
    });

    // jQuery Snowfall plugin
    $.fn.snowfall = function(options){
        var $flake = $('<div class="snowfall-flakes" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                flakeCount : 35,
                flakeColor : '#ffffff',
                flakeIndex: 999999,
                minSize : 1,
                maxSize : 3,
                round : true,
                shadow : false
            },
            options = $.extend(defaults, options),
            interval = setInterval(function(){
                var startPositionLeft = Math.random() * documentWidth - 100,
                    startOpacity = 0.5 + Math.random(),
                    sizeFlake = options.minSize + Math.random() * options.maxSize,
                    endPositionTop = documentHeight - 40,
                    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                    durationFall = documentHeight * 10 + Math.random() * 5000;

                $flake.clone().appendTo('body').css({
                    left: startPositionLeft,
                    opacity: startOpacity,
                    'font-size': sizeFlake,
                    color: options.flakeColor
                }).animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                }, durationFall, 'linear', function(){
                    $(this).remove()
                });
            }, 200);

        return this;
    };
})(jQuery);
