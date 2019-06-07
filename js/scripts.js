$(function(){
  var age;
  var lvl;
  var obj;
  var eg;
  var displn;



  $("#age").submit(function(event){
    age = parseInt($("input#age").val());

    if (age <8){
      $(".surv").hide();
      $(".lang").hide();
      alert("Go enjoy childhood a little longer instead, soon you'll miss naps!");
    } else {
      $(".surv").show();
      $("#age").hide();
    }
    event.preventDefault();
  })

  $(".surv").submit(function(event){
    lvl = $("#lvl").val();
    obj = $("#obj").val();
    eg = $("#eg").val();

    if (eg == 3) {
      $("#pol").show();
      $("#htm").hide();
      $("#cs").hide();
      $("#jsrpt").hide();
    } else if (lvl== 1){
      $("#htm").show();
      $("#cs").hide();
      $("#jsrpt").hide();
      $("#pol").hide();
    } else if (lvl ==3 && eg ==2 ){
      $("#htm").hide();
      $("#cs").hide();
      $("#jsrpt").show();
      $("#pol").hide();
    } else if (lvl ==1, 2 && obj ==1){
      $("#htm").show();
      $("#cs").hide();
      $("#jsrpt").hide();
      $("#pol").hide();
    } else if (lvl ==2, 3 && obj ==2){
      $("#htm").hide();
      $("#cs").show();
      $("#jsrpt").hide();
      $("#pol").hide();
    } else {
      $("#htm").hide();
      $("#cs").hide();
      $("#jsrpt").show();
      $("#pol").hide();
    }
    event.preventDefault();
//it doesn't seem to want to run the radio code
    $(".radio").submit(function(event){
      var radio =parseInt($("input:radio[name=displn]:checked").val());
      if (radio ==1) {
        $("#displn1").show("#displn1")
      } else {
        $("#displn2").show("#displn2")
      }

      event.preventDefault();
    })

    //moved radio into this function to see if that would fix it, it did not.

  })
});
