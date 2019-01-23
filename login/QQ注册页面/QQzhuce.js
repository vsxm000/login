// <!-- 左侧图片轮播部分 -->
// 设置index坐标
var index = -1;
// 设置定时器
setInterval(function () {
    index++
    // 判断
    if (index > $('.left_photo img').length - 1) {
        index = 0;
    }
    $('.left_photo img')
        .eq(index)
        .fadeIn(2000)
        .siblings('img')
        .fadeOut(2000)
}, 3000)

// 顶部盒子部分
// 获取元素
// 右边第二个盒子
// 鼠标进入事件
$('.top .language').mouseenter(function () {
    $('#down_sanjiao').css('display', 'none')
    $('#up_sanjiao').css('display', 'block')
    $(this)
        .children('ul')
        .find('li')
        .css('display', 'block')

})
// 鼠标离开事件
$('.top .language').mouseleave(function () {
    $('#down_sanjiao').css('display', 'block')
    $('#up_sanjiao').css('display', 'none')
    $(this)
        .children('ul')
        .find('li')
        .css('display', 'none')

})
// 右边的第四个盒子
// 鼠标进入事件
$('.top .qqnumber').mouseenter(function () {
    $(this)
        .children('.tanchu_content')
        .css('display', 'block');

})
// 鼠标离开事件
$('.top .qqnumber').mouseleave(function () {
    $(this)
        .children('.tanchu_content')
        .css('display', 'none');

})

// 下面表单事件、
// 弹出滚动框事件
// 鼠标点击事件
$('.number_input #down_sanjiao1').click(function () {


    $(this)
        .parent()
        .parent()
        .children('.huadonghezi')
        .css('display', 'block')

    $('#down_sanjiao1')
        .css('display', 'none')

    $('#up_sanjiao1')
        .css('display', 'block')
})

$('.number_input #up_sanjiao1').click(function () {
    $(this)
        .parent()
        .parent()
        .children('.huadonghezi')
        .css('display', 'none')

    $('#down_sanjiao1')
        .css('display', 'block')

    $('#up_sanjiao1')
        .css('display', 'none')
})



// 弹出短信验证码事件
$('#phone_number').focus(function () {
    $('.two_input2').css('display', 'block');
})

// 判断输入框失去焦点时 验证按钮 是否消失
var isHidden = true;
// 点击表单任意地方都隐藏验证码
$('#phone_number').blur(function () {
    if (isHidden) {
        $('.two_input2').css('display', 'none')
    }
})

// 当失去焦点时鼠标在 验证按钮 区域，验证按钮不消失
$('.two_input2').mouseenter(function () {
    isHidden = false;
});
// 当失去焦点时鼠标不在 验证按钮 区域，验证按钮消失
$('.two_input2').mouseleave(function () {
    isHidden = true;
});

// 底部部分
// 实现点击对号更换为空格的图片效果

$('.duihao1').click(function () {

    $('.duihao1').css('display', 'none');
    $('.kongge1').css('display', 'block');


})
$('.kongge1').click(function () {

    $('.duihao1').css('display', 'block');
    $('.kongge1').css('display', 'none');
})

$('.duihao2').click(function () {

    $('.duihao2').css('display', 'none');
    $('.kongge2').css('display', 'block');


})
$('.kongge2').click(function () {

    $('.duihao2').css('display', 'block');
    $('.kongge2').css('display', 'none');
})

// 获取底层小三角部分 弹出三个a标签


$("#down-sanjiao").click(function () {
    $("#down-sanjiao").css('display', 'none')
    $('#up-sanjiao').css('display', 'block')
    $('.shouce').css('display', 'block')
})
$("#up-sanjiao").click(function () {
    $("#up-sanjiao").css('display', 'none')
    $('#down-sanjiao').css('display', 'block')
    $('.shouce').css('display', 'none')
})

//点击第一个文本框效果
// 昵称
$('#nametext').blur(function () {
    if ($(this).val() === '') {
        $(this)
            .next()
            .next()
            .css('display', 'block')
        $(this)
            .next()
            .css('display', 'none')
    } else {
        $(this)
            .next()
            .next()
            .css('display', 'none')
        $(this)
            .next()
            .css('display', 'block')

    }
})



// 点击第二个文本框点击效果
//    密码文本框获取焦点
// $('#password').focus(function () {

//     $(this).next()
//         .next()
//         .css('display', 'none')


//     if ($('#nametext').val() === '') {
//         $(this)
//             .prev()
//             .css('display', 'block')

//     } else {
//         $('#nametext').next()
//             .css('display', 'block')


//     }
//     $(this).next()
//         .css('display', 'block')

// })
// 密码文本框失去焦点
// $('#password').blur(function () {
//     $(this).next()
//         .css('display', 'none')
//     if ($(this).val() === '') {
//         $(this).next()
//             .next()
//             .css('display', 'block')

//         $(this)
//             .next()
//             .next()
//             .next()
//             .css('display', 'none');
//     } else {
//         $(this).next()
//             .next()
//             .css('display', 'none')

//         $(this)
//             .next()
//             .next()
//             .next()
//             .css('display', 'block');
//     }
// })
//密码文本框实现的输入事件
$('#password').focus(function () {

    $('.panduan').css('display', 'block');
    $('.all_right').css('display', 'none');
});

$('#password').blur(function () {

    $('.panduan').css('display', 'none');

    $('.all_right').css('display', 'block');

    if ($('.panduan .correct').length == 3) {
        $('.all_right').find('span').addClass('correct');
    } else {
        $('.all_right').find('span').removeClass('correct');
    }
});
$('#password')[0].oninput = function () {
    // console.log($(this).val());
    var text = $(this).val();
    if (text == '') {
        $('.space_check').find('span').removeClass('correct');
        return;
    }
    if (text.indexOf(' ') == -1) {
        $('.space_check').find('span').addClass('correct');
    } else {
        $('.space_check').find('span').removeClass('correct');
    }

    if (text.length >= 8 && text.length <= 16) {
        $('.len_check').find('span').addClass('correct');
    } else {
        $('.len_check').find('span').removeClass('correct');
    }
    if (getCharType($('#password').val()) >= 2) {
        $('.other_check').find('span').addClass('correct');
    } else {
        $('.other_check').find('span').removeClass('correct');
    }

    // console.log(otherCount + ' ' + numCount + ' ' + charCount)
};
// 获取字符串中包含字符的种类
function getCharType(str) {
    var numCount = 0, charCount = 0, otherCount = 0;

    // var _char = $(this).val().charAt($(this).val().length - 1);
    // console.log(_char);
    for (var i = 0; i < str.length; i++) {
        var _char = str.charCodeAt(i);
        // 特殊字符： 33-47   58-64  91-96  123-126  
        if (_char >= 33 && _char <= 47
            || _char >= 58 && _char <= 64
            || _char >= 91 && _char <= 96
            || _char >= 123 && _char <= 126) {

            otherCount++;
        }

        // 数字： 48-57
        if (_char >= 48 && _char <= 57) {

            numCount++;
        }

        // 字母： 65-90   97-122
        if (_char >= 65 && _char <= 90
            || _char >= 97 && _char <= 122) {

            charCount++;
        }
    }

    var chartype = 0;
    if (otherCount > 0) {
        chartype++;
    }
    if (numCount > 0) {
        chartype++;
    }
    if (charCount > 0) {
        chartype++;
    }
    return chartype;
}



// 文本框获取短信验证码

$('#send_message').click(function () {
    if ($('#phone_number').val() === '') {
        $(this)
            .parent()
            .prev()
            .css('display', 'block');

    } else {
        $(this)
            .parent()
            .prev()
            .css('display', 'none');
    }
    $(this)
        .css('background', '#ccc')

})
//   获取图片实现点击任何一处图片消失
$('#send_message').focus(function () {
    if ($('#phone_number').val().length == 11) {
        $('.duanxin')
            .css('display', 'block')
    }
})
$('#send_message').blur(function () {
    $('.duanxin')
        .css('display', 'none')
})



// 补充 滑动盒子的效果
$('.huadonghezi ul').on('click', 'li', function () {
    var t = $(this).children('span').text();
    console.log(t);
    $('#moren').attr('placeholder', t);
})
    // attr(改变行内属性)



