
//퀵 메뉴//
$(function () {
    var menu = $('.nav > li');
    var contents = $('#wrap > div');

    $('.nav> li').click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        var section = $('#wrap > div').eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });
    //메뉴에 addclass를 적용
    // $(window).scroll(function(){
    //     var sct = $(window).scrollTop();

    //     $('#wrap > div').each(function(){
    //         var tg = $(this);
    //         var i = tg.index();
    //         if(tg.offset().top <= sct){
    //             $('.nav > li').removeClass('on');
    //             $('.nav > li').eq(i).addClass('on');
    //     }
    // });
    // $(window).scroll(function(){
    // var sct = $(window).scrollTop();

    // contents.each(function(){
    //     var tg = $(this);
    //     var i = tg.index();
    //     if(tg.offset().top <= sct){
    //         menu.removeClass('on');
    //         menu.eq(i).addClass('on');
    //     }
    // });
});
//----------------------------------------------//

// skill //

$(document).ready(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1200 && scene01Num == 1) {
            scene01Num = 0;
            $('#skill .in_box01').stop().delay(0).css({ top: '300px' }).animate({ top: '60px' }, 1000);
            $('#skill .in_box02').stop().delay(200).css({ top: '300px' }).animate({ top: '60px' }, 1000);
            $('#skill .in_box03').stop().delay(300).css({ top: '300px' }).animate({ top: '150px' }, 1000);
            $('#skill .in_box04').stop().delay(400).css({ top: '300px' }).animate({ top: '200px' }, 1000);
            $('#skill .in_box05').stop().delay(500).css({ top: '300px' }).animate({ top: '30px' }, 1000);
            $('#skill .in_box06').stop().delay(600).css({ top: '300px' }).animate({ top: '300px' }, 1000);
        }
        else if (scrollTop < 1200 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .in_box01').stop().css({ top: '60px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box02').stop().css({ top: '60px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box03').stop().css({ top: '150px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box04').stop().css({ top: '200px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box05').stop().css({ top: '30px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box06').stop().css({ top: '300px' }).animate({ top: '300px' }, 1000);

        }
    });
//----------------------------------------------//


// email //
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"

    type="text/javascript"
    emailjs.init('QhgcUcjoLCTqr5azp')

    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'service_6efd0up';
            const templateID = 'template_4fucy0y';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('메일보내기 성공');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
});
//-------------------------------------------------//

 // $(function () {
        //     $(window).scroll(
        //         function () {
        //             var windowTop = $(window).scrollTop() + 300;
        //             $("#q_mn").stop().animate({ top: windowTop + "px" }, 500);
        //             //$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);	
        //         }
        //     );
        // });