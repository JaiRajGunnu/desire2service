

var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}

 $(function () {
  
           $(window).on("scroll", function(e){
      
      var height = 0;
      var scrollTop = $(this).scrollTop();
      
      if ( scrollTop < 200 ) {
        height = $("#head-trigger").height();
        $("#head-trigger").removeClass("scrolled-header");
      }
      
      else {
        $("#head-trigger").addClass("scrolled-header");
        $("body").css({"marginTop": height});
        $("#head-trigger").fadeIn();
      }
      
    });
      });
      
$(window).bind("load", function () {
    jQuery(".loader").fadeOut("slow");
    jQuery(".preloader").delay(0).fadeOut();
});







