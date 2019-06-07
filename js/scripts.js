






$(function(){
  var age;
  //var lang;
  var lvl;
  var obj;
  var eg;

  $("#age").submit(function(event){
    age = parseInt($("input#age").val());

    if (age <8){
      $(".surv").hide();
      $(".lang").hide();
      alert("Go enjoy childhood a little longer instead, soon you'll miss naps!");
    } else {
      $(".surv").show();
      $("#age").hide();
      //$(".lang").show();
    }
    event.preventDefault();
  })

  $(".surv").submit(function(event){
    lvl = $("#lvl").val();
    obj = $("#obj").val();
    eg = $("#eg").val();
    if (obj == 3) {
      $("#pol").show();
    } else {(lvl ==basic && obj ==web)
      $("#htm").show();
      $("#cs").show();
      $("#jsrpt").show();
    }
    event.preventDefault();
  })
});
