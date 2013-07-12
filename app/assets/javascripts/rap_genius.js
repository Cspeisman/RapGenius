window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $navBar = $(".nav");
    var $rootEl = $('.content');
    var $sideBar = $('.sidebar');
    RapGenius.sideBarTravelHeight = 10;
    RapGenius.songs = new RapGenius.Collections.Songs();

    new RapGenius.Routers.Songs({
      "$rootEl": $rootEl,
      "$sideBar": $sideBar,
      "$navBar" : $navBar,
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  RapGenius.initialize();
});

$(window).scroll(function(){
  var $sideBar = $(".sidebar div");
  var distanceScrolled = $('body').scrollTop();
  if ($sideBar.length === 1){
    if ((!$sideBar.hasClass('fixed')) && 
      (distanceScrolled >= RapGenius.sideBarTravelHeight)){
      debugger
      var width = $sideBar.css("width");
      $sideBar.addClass('fixed');
      $sideBar.css("width", width);
    } else if ($sideBar.hasClass('fixed') && 
      (distanceScrolled < RapGenius.sideBarTravelHeight)){   
      $sideBar.removeClass('fixed');
      $sideBar.css("width", "");
    }
  }
})