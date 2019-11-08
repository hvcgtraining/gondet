"use strict";

$(document).ready(function () {
  $('ul.tabs-content li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-content li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
});