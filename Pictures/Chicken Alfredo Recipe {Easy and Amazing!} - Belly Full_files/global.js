jQuery(function($){$('.menu-toggle').click(function(){$('.search-toggle, .header-search').removeClass('active');$('.menu-toggle, .site-menu').toggleClass('active')});$('.menu-item-has-children > a').click(function(e){$(this).parent().toggleClass('expanded');e.preventDefault()});$('.menu-item-has-children > .submenu-expand').click(function(e){$(this).toggleClass('expanded');e.preventDefault()});$('.search-toggle').click(function(){$('.menu-toggle, .site-menu').removeClass('active');$('.search-toggle, .header-search').toggleClass('active');$('.site-header .search-field').focus()});var isFixed=!1;var $window=$(window);$window.scroll(function(){var scrollTop=$window.scrollTop();if(scrollTop>20){$(".fl-button").css("display","flex")}else{$(".fl-button").css("display","none")}
if(scrollTop>200){if(!isFixed){$('.site-header').addClass('fixed').css('top','0px');$('body').css('padding-top','115px');isFixed=!0}}else{if(isFixed){$('.site-header').removeClass('fixed');$('body').css('padding-top','0px');isFixed=!1}}});$(".back-top").click(function(){$("html, body").animate({scrollTop:0})});$('a.modal-link').click(function(e){e.preventDefault();$(this).addClass('active');var href=$.attr(this,'href');$(href).fadeIn();$('#cover').addClass('blurred');$('html,body').css({'overflow':'hidden'})});$('.modal-close').click(function(e){e.preventDefault();that=this;$('a.modal-link').removeClass('active');$('.modal').fadeOut();$('#cover').removeClass('blurred');$('html,body').css({'overflow':''})});$('.modal').click(function(e){e.preventDefault();$('a.modal-link').removeClass('active');$('.modal').fadeOut();$('#cover').removeClass('blurred');$('html,body').css({'overflow':''})});$(".modal-inner").click(function(e){e.stopPropagation()})})