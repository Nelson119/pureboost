"use strict";function getParam(e){var i=new RegExp("^.*[?&]"+e+"[=]([^&]+).*$","i");if(!i.test(location.search))return null;var s=location.search.replace(i,"$1");return decodeURIComponent(s)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},app={};app.partial={};var debug=/localhost[:]9000|nelson119.github.io/.test(location.href),scrollTop=0,activeSection="",range={};$(function(){function e(){$("#section5 .carousel .slide.gray .slide-image").slick("resize"),$("#section5 .carousel .slide.gray .slide-thumb aside").slick("resize"),$("#section5 .carousel .slide.red .slide-image").slick("resize"),$("#section5 .carousel .slide.red .slide-thumb aside").slick("resize"),$("#section5 .carousel .slide.black .slide-image").slick("resize"),$("#section5 .carousel .slide.black .slide-thumb aside").slick("resize"),$("#section5 .carousel .slide.white .slide-image").slick("resize"),$("#section5 .carousel .slide.white .slide-thumb aside").slick("resize"),$("#section5 .carousel .slide.light-gray .slide-image").slick("resize"),$("#section5 .carousel .slide.light-gray .slide-thumb aside").slick("resize"),$("#section5 .carousel").slick("resize"),$("#section5 .colors aside").slick("resize")}function i(){$("#section5 .carousel .slide.gray .slide-image").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#section5 .carousel .slide.gray .slide-thumb aside"}),$("#section5 .carousel .slide.red .slide-image").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#section5 .carousel .slide.red .slide-thumb aside"}),$("#section5 .carousel .slide.black .slide-image").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#section5 .carousel .slide.black .slide-thumb aside"}),$("#section5 .carousel .slide.white .slide-image").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#section5 .carousel .slide.white .slide-thumb aside"}),$("#section5 .carousel .slide.light-gray .slide-image").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#section5 .carousel .slide.light-gray .slide-thumb aside"}),$("#section5 .carousel").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,draggable:!1,fade:!0,asNavFor:"#section5 .colors aside"}),$("#section5 .colors aside").slick({infinite:!1,slidesToShow:5,slidesToScroll:5,arrows:!1,draggable:!1,focusOnSelect:!0,asNavFor:"#section5 .carousel"})}function s(){var e=$(window).width(),i=!0,s=!1;e<=800&&(i=!1,s=!0);var o={infinite:!1,vertical:i,focusOnSelect:!0,slidesToShow:10,slidesToScroll:10,arrows:!1,draggable:!1};console.log("initThumbs();"),$("#section5 .carousel .slide.gray .slide-thumb aside .slick-list").length&&$("#section5 .carousel .slide.gray .slide-thumb aside").slick("unslick"),o.asNavFor="#section5 .carousel .slide.gray .slide-image",$("#section5 .carousel .slide.gray .slide-thumb aside").slick(o),$("#section5 .carousel .slide.red .slide-thumb aside .slick-list").length&&$("#section5 .carousel .slide.red .slide-thumb aside").slick("unslick"),o.asNavFor="#section5 .carousel .slide.red .slide-image",$("#section5 .carousel .slide.red .slide-thumb aside").slick(o),$("#section5 .carousel .slide.black .slide-thumb aside .slick-list").length&&$("#section5 .carousel .slide.black .slide-thumb aside").slick("unslick"),o.asNavFor="#section5 .carousel .slide.black .slide-image",$("#section5 .carousel .slide.black .slide-thumb aside").slick(o),$("#section5 .carousel .slide.white .slide-thumb aside .slick-list").length&&$("#section5 .carousel .slide.white .slide-thumb aside").slick("unslick"),o.asNavFor="#section5 .carousel .slide.white .slide-image",$("#section5 .carousel .slide.white .slide-thumb aside").slick(o),$("#section5 .carousel .slide.light-gray .slide-thumb aside .slick-list").length&&$("#section5 .carousel .slide.light-gray .slide-thumb aside").slick("unslick"),o.asNavFor="#section5 .carousel .slide.light-gray .slide-image",$("#section5 .carousel .slide.light-gray .slide-thumb aside").slick(o)}app.getParam=getParam,$.each(app.partial,function(e,i){i()}),$(".section").each(function(){var e=$(this).attr("id");e&&(range[e]={},range[e].top=function(){return $("#"+e).offset().top},range[e].butt=function(){return $("#"+e).offset().top+$("#"+e).outerHeight()},range[e].middle=function(){return $("#"+e).offset().top+$("#"+e).outerHeight()/2})}),app.imageReload.init(),app.imageReload.callback=function(){$("html").addClass("loading-done"),setTimeout(function(){$(window).trigger("scroll")},500)},$(window).on("scroll resize",function(){var e=$(window).scrollTop()+$(window).height()/3,i=$(window).scrollTop()+$(window).height()/3*2;$(".section").each(function(s,o){var t=$(this).attr("id"),a=range[t];a.middle()>=e&&a.middle()<=i&&activeSection!=t&&(activeSection=t),activeSection&&!$("#"+activeSection).hasClass("on")&&$("#"+activeSection).addClass("on").trigger("section:on").siblings().removeClass("on"),scrollTop=e})}),$(window).on("resize",function(){$(".slick-list").length?(console.log("resizeCarousel();"),e()):(i(),console.log("initCarousel();")),setTimeout(function(){s()},500)}),app.imageReload.init()}),$.fn.hasAttr=function(e){var i=$(this).attr(e);return"undefined"!==("undefined"==typeof i?"undefined":_typeof(i))&&i!==!1};var share={facebook:function(e,i){e=encodeURIComponent(e||location.href+"?utm_source=facebook&utm_medium=fbshare_m&utm_campaign=camp"),i=encodeURIComponent(i||document.title),window.open("https://www.facebook.com/sharer.php?u="+e+"&amp;t="+i)},googleplus:function(e){e=encodeURIComponent(e||location.href+"?utm_source=g+&utm_medium=googleplus_m&utm_campaign=camp"),window.open("https://plus.google.com/share?url="+e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")},email:function(e,i){e=encodeURIComponent(e||location.href+"?utm_source=email&utm_medium=email_m&utm_campaign=camp"),i=encodeURIComponent(i||document.title);var s=encodeURIComponent(""+e+" #"+i);window.open("https://mail.google.com/mail/?view=cm&fs=1&to=&su=與你分享:"+i+"&body="+s+"&bcc=")}};app.partial.preload=function(){function e(e){function s(e){t[e]=!0;var i=!0;$.each(t,function(e,s){i=s&&i}),i&&o()}function o(){"function"==typeof app.imageReload.callback&&(app.imageReload.callback(),i=!1)}var t={},a=[],l=$("img[data-src]:visible, figure[data-src]:visible").not("[src],[style]");l.each(function(e,i){$(i).attr("data-src")&&(t[$(i).attr("data-src")]=!1,a.push(i))}),$.each(t,function(e,i){if(/\.svg$/.test(e))$.get(e,function(i){$(a).filter(function(){return e==$(this).attr("data-src")}).each(function(e,s){"img"===s.tagName.toLowerCase()?($("svg",i).clone().insertAfter(s),$(s).remove()):$(s).removeAttr("data-src").html($("svg",i).clone())});s(e)});else{var o=new Image;o.onload=function(){$(a).filter(function(){return e==$(this).attr("data-src")}).each(function(e,i){"img"===i.tagName.toLowerCase()?$(i).attr("src",$(i).attr("data-src")):$(i).css("background-image","url("+$(i).attr("data-src")+")")});s(e)},o.src=e}})}app.dementions={mobile:!1,desktop:!1};var i=!1;app.imageReload={init:function(){var e=this.refresh;$(window).on("resize",function(){e()}).trigger("resize")},refresh:function(){$("img[data-src]:visible, figure[data-src]:visible").not("[src],[style]").length&&$(window).width()<=768?e(function(){app.dementions.mobile=!0}):$("img[data-src]:visible, figure[data-src]:visible").not("[src],[style]").length&&$(window).width()>768?e(function(){app.dementions.desktop=!0}):app.imageReload.callback()},callback:function(){}}},app.partial.ga=function(){$(".section").on("section:on",function(){var e=$(window).width(),i=$(this).attr("data-section-ga");e<=768&&(i=$(this).attr("data-section-mobile-ga")),"undefined"!=typeof ga&&ga("send","pageview",{page:i,title:i})}),$("[data-ga]").on("click",function(){var e=$(window).width();e>768&&ga("send","event","Button","click",$(this).attr("data-ga"))}),$("[data-mobile-ga]").on("click",function(){var e=$(window).width();e<=768&&ga("send","event","Button","click",$(this).attr("data-mobile-ga"))})};