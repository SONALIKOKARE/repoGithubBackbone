define([
    "text!../../../../template/academic/academic.html",
    "handlebars",
    "mediator",
    "bxslider",
    'fancybox',
    "less!../../../../../../../less/article",
    "less!../../../../../../../less/common",
    "less!../../../../../../../less/academic",
    "less!../../../../../../../less/jquery.bxslider"
], function (academicTemplate, handlebars, mediator) {
    return function () {
        this.render = function () {

            self = this;
            $(".dataContent").removeAttr('id');
            $(".dataContent").attr('id', 'academic');
            $(".dataContent").html(academicTemplate);

            if (navigator.userAgent.indexOf('Mac') > 0)
                $('body').addClass('mac-os');
            if (navigator.userAgent.indexOf('Safari') > 0)
                $('body').addClass('safari');
            if (navigator.userAgent.indexOf('Chrome') > 0)
                $('body').addClass('chrome');
            self.addEvent();
        },
        this.articlepageLoad = function (data) {
            require(['../views/academic/' + data], function (ArticleTemplate) {
                var articleTemplate = new ArticleTemplate();
                articleTemplate.render();
                $('.bxslider').bxSlider({
                    minSlides: 3,
                    maxSlides: 4,
                    slideWidth: 150,
                    slideMargin: 10,
                });

           		$('.fancybox').fancybox();
            });
        },
        this.addEvent = function () {
            //Code for  article clicks
            $('.tab-links li').each(function () {
                if ($(this).hasClass('active')) {
                    var currentArticlepageLoad = $(this).attr('id');
                    self.articlepageLoad(currentArticlepageLoad);
                }
            });
            $('.tab-links li').click(function () {
                $('.tab-links li').removeClass('active');
                $(this).addClass('active');
                var currentArticlepageLoad = $(this).attr('id');
                self.articlepageLoad(currentArticlepageLoad);

            });

            //Search Box popup on click on search icon image.
            $(".icon_search").on('click', function (e) {
                e.preventDefault();
                $("#flyout>li>a").next().slideUp();
                $('#search_popup').slideDown();
            });
            $("#search_popup .close_x").on('click', function (e) {
                e.preventDefault();
                $('#search_popup').slideUp("fast");
            });

            //hide search box when window scroll up 
            $(window).scroll(function () {
                if ($(this).scrollTop() < 100) {
                    $('#search_popup').css('display', 'none');
                }
            });

            // Apply background color on click menu on header and search box popup
            $('#search_popup li a,#search_cont_2 li a').click(function () {
                $('#search_popup ul li a').removeClass('active');
                $(this).addClass('active');
                $('#search_cont_2 li a').removeClass('active');
                $(this).addClass('active');
            })

            //show image caption on click of uparrow and slidedown onclick of downarrow.
            $('#image_banner .arrow-up ').on('click', 'a', function (e) {
                e.preventDefault();
                $('.description').slideDown();
                $('.arrow-up a').css('background', 'none');
            });
            $('#image_banner .arrow-down').on('click', 'a', function (e) {
                e.preventDefault();
                $('.arrow-up a').css('background', '');
                $('.description').slideUp();
            });

            

            //code for toggling menu list on title bar
            $(".flyout_menu").on('click', 'li>a', function (e) {
                e.preventDefault();
                if ($(this).hasClass('menu1')) {
                    $(this).next().slideDown();
                    $(".flyout_menu>li>a.menu2").next().slideUp();
                }

                if ($(this).hasClass('menu2')) {
                    $(this).next().slideDown();
                    $(".flyout_menu>li>a.menu1").next().slideUp();
                }
            });

            // The Accordion Effect
            $('.accord').on('click', 'li a', function (e) {
                e.preventDefault();
                if ($(this).next("ul").is(":visible")) {
                    $(this).next("ul").slideUp("slow");
                    $('.accord li a').removeClass('active');
                } else {
                    $('.accord li ul').slideUp();
                    $(this).next('ul').slideToggle();
                    $('.accord li a').removeClass('active');
                    $(this).addClass('active');
                }
            });
            //flyout menu hide
            $(".flyout_toolsetting .close_x").on('click', function (e) {
                e.preventDefault();
                $(this).parent().hide();
                $('.accord li ul').slideUp();
                $('.accord li a').removeClass('active');
            });
            //Display another header onkeypress in search textbox
            
            $("#first_search").focus(function () {
                $("#search_cont_1").hide();
                $("#search_cont_2").show();
                $("#second_search").focus();
            });
            //show animated bar after 150px height
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#animation').css('display', 'block').addClass('fixed');
                } else {
                    $('#animation').css('display', 'none').removeClass('fixed');
                    $('#search_popup').css('display', 'none');
                }
            });
            //code for vertical tabs
           
            // js code for show image caption on image popup
            
            $('#sidemenu a').on('click', function (e) {
                e.preventDefault();

                if ($(this).hasClass('open')) {
                    // do nothing because the link is already open
                } else {
                    var oldcontent = $('#sidemenu a.open').attr('href');
                    var newcontent = $(this).attr('href');

                    $(oldcontent).fadeOut('fast', function () {
                        $(newcontent).fadeIn().removeClass('hidden');
                        $(oldcontent).addClass('hidden');
                    });

                    $('#sidemenu a').removeClass('open');
                    $(this).addClass('open');
                }
            });
            // js code for show image caption on image popup
            

            $('.image-caption').remove();
            $('.fancybox-skin').append('<div class="image-caption" ><div class="image_content"><h3 class="blue_text">Aboriginal ceremony</h3><h6>Home Article: <strong class="blue_text"><a href="#">Australia</a></strong></h6><p>Perth is the capital and chief business center of the state of Western Australia.It is also one of Australias largest cities. The downtown area of Perth stands on the northern bank of the Swan River.Modern high-rise buildings dominate the city skyline, shown here.</p></div><div class="image-options blue_text"><h6>Save to My Research </h6><span class="sticky-notes"> &copy; Pictor International/Alamy</span><a href="javascript:;"></a></div></div>');
            $('#imagepop').remove();

            $('.image-options a').click(function () {
                $('.image-caption').remove();
                $('.fancybox-skin').append('<div id="imagepop" style="clear:both;text-align:right;position:absolute;right:-4px;bottom:0px;"><a href="javascript:;" id="clickup" ></a></div>');
            })
            //show video in fancybox popup
            
            $('#image_column .fancybox').fancybox();
            $("a.fancyvideo5").click(function () {
                var url = $(this).attr('name');
                $.fancybox({
                    'padding': 40,
                    'overlayOpacity': 0.7,
                    'autoDimensions': false,

                    'content': '<div class="video-js-box">' +
                        '<video class="video-js" width="635" height="475" controls preload>' +
                        '<source src="' + url + '"' + 'type=video/mp4; codecs="avc1.42E01E, mp4a.40.2"' + '/> ' +
                        '</video>' +
                        '</div>',
                });
            });
            var img = new Image();
            img.onload = function () {
                img.src = $('#image_banner img').attr('src');
                alert('Width: ' + img.width + ', Height: ' + img.height);
            }
        }
    }
});