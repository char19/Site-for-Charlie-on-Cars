$(document).ready(function(){
    $("#title").click(function(){
    	if ($(this).hasClass("open")) { // let's close tabs
	    	$(this).removeClass("open").addClass("closed");
	        $("#tabs").hide();
        } else if ($(this).hasClass("closed")) { // let's open tabs
	    	$(this).removeClass("closed").addClass("open");
	        $("#tabs").show();
        }
    });
});