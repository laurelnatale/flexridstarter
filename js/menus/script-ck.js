$(document).ready(function(){$("body").addClass("js");var e=$("#menu"),t=$(".menu-link"),n=$(".has-subnav > a");t.click(function(n){n.preventDefault();t.toggleClass("active");e.toggleClass("active")});var r=function(){if($(".menu-link").is(":visible")){if(!($(".toggle-link").length>0)){$(".has-subnav > a").before('<span class="toggle-link"> Open submenu </span>');$(".toggle-link").click(function(e){var t=$(this);t.toggleClass("active").siblings("ul").toggleClass("active")})}}else $(".toggle-link").empty()};r();$(window).bind("resize",r)});