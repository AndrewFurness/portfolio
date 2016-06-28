/*==============================================================================*\
	Your Website Name

	Scripts File

	Happy Coding!

	Author: Your Name
	Version: 1.0.0
\*==============================================================================*/
$(document).ready(function() {
    console.log("Ready to go!");

		$("#portfolioButton").click(function(){
			// $("window").scrollTo("#portfolio");

		});
		$('.js-scrolltoid').scrollToID({
			speed: 1000, //expressed in Milliseconds
			offset: 50   //in pixels
		});

    $(".and-menu-button").click(function(){
      $(".and-menu-button").removeClass("active");
      $(this).addClass("active");

      console.log("Click registered!");
    });

    $("#sendButton").click(function(){
      sendButtonClick();
    })



});

function sendButtonClick(){
  var msgName = $("#name").val();
  var msgEmail = $("#email").val();
  var msgNum = $("#pnum").val();
  var msgMessage = $("#msg").val();
  console.log(msgName);
  console.log(msgEmail);
  console.log(msgNum);
  console.log(msgMessage);
}
