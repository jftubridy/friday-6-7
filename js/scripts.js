






$(function(){
  var age;

  $("#age").submit(function(event){
    age = parseInt($("input#age").val());

    if (age <8){
      $(".form1").hide();
      $(".lang").hide();
      alert("Maybe enjoy childhood a little longer");
    } else {
      $(".form1").show();
      $(".lang").show();
    }
    event.preventDefault();
  })
});
