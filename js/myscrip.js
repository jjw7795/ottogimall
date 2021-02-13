$(function() {
    //해더 중간상단
    $(".keyword").click(function() {
        $(".recent-area").stop().slideToggle(200)
    })

    //해더 우측 상단
    $(".container_new").hide()

    $(".container li").hover(function() {

        $(this).children(".sub_con").stop().slideDown(500)
    }, function() {
        $(this).children(".sub_con").stop().slideUp(500)
    })



    //카테고리 메뉴 슬라이드


    $(".all-category li:first-child>a").toggle(function() {
        $(".all_sub").css({ display: "block" })
        $(".new-category").stop().slideDown(400);
    }, function() {
        $(".all_sub").css({ display: "none" })
        $(".new-category").stop().slideUp(400);
    })



    //섹션 중간부분

    $(".section .buying").hover(function() {
        $(this).children("a").stop().slideDown()


        $(this).find(".txtbox").stop().animate({
            top: "60%"
        })


    }, function() {
        $(this).children("a").stop().slideUp()
        $(this).find(".txtbox").stop().animate({
            top: "30%"
        })
    })

    // $(".section .buying").hover(function() {
    //     $(this).find(".textbox").stop().animate({
    //         top: "60%"
    //     })

    // }, function() {
    //     $(this).find("a").css({ display: "none" });
    // })


    //로그인페이지

    $(".leftbox .btn .other_btn").hover(function() {
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })

    $(".loginbox .skinbtn").hover(function() {
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })


    //고객센터 페이지
    $(".question_sub").hide();

    $(".left_p").click(function() {
        $(".left_p").children("span").css({
            backgroundPosition: "0px 4.5px"
        })
        $(".question_sub").slideUp(400);

        if ($(this).next(".question_sub").css("display") == "none") {
            $(this).children("span").css({ backgroundPosition: "0px -4.5px" })
        } else {
            $(this).children("span").css({ backgroundPosition: "0px 4.5px" })
        }

        $(this).next(".question_sub").stop().slideToggle(400);


    })

    $(window).resize(function() {
        var wid = $(this).width()
        if (wid >= 760) {
            $(".left_p").children("span").css({
                backgroundPosition: "0px 4.5px"
            })
            $(".question_sub").hide()
        }
    })




    //모바일용 섹션 슬릭슬라이드 효과
    $(".rvSlide").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 2000, // 지연시간
        speed: 500, // 사라지고 나타나는 속도 
        slidesToShow: 1, // 보여질 슬라이드 수
        slidesToScroll: 1, // 이동 슬라이드 수
        pauseOnHover: false, // 마우스오버시 멈추지 않음
        dots: true, // 동그라미 버튼
        pauseOnDotsHover: true, // 버튼 위에 마우스오버시 멈춤
        cssEase: 'linear', // 속도함수
        draggable: true, // 마우스드래그시 슬라이드 교체가능
        fade: true, // 슬라이드가 수평으로 이동하지 않고 제자리에서 사라지고 나타남


    })
    $(".snsslide").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 2000, // 지연시간
        speed: 1000, // 사라지고 나타나는 속도 
        slidesToShow: 1.65, // 보여질 슬라이드 수
        slidesToScroll: 1, // 이동 슬라이드 수
        pauseOnHover: false, // 마우스오버시 멈추지 않음
        dots: false, // 동그라미 버튼
        pauseOnDotsHover: true, // 버튼 위에 마우스오버시 멈춤
        cssEase: 'ease', // 속도함수
        draggable: true, // 마우스드래그시 슬라이드 교체가능
        fade: false, // 슬라이드가 수평으로 이동하지 않고 제자리에서 사라지고 나타남


    })



    // 숨겨진 카테고리 보이기
    $(".m_header .m_bnmenu").click(function() {
        $(".m_category").css({
            display: "block",
            width: "0%"
        }).animate({
            width: "80%",

        })
        $("html").css({
            overflowY: "hidden"
        })
    })

    $(".xbutton").click(function() {
            $(".m_category").animate({
                width: "0%"
            })
            $("html").css({
                overflowY: "auto"
            })
        })
        // var mainh = $("#intro").offset().top;

    $(window).resize(function() {
        var width = $(this).width()
        if (width >= 480) {
            $(".m_category").hide()
        }
    })


    $(window).scroll(function() {
        var ws = $(this).scrollTop();

        if (ws > 0) {
            $(".m_header").css({
                position: "fixed",
                left: "0",
                top: "0",
                width: "100%",
                height: "88.35px",
                zIndex: "999"
            })
        } else {
            $(".m_header").css({
                position: "static",

            })
        }
    })
    $(window).scroll(function() {
        var wss = $(this).scrollTop();

        if (wss > 0) {
            $("#header").css({
                position: "fixed",
                left: "0",
                top: "0",
                width: "100%",

                zIndex: "999"
            })
        } else {
            $("#header").css({
                position: "static"
            })
        }
    })

    $(".fix_back > a").click(function() {
        $(window).stop().animate({
            scrollTop: "0px"
        })
    })

    setTimeout(function() {
        $("html,body").animate({
            scrollTop: "0"
        })
    })
    $(".fixed_back>a").click(function() {
        $("html,body").animate({
            scrollTop: "0"
        })

    })

    $(".fix_back>a").click(function() {
        $("html,body").animate({
            scrollTop: "0"
        })

    })

    $(".btn > input").click(function() {
        $(this).siblings().removeClss("on")
        $(this).addClass("on")

    })


    $(".btn_join>input").click(function() {
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })



    //게시판
    $(".report_order >button").click(function() {
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })


    $(".report_btn > button").click(function() {
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
    })


    $(".image_banner a").hover(
        function() {
            var srcoff = $(this).children("img").attr("src");
            srcoff = srcoff.replace(".jpg", "_over.jpg");
            $(this).children("img").attr("src", srcoff)
                // $(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "_on.png"));

        },
        function() {
            var srcoff = $(this).children("img").attr("src");
            srcoff = srcoff.replace("_over.jpg", ".jpg");
            $(this).children("img").attr("src", srcoff)
        }
    );



})