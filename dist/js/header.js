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
});