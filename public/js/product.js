function clickme(smallImg) {
  var fullImg = document.getElementById("imagebox");
  fullImg.src = smallImg.src;
}

$(".panel-collapse").on("show.bs.collapse", function () {
  $(this).siblings(".panel-heading").addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function () {
  $(this).siblings(".panel-heading").removeClass("active");
});
