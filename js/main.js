$(document).ready(function() {

$(function() {
  if ($.browser.MSIE && $.browser.version.substr(0,1)<7)
  {
    $('li').has('ul').mouseover(function() {
      $(this).children('ul').css('visibility','visible');
    }).mouseout(function() {
      $(this).children('ul').css('visibility','hidden');
    })
  }  
});

/* mobile */
$('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
$("#menu-trigger").on("click", function() {
  $("#menu").slideToggle();
});

// iPad
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) $('#menu ul').addClass('no-transition');


//toggle animal description
  $(function() {
    $('#animalDesc').hide();
    $('#animalLink').hide();
  });

  $('#animal').click(function() {
   $('#animalDesc').slideToggle(1000);
   $('#animalLink').slideToggle(1000);
  });

//toggle accordian description
  $(function() {
    $('#accordianDesc').hide();
    $('#accordianLink').hide();
  });

  $('#accordian').click(function() {
    $('#accordianDesc').slideToggle(1000);
    $('#accordianLink').slideToggle(1000);
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