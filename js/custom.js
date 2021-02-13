$(function() {


    $("form").submit(function() {
        $("input").css({
            border: "1px solid #ddd"
            
        })

        // 아이디 유효성체크(3~5자범위, 특수문자제외)
        var idtxt = $("#idtxt").val();
        if (idtxt.length >= 3 && idtxt.length <= 7) {
            for (var i = 0; i < idtxt.length; i++) {
                var ch = idtxt.charAt(i)
                if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z') && !(ch >= 'A' && ch <= 'Z')) {
                    alert("아이디는 대소문자, 숫자만 가능합니다.");
                    $("#idtxt").css({
                        border: "1px solid #f00"
                    })
                    $("#idtxt").focus();
                    $("#idtxt").select();
                    return false;
                }
            }

        } else if (idtxt.length != 0) {
            alert("아이디는 3~7글자 범위입니다.");
            $("#idtxt").css({
                border: "1px solid #f00"
            });
            $("#idtxt").focus();
            $("#idtxt").select();
            return false;
        } else {
            alert("아이디를 입력해 주세요.");
            $("#idtxt").css({
                border: "1px solid #f00"
            });
            $("#idtxt").focus();
            $("#idtxt").select();
            return false;
        }


        var irum = $("#irum").val();
        var echi = /^[가-힝]+$/
        

        if (!(echi.test(irum))) {
            alert("이름을 입력해주세요.");
            $("#irum").focus();
            $("#irum").select();
            return false;
        }

     

        // 비번 유효성체크(영문, 숫자, 특수문자 2가지 이상 조합해서 10~12글자 범위, 첫글자는 대소문자만)
        var pass1 = $("#pass1").val();
        var pass2 = $("#pass2").val();

        //영문, 숫자의 조합
        // ^ 시작부터 검사, ?= 조건확인후 처음으로 돌아감, 
        // . 임의의 문자(숫자,문자,특수문자 포함한 모든 문자),  * 0번 이상 나옴
        var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/;
        if (pass1.length >= 10 && pass1.length <= 12) {
            if (!(check1.test(pass1))) {
                alert("비밀번호는 영문대소문자로 시작하며, 반드시 숫자와 특수문자를 1개 이상 포함하세요.");
                $("#pass1").css({
                    border: "1px solid #f00"
                })
                $("#pass1").focus();
                $("#pass1").select();
                return false;
            }
        } else if (pass1.length != 0) {
            alert("비밀번호는 10~12글자 범위입니다.");
            $("#pass1").css({
                border: "1px solid #f00"
            });
            $("#pass1").focus();
            $("#pass1").select();
            return false;
        } else {
            alert("비밀번호를 입력해 주세요.");
            $("#pass1").css({
                border: "1px solid #f00"
            });
            $("#pass1").focus();
            $("#pass1").select();
            return false;
        }

        if (pass2.length != 0) {
            if (pass1 != pass2) {
                alert("비밀번호가 일치하지 않습니다.");
                $("#pass2").css({
                    border: "1px solid #f00"
                })
                $("#pass2").focus();
                $("#pass2").select();
                return false;
            }
        } else {
            alert("비밀번호 확인을 입력해주세요.")
            $("#pass2").css({
                border: "1px solid #f00"
            })
            return false;
        }

           // 이메일 유효성체크
           var email = $("#email").val();
           var echk = /^[a-zA-Z0-9]+$/
               // var echk = /^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[\.][a-z]+([a-zA-Z0-9]+[\.][a-z]+)*$/
   
           if (!(echk.test(email))) {
               alert("이메일울 입력해주세요.");
               $("#email").focus();
               $("#email").select();
               return false;
           }
   
           var domain = $("#domain").val();
           if (domain.length == 0) {
               alert("도메인을 선택해 주세요.");
               $("#emase").focus();
               return false;
           }


           var cell = $("#cell").val();
           var echa = /^[a-zA-Z0-9]+$/
               // var echk = /^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[\.][a-z]+([a-zA-Z0-9]+[\.][a-z]+)*$/
   
           if (!(echa.test(cell))) {
               alert("핸드폰번호 입력해주세요.");
               $("#cell").focus();
               $("#cell").select();
               return false;
           }

        var $gender = $("input[name='gender']:checked").length;
        if ($gender == 0) {
            $(".gender").text("성별을 선택해 주세요.").css({
                color: "#f00"
            });
            return false;
        } else {
            $(".gender").text("성별").css({
                color: "#000"
            });
        }

        var $birth = $("input[name='birth']").val();
        if ($birth == "") {
            $(".birth").text("생일을 선택해 주세요.").css({
                color: "#f00"
            });
            return false;
        } else {
            $(".birth").text("생일").css({
                color: "#000"
            });
        }

        
        var pt = false;
        $(":checkbox").each(function() {
            if ($(this).prop("checked")) {
                pt = true;
            }
        })
        if (!pt) {
            $(".skill").css({
                border: "1px solid #f00"
            })
            return false;
        } else {
            $(".skill").css({
                border: "none"
            })
        }

        // return false;
    })





    $("#domainType").change(function() {
        $("#domainType option:selected").each(function() {
            if ($(this).val() == "sele") {
                $("#domain").val("");
                $("#domain").attr("disabled", true)
            } else if ($(this).val() == "self") {
                $("#domain").val("");
                $("#domain").attr("disabled", false)
            } else {
                $("#domain").val($(this).text());
                $("#domain").attr("disabled", true);
            }
        })
    })


    $("select").change(function() {
        if ($(":selected").attr("value") == "10대") {
            $(".wine").attr({
                disabled: "disabled"
            })
        } else {
            $(".wine").removeAttr("disabled")
        }
    })

    $("input").focus(function() {
        $(this).css({
            background: "pink"
        })
    }).blur(function() {
        if ($(this).val().length == 0) {
            $(this).css({
                border: "1px solid #f00",
                background: ""
            })
        } else {
            $(this).css({
                border: "1px solid #ddd",
                background: ""
            })
        }
    })

    $("textarea").focus(function() {
        $(this).css({
            background: "pink"
        })
    }).blur(function() {
        $(this).css({
            background: ""
        })
    })

    $("input[name='name']").focus(function() {
        $(this).after("<strong><br>필수항목입니다.</strong>")
    }).blur(function() {
        $("strong").remove();
    })

    $("input[name='password']").focus(function() {
        $(this).after("<strong><br>비밀번호는 10자 이상이어야 합니다.</strong>")
    }).blur(function() {
        $("strong").remove();
    })

    $("input[name='file']").mouseover(function() {
        $(this).after("<strong><br>업로드 가능한 파일은 1MB 이하입니다.</strong>")
    }).mouseout(function() {
        $("strong").remove();
    })


    $("#all").click(function() { // 이지스퍼블리싱 p.225
        var bool = $(this).prop("checked");
        $(":checkbox").prop("checked", bool);
    })


    $("textarea").keydown(function() {
        var max_len = 500;
        var length = $(this).val().length;
        var curr_len = max_len - length;
        $(".remain").text(curr_len);
    })


    $(".button").click(function() {
        $("form").css({
            display: "none"
        })
    })


$(".btn > input").click(function(){
      $(this).siblings().removeClss("on")
      $(this).addClass("on")

})


  

})