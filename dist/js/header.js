"use strict";

$(document).ready(function () {
  $("#isShowMenu").click(function () {
    $("#navbarSupportedContent").addClass("showMenu");
    $(".bg-body").addClass("show-bg-body");
    $("body").css('overflow', 'hidden');
  });
  $("#close-menu").click(function (e) {
    $("#navbarSupportedContent").removeClass("showMenu");
    $(".bg-body").removeClass("show-bg-body");
    $("body").css('overflow', 'auto');
  });
  $("#icon-search-mobile").click(function () {
    $("#form-search-mobile").addClass("showSearchMobile");
    $(".bg-body").addClass("show-bg-body");
    $("body").css('overflow', 'hidden');
  });
  var menu = document.getElementById("navbarSupportedContent");
  var showBgBody = document.getElementsByClassName("bg-body");
  $(window).click(function (e) {
    if (event.target.className == "bg-body show-bg-body") {
      $(".bg-body").removeClass("show-bg-body");
      $("#navbarSupportedContent").removeClass("showMenu");
      $('#form-search-mobile').removeClass("showSearchMobile");
      $("body").css('overflow', 'auto');
    }
  });
});