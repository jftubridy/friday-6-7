






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

  // $(".surv").submit(function(event){
  //   lvl = $("#lvl").val();
  //   obj = $("#obj").val();
  //   eg = $("#eg").val();
  //
  //   if (eg == 3) {
  //     $("#pol").show();
  //     $("#htm").hide();
  //     $("#cs").hide();
  //     $("#jsrpt").hide();
  //   } else if (lvl ==1 && obj ==1){
  //     $("#htm").show();
  //     $("#cs").hide();
  //     $("#jsrpt").hide();
  //     $("#pol").hide();
  //   } else if (lvl ==2 && obj ==2){
  //     $("#htm").hide();
  //     $("#cs").show();
  //     $("#jsrpt").hide();
  //     $("#pol").hide();
  //   } else {
  //     $("#htm").hide();
  //     $("#cs").hide();
  //     $("#jsrpt").show();
  //     $("#pol").hide();
  //   }


  $(".surv").submit(function(event){
    lvl = $("#lvl").val();
    obj = $("#obj").val();
    eg = $("#eg").val();

    if (eg == 3) {
      $("#pol").addClass("show");
      $("#htm").removeClass("show");
      $("#cs").removeClass("show");
      $("#jsrpt").removeClass("show");
    } else if (lvl ==1 && obj ==1){
      $("#htm").addClass("show");
      $("#cs").removeClass("show");
      $("#jsrpt").removeClass("show");
      $("#pol").removeClass("show");
    } else if (lvl ==2 && obj ==2){
      $("#htm").removeClass("show");
      $("#cs").addClass("show");
      $("#jsrpt").removeClass("show");
      $("#pol").removeClass("show");
    } else {
      $("#htm").removeClass("show");
      $("#cs").removeClass("show");
      $("#jsrpt").addClass("show");
      $("#pol").removeClass("show");
    }

    event.preventDefault();
  });
});
