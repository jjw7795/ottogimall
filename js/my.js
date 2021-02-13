$(function() {


    var s1 = $('#section1').height();
    var s2 = $('#section2').height();
    var s3 = $('#section3').height();
    var s4 = $('#section4').height();
    var s5 = $('#section5').height();


    $(window).scroll(function() {
        var clientH = document.documentElement.clientHeight;
        var scrolltop = $(window).scrollTop();
        //console.log(clientH)
        if (scrolltop && scrolltop < s1 + s2 + s3 + s4) {
            $('#section2 .mov_cho').stop().animate({ marginTop: scrolltop / 10 }, 1000, 'jswing');
        }
    });

    $(window).scroll(function() {
        var clientH = document.documentElement.clientHeight;
        var scrolltop = $(window).scrollTop();
        //console.log(clientH)
        if (scrolltop && scrolltop < s1 + s2 + s3 + s4) {
            $('#section2 .mov_cho1').stop().animate({ marginTop: scrolltop / 10 }, 1000, 'jswing');
        }
    });

    $(window).scroll(function() {
        var clientH = document.documentElement.clientHeight;
        var scrolltop = $(window).scrollTop();
        //console.log(clientH)
        if (scrolltop && scrolltop < s1 + s2 + s3 + s4) {
            $('#section2 .mov_cho2').stop().animate({ marginTop: scrolltop / 10 }, 1000, 'jswing');
        }
    });


    $(window).scroll(function() {
        var clientH = document.documentElement.clientHeight;
        var scrolltop = $(window).scrollTop();
        //console.log(clientH)
        if (scrolltop && scrolltop < s1 + s2 + s3 + s4) {
            $('#section3 .mov_cho11').stop().animate({ marginTop: scrolltop / 30 }, 1000, 'jswing');
        }
    });

    $(window).scroll(function() {
        var clientH = document.documentElement.clientHeight;
        var scrolltop = $(window).scrollTop();
        //console.log(clientH)
        if (scrolltop && scrolltop < s1 + s2 + s3 + s4) {
            $('#section3 .mov_cho12').stop().animate({ marginTop: scrolltop / 10 }, 1000, 'jswing');
        }
    });



    $(".play_list").each(function(i) {
        //$(".click").attr("set", "off");
        if (i == (parseInt($direct) - 1)) {
            $(this).show();

            var $box = $(this).children("ul.list");
            var $cell = $box.find("li");

            $cell.each(function(j) {
                var $showBox = $(this).find(".thumb_box");
                var $click = $(this).find("a");

                if (j == 0) {
                    $showBox.show();
                    $click.attr("set", "on");
                    //$click.attr("ievt", "off");
                    $click.find("img").attr("src", $click.find("img").attr("src").replace("_off", "_on"));
                } else {
                    $showBox.hide();
                    $click.attr("set", "off");
                }
            });
        } else {
            $(this).hide();
        }
    })
})