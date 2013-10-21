$(function () {
    if($('.middle .home').length) // AND WIDTH IS > 767px !
    {
        $('.home .ballon img').addClass('jfixed');
        balloncen();

        $('.home .ballon img').each(function() {
            $(this).data('oSrc', $(this).prop("src"));
        });

        var secImg;
        $('.home li').css('cursor', 'pointer').on({
            click: function(e) {
                var ca = $(this).children('a');
                if( ! $(e.target).is(ca)) ca[0].click();
            },
            'mouseenter': function () {
                $(this).children('a').toggleClass('jhover');
                if($('.home .ballon').is(':visible'))
                {
                    $(this).closest('.list')
                    .siblings('.ballon')
                    .find('img').not('.hide')
                    .toggleClass('anim anim2')
                    .prop('src', $(this).find('img').prop('src'));
                }
            },
            'mouseleave': function () {
                $(this).children('a').toggleClass('jhover');
                if($('.home .ballon').is(':visible'))
                {
                    secImg = $(this).closest('.list').siblings('.ballon').find('img').not('.hide');
                    secImg.toggleClass('anim anim2');
                    secImg.prop('src', secImg.data('oSrc'));
                }
            }
        }).find('span').css('cursor', 'pointer');
    }
});

function balloncen()
{
    if($('.home .ballon').is(':visible'))
    {
        var ballonTop = ($( window ).height() / 2);

        var pHeader = $(window).scrollTop() > 126
                    ? 0
                    : (126 - $(window).scrollTop()) / 2 ;

        var pFooter = ( $(window).height() + $(window).scrollTop() >=  $('body').height() - 135 )
                    ? ($('body').height() - 135 - ($(window).height() + $(window).scrollTop())) / 2
                    : 0 ;

        $('.home .ballon img').css('top', ballonTop + pHeader + pFooter);

        if(
            (pHeader > 0 && $('.home .ballon img').eq(0).hasClass('hide'))
            ||
            (pHeader == 0 && pFooter != 0 && $('.home .ballon img').eq(1).hasClass('hide'))
        )
        {
            $('.home .ballon img').toggleClass('hide');
        }
    }
}

window.onscroll = balloncen;
window.onresize = balloncen;