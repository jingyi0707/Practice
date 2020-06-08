$(function() {
    $(window).on('resize', function() {
        let clientW = $(window).width();

        let isShow = clientW >= 900;
        let $allItems = $(".GUET_Carousel .carousel-item");
        $allItems.each((index, item) => {

            let src = isShow ? $(item).data('lg-img') : $(item).data('sm-img');
            let imgUrl = 'url("' + src + '")';
            // console.log($(item));
            $(item).css({
                backgroundImage: imgUrl
            });

            if (!isShow) {
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }
        })



    });

    $(window).trigger('resize');

})