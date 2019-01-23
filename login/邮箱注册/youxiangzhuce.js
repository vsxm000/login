// <!-- 左侧图片轮播部分 -->
    // 设置index坐标
    var index = -1;
    // 设置定时器
    setInterval(function(){
        index++
        // 判断
        if(index > $('.left_photo img').length - 1){
            index = 0;
        }
        $('.left_photo img')
        .eq(index)
        .fadeIn(2000)
        .siblings('img')
        .fadeOut(2000)
    },3000)

// 顶部盒子部分
    // 获取元素
// 右边第二个盒子
    // 鼠标进入事件
    $('.top .language').mouseenter(function(){
        $('#down_sanjiao').css('display','none')
        $('#up_sanjiao').css('display','block')
        $(this)
        .children('ul')
        .find('li')
        .css('display','block')

    })
    // 鼠标离开事件
    $('.top .language').mouseleave(function(){
        $('#down_sanjiao').css('display','block')
        $('#up_sanjiao').css('display','none')
        $(this)
        .children('ul')
        .find('li')
        .css('display','none')

    })
// 右边的第四个盒子
    // 鼠标进入事件
    $('.top .qqnumber').mouseenter(function(){
        $(this)
        .children('.tanchu_content')
        .css('display','block');

    })
    // 鼠标离开事件
    $('.top .qqnumber').mouseleave(function(){
        $(this)
        .children('.tanchu_content')
        .css('display','none');

    })

// 下面表单事件、
    // 弹出滚动框事件
    // 鼠标点击事件
    $('.number_input #down_sanjiao1').click(function(){
       
        
            $(this)
            .parent()
            .parent()
            .children('.huadonghezi')
            .css('display','block')

            $('#down_sanjiao1')
            .css('display','none')

            $('#up_sanjiao1')
            .css('display','block')
    })   

    $('.number_input #up_sanjiao1').click(function(){
        $(this)
        .parent()
        .parent()
        .children('.huadonghezi')
        .css('display','none')

        $('#down_sanjiao1')
        .css('display','block')

        $('#up_sanjiao1')
        .css('display','none')
    })



    // 弹出短信验证码事件
    $('#phone_number').focus(function(){
        $('.two_input2').css('display','block');
    })

    // 判断输入框失去焦点时 验证按钮 是否消失
    var isHidden = true;
    // 点击表单任意地方都隐藏验证码
    $('#phone_number').blur(function(){
        if(isHidden) {
            $('.two_input2').css('display','none')
        }
    })

    // 当失去焦点时鼠标在 验证按钮 区域，验证按钮不消失
    $('.two_input2').mouseenter(function() {
        isHidden = false;
    });
    // 当失去焦点时鼠标不在 验证按钮 区域，验证按钮消失
    $('.two_input2').mouseleave(function() {
        isHidden = true;
    });
          
    // 底部部分
    // 实现点击对号更换为空格的图片效果
    
    $('.duihao1').click(function () { 
       
            $('.duihao1').css('display','none');
            $('.kongge1').css('display','block');
          
        
})
    $('.kongge1').click(function () { 
       
        $('.duihao1').css('display','block');
        $('.kongge1').css('display','none');
 })

    $('.duihao2').click(function () { 
        
        $('.duihao2').css('display','none');
        $('.kongge2').css('display','block');
    

})
    $('.kongge2').click(function () { 

        $('.duihao2').css('display','block');
        $('.kongge2').css('display','none');
})

    // 获取底层小三角部分 弹出三个a标签


    $("#down-sanjiao").click(function(){
        $("#down-sanjiao").css('display','none')
        $('#up-sanjiao').css('display','block')
        $('.shouce').css('display','block')
    })
    $("#up-sanjiao").click(function(){
        $("#up-sanjiao").css('display','none')
        $('#down-sanjiao').css('display','block')
        $('.shouce').css('display','none')
    })   
    
    //点击第一个文本框效果
        // 昵称
        $('#nametext').blur(function(){
           if($(this).val()===''){
            $(this)
            .next()
            .next()
            .css('display','block')
            $(this)
            .next()
            .css('display','none')
            $(this)
            .next()
            .next()
            .next()
            .css('display','none')
           }else{
            $(this)
            .next()
            .next()
            .css('display','none')
           }
        })



    // 点击第二个文本框点击效果
        //    密码文本框获取焦点
        $('#password').focus(function(){
            $(this)
            .next()
            .next()
            .css('display','none');

            if($('#nametext').val() ===''){
                $(this)
                .prev()
                .css('display','block')

                
            }else{
                $('#nametext').next()
                .css('display','block')
                

            }
            $(this).next()
            .css('display','block')

        })
        // 密码文本框失去焦点
        $('#password').blur(function(){
            $(this).next()
            .css('display','none')
            if($(this).val()===''){
                $(this).next()
                .next()
                .css('display','block')
            }else{
                $(this).next()
                .next()
                .css('display','none')
            } 
        })
   //密码文本框实现的输入事件
//    $('#password').input(function(){
//        if( 8 <= $(this).val().length <= 16){
//            $(this)
//            .next()
//            .children('p')
//            .next()
//            .find('span')
//            .animate.hide()
//            $(this)
//            .next()
//            .children()
//            .next('p')
//            .next()
//            .next()
//            .animate.show()
    //    }else{
    //     $(this)
    //     .next()
    //     .children('p')
    //     .next()
    //     .find('span')
    //     .animate.show()
    //     $(this)
    //     .next()
    //     .children()
    //     .next('p')
    //     .next()
    //     .next()
    //     .animate.hide()
    //    }

    // if( $(this）).val()){

    // }
    // })

    $('#password').click(function(){
        if($(this).val() !== ''){
           $(this)
           .next()
           .next()
           .next()
           .css('display','block')
        }else{
            $(this)
            .next()
            .next()
            .next()
            .css('display','none')
        }
        // if($(this).val() === ''){
        //     $(this)
        //     .next()
        //     .next()
        //     .next()
        //     .css('display','none')
        //  }
    })

    // 文本框获取短信验证码
   
    $('#send_message').click(function () {
       if($('#phone_number').val() === ''){
          $(this)
          .parent()
          .prev()
          .css('display','block');

       }else{
        $(this)
        .parent()
        .prev()
        .css('display','none');
       }
       $(this)
       .css('background','#ccc')
      
      })
    //   获取图片实现点击任何一处图片消失
    $('#send_message').focus(function(){
        if($('#phone_number').val().length == 11){
            $('.duanxin')
            .css('display','block')
         }
    })
    $('#send_message').blur(function(){
        $('.duanxin')
        .css('display','none')
    })