// This is where it all goes :)
$(document).ready(function(){

  //hiding all content
  $("#bio-content").hide();
  $("#proj-content").hide();
  $("#prof-content").hide();

  //Show bio-content
  $("#bio-toggle").click(function(){
    $("#landing-content").hide();
    $("#bio-content").show();
    $("#proj-content").hide();
    $("#prof-content").hide();
  });

//Show proj-content
  $("#proj-toggle").click(function(){
    $("#landing-content").hide();
    $("#proj-content").show();
    $("#bio-content").hide();
    $("#prof-content").hide();
  });

//Show prof-content
  $("#prof-toggle").click(function(){
    $("#landing-content").hide();
    $("#prof-content").show();
    $("#proj-content").hide();
    $("#bio-content").hide();
  });
});
