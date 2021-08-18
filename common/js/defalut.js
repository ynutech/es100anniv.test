/* スマホナビゲーション設定 */
var mediaQuery = matchMedia('(max-width: 834px)');

handle(mediaQuery);

mediaQuery.addListener(handle);

function handle(mq) {
    if (mq.matches) {
        jQuery(function($){
            var state = false;
            var scrollpos;
                $('.nav_btn,.gnav__menu__item a').on('click', function(){
                if(state == false) {
                    scrollpos = $(window).scrollTop();
                    $('body').addClass('is-fixed').css({'top': -scrollpos});
                    state = true;
                } else {
                    $('body').removeClass('is-fixed').css({'top': 0});
                    window.scrollTo( 0 , scrollpos );
                    state = false;
                }
            });
        });
        jQuery(function($){
            $('.nav_btn').on('click',function(){
            $('.menu__line').toggleClass('active');
            $('.open').toggleClass('active');
            $('.gnav').fadeToggle();
            });
        });        
        jQuery(function(a){a(".gnav__menu__item a").on("click",function(){
            a(".open").toggleClass("active");
            a(".menu__line").toggleClass("active");
            a(".gnav").fadeToggle()});
        });
    } else {
    }
}

/* ページ内リンク ヘッダー分調整 */
$(function(){
    $('a[href^="#"]').click(function(){
        var windowWidth = $(window).width();
        var windowSm = 834; 
        if (windowWidth <= windowSm) {
            var headerHight = 62; 
            } else {
            var headerHight = 66; 
        }
        var speed = 900;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

/* ページトップへ設定 */
jQuery(function() {
    var pagetop = $('#page-top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});