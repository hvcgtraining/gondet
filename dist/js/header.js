"use strict";

$(document).ready(function () {
  // Open menu
  $("#isShowMenu").click(function () {
    $("#navbarSupportedContent").addClass("showMenu");
    $(".bg-body").addClass("show-bg-body");
    $("body").css('overflow', 'hidden');
  }); // Close menu

  $("#close-menu").click(function (e) {
    $("#navbarSupportedContent").removeClass("showMenu");
    $(".bg-body").removeClass("show-bg-body");
    $("body").css('overflow', 'auto');
    $('.op-menu').removeClass("clo-menu");
  }); //Open Search Mobile

  $("#icon-search-mobile").click(function () {
    $("#form-search-mobile").addClass("showSearchMobile");
    $(".bg-body").addClass("show-bg-body");
    $("body").css('overflow', 'hidden');
  });
  $('.op-menu').click(function () {
    $(this).addClass('clo-menu');
  });
  var menu = document.getElementById("navbarSupportedContent");
  var showBgBody = document.getElementsByClassName("bg-body"); // Close All Event Click

  $(window).click(function (e) {
    if (event.target.className == "bg-body show-bg-body") {
      $(".bg-body").removeClass("show-bg-body");
      $("#navbarSupportedContent").removeClass("showMenu");
      $('#form-search-mobile').removeClass("showSearchMobile");
      $('.op-menu').removeClass("clo-menu");
      $("body").css('overflow', 'auto');
    }
  });
  var navmenu = $('#header-room').height();
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > navmenu + 200) {
      $('#header-room').addClass('fixed');
    } else {
      $('#header-room').removeClass('fixed');
    }
  });
  var navMenuMain = $('#header-main').height();
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > navMenuMain + 200) {
      $('#header-main').addClass('fixed');
      $('#header-main').addClass('header-sub');
      $('#header-main').find('.header_container').css({
        "display": "none"
      });
    } else {
      $('#header-main').removeClass('fixed');
      $('#header-main').removeClass('header-sub');
      $('#header-main').find('.header_container').css({
        "display": "block"
      });
    }
  });
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() >= $(window).height() / 2) {
      $('.btn-backtotop').css("display", "block");
    } else {
      $('.btn-backtotop').css("display", "none");
    }
  });
  $('.btn-backtotop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});