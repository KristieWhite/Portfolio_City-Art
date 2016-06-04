$(document).ready(function() {

//toggle animal description
  $(function() {
    $('#animalDesc').hide();
    $('#animalLink').hide();
  });

  $('#animal').click(function() {
   $('#animalDesc').slideToggle(1000);
   $('#animalLink').slideToggle(1000);
  });

//toggle accordion description
  $(function() {
    $('#accordionDesc').hide();
    $('#accordionLink').hide();
  });

  $('#accordion').click(function() {
    $('#accordionDesc').slideToggle(1000);
    $('#accordionLink').slideToggle(1000);
  });

  //toggle faux restaurant description
  $(function() {
    $('#fauxDesc').hide();
    $('#fauxLink').hide();
  });

  $('#faux').click(function() {
    $('#fauxDesc').slideToggle(1000);
    $('#fauxLink').slideToggle(1000);
  });

  //toggle parent-teacher
  $(function() {
    $('#tpConnectionDesc').hide();
    $('#tpConnectionLink').hide();
  });

  $('#tpConnection').click(function() {
    $('#tpConnectionDesc').slideToggle(1000);
    $('#tpConnectionLink').slideToggle(1000);
  });

  //toggle skinny ties
  $(function() {
    $('#skinnyTiesDesc').hide();
    $('#skinnyTiesLink').hide();
  });

  $('#skinnyTies').click(function() {
    $('#skinnyTiesDesc').slideToggle(1000);
    $('#skinnyTiesLink').slideToggle(1000);
  });

  //toggle etsy whiskey
  $(function() {
    $('#etsyWhiskeyDesc').hide();
    $('#etsyWhiskeyLink').hide();
  });

  $('#etsyWhiskey').click(function() {
    $('#etsyWhiskeyDesc').slideToggle(1000);
    $('#etsyWhiskeyLink').slideToggle(1000);
  });

    

//NASA daily pic api
  var url = "https://api.nasa.gov/planetary/apod?api_key=oLSX9xRQet6hnjyiEoTsRhtbNtr6cw9Ikl5yx0mr";

  $.ajax({
    url: url,
    success: handleResult
  });
  
  function handleResult(result){
    if("copyright" in result) {
      $("#copyright").text("Image Credits: " + result.copyright);
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain");
    }
    
    if(result.media_type == "video") {
      $("#apod_img_id").css("display", "none"); 
      $("#apod_vid_id").attr("src", result.url);
    }
    else {
      $("#apod_vid_id").css("display", "none"); 
      $("#apod_img_id").attr("src", result.url);
    }
    $("#apod_explanation").text(result.explanation);
    $("#apod_title").text(result.title);
  }


});//document ready