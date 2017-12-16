(($) => {
    $.fn.slider = function (options) {
        const $this = this;
        $(".slider").each(function() {
            let $this = $(this);
            let options = [];
            $this.children("option").each(function() {
                options.push($(this).text());
                $(this).remove();
            });
            $this.append($('<h3 class="slider-text">' + $(this).children("title").text() + '</h3>'))
                   .append($('<div class="slider-bar"><div class="slider-cursor"></div></div>'));
            $this.children("title").remove();

            $this.children(".slider-text").data("options", options);
        });

        let current = null;
        let currentText = null;
        let currentTextOptions = null;
        let anchorX = 0;
        let containingWidth = 0;

        $this.children(".slider-bar").children(".slider-cursor").mousedown(function (event) {
            $(this).addClass("drag");
            current = $(this);
            currentText = current.parent().siblings(".slider-text");
            currentTextOptions = currentText.data('options');
            containingWidth = $(this).parent().width() - 15;
            anchorX = event.screenX - (current.data('x') || 0);
        });

        $(document).mousemove(event => {
            if (current) {
                const newX = Math.max(Math.min(event.screenX - anchorX, containingWidth), -15);

                current.css({
                    'left': newX
                }).data({
                    'x': newX
                });

                let textIndex = Math.round((current.data("x") - 15) / (containingWidth + 15) * (currentTextOptions.length - 1));
                currentText.text(currentTextOptions[textIndex]);
            }
        }).mouseup(() => {
            if (current) {
                $("body").removeClass("drag");
                options(currentText.text());
            }
            current = null;
            currentText = null;
        });

        return $this;
    };
})(jQuery);
