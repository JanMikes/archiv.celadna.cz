$(document).ready(function(){
   $(".button-set label").click(function(){
      $(this).addClass("active");
      $(this).siblings("label").removeClass("active");
   });
   $(".button-set.change-load :radio").focus(function(){
    console.log($(this).val());
    $.ajax({
      type:"post",
      data:{formAction:"register-filter",filter_by:$(this).val()},
    }).done(function() {
    console.log(window.location.href);
    window.location.assign(window.location.href); 
  });
   });
});