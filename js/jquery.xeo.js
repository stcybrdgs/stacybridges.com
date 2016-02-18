(function ($) {
    var xeomenu = function (el) {
        var $el = $(el),
            items = $el.children(),
            count = items.length,
            come_out,
            go_back,
            is_out = false,
            current_index;

        come_out = function (item, j) {
            setTimeout(function () {
                item.animate({
                    left : 0
                });
            }, j * 50);
        };

        go_back = function (item, j) {
            setTimeout(function () {
                item.animate({
                    left : "-120px"
                });
            }, j * 50);
        };

        items.on('mouseenter', function () {
            if (is_out) {
                return;
            }

            var $this = $(this),
                i = $this.index(),
                j = 1,
                c,
                item;

            is_out = true;

            current_index = i;
            items.stop();
            come_out($this, 0);
            while (i + j < count || i - j >= 0) {
                c = i + j;
                if (c < count) {
                    item = $(items[c]);
                    come_out(item, j);
                }

                c = i - j;
                if (c >= 0) {
                    item = $(items[c]);
                    come_out(item, j);
                }

                j += 1;
            }

        });

        $el.on('mouseleave', function () {
            var i = current_index,
                $this = $(items[i]),
                j = 1,
                c,
                item;

            items.stop();
            go_back($this, 0);
            while (i + j < count || i - j >= 0) {
                c = i + j;
                if (c < count) {
                    item = $(items[c]);
                    go_back(item, j);
                }

                c = i - j;
                if (c >= 0) {
                    item = $(items[c]);
                    go_back(item, j);
                }

                j += 1;
            }

            is_out = false;

        });
    };

    $.fn.xeomenu = function (options) {
        return this.each(function () {
            xeomenu(this);
        });
    };

})(jQuery);