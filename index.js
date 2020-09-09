$(document).ready(function(){
  $(".category-item").click(function(){
    $(".category-item").removeClass('category-active')
    $(this).addClass('category-active');
  });
});