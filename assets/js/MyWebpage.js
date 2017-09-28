var newTodo;

$("#container").children("li:nth-of-type(odd)").css("background", "#f7f7f7")

$("input[type='text']").keypress(function(pressedObject){//input of type text
	if(pressedObject.which == 13 && $("input").val() != ""){//if you press enter and input is not empty
		newTodo = $("input").val();//get value of input
		console.log(newTodo)

		$("#container").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i> </span> " + newTodo +"<i class='fa fa-check checkMark' aria-hidden='true'></i></li>")
		//$("span").hide(); // hide the spans of newly added li
		$("#container").children("li:nth-of-type(odd)").css("background", "#f7f7f7")//make the odd li's grey

		$("input").val("");//clear the input
	}
})


$("#container").on("click", "li", function(event){
	event.stopPropagation();
	$(this).toggleClass("strike")
	$(this).children("i").toggleClass("checkMark")
	//console.log($(this).html())
})


$("#container").on("click", "span",function(event){//removes the parent element of X when clicked on
	$(this).parent().css("background", "#e74c3c");
	$(this).parent().css("color", "white");

	$(this).parent().fadeOut(500, function(){
		$(this).remove();

		$("#container").children("li:nth-of-type(odd)").css("background", "#f7f7f7")
		$("#container").children("li:nth-of-type(even)").css("background", "white")
	});

	event.stopPropagation();

})


$("h1").on("click", ".fa-caret-up", function(){
	$(this).replaceWith("<i class='fa fa-plus' aria-hidden='true'></i>");
	$("input").slideUp(100);
})



$("h1").on("click", ".fa-plus", function(){
	$(this).replaceWith("<i class='fa fa-caret-up' aria-hidden='true'></i>");
	$("input").show();
});


$('.square').mouseover(function(e) {
		$(this).children("span").toggleClass("hide");
    e.stopPropagation();
}).mouseout(function(e) {
		$(this).children("span").toggleClass("hide");
    e.stopPropagation();
})



var targetPos = $(".topnav").offset().top;//capture the exact position of the #nav
//rather then hardcoding a value, works with all screen sizes also
console.log(targetPos);

$(window).resize(function(){
	 targetPos = $(".topnav").offset().top;
});


$(".topnav").wrap("<div class='nav-placeHolder'></div>");
$(".nav-placeHolder").height($(".topnav").outerHeight());//place holder #nav, so when
//the nav goes out of the flow of the page the transition will be smooth

$(window).scroll(function(){
  var scrollPos = $(this).scrollTop();//captures the position of the scroll


  if(scrollPos>targetPos){
    $(".topnav").addClass("fixed-nav");//removes the content from the flow of the page
  }else{
    $(".topnav").removeClass("fixed-nav");
  }


	// var resumePosTop = $(".resumeContainer").offset().top;
	// var resumePosBottom = $("#example").offset().top;
	// if(scrollPos <resumePosTop || scrollPos>resumePosBottom){
	// }else{
	// 	console.log("Top Position" + resumePosTop);
	// 	console.log("BottomPosition" + resumePosBottom);
	// }

});


$("#resumeJump").click(function (){//scroll jump animation
                $('html, body').animate({
                    scrollTop: $(".resume").offset().top
                }, 1000);
            });

$("#contactsJump").click(function (){//scroll jump animation
                 $('html, body').animate({
						        scrollTop: $("#contactsHeader").offset().top
		   	         }, 1000);
	          });


$(".gridTwoSquare").hover(function(){
	$(this).children().children().children("i").addClass("contactsFocus");
}, function(){

	$(this).children().children().children("i").removeClass("contactsFocus");
});


$(".nav").hover(function(){
	$(this).children("i").addClass("navbarFocus");
}, function(){
	$(this).children("i").removeClass("navbarFocus");
});


var links = ["Tenchoklang@gmail.com",  "linkedin.com/in/tenchoklang" ,"github.com/tenchoklang"];
//when the user resizes the page, makes sure that the h3 tags are either visible or not
$(window).resize(function(){
	if ($(window).width() <= 750){
		$("h3").html("");
	}else{
		for(var i=0; i<3;i++){
			$("h3")[i].innerHTML = links[i];
		}
	}
});

//when the user loads or refreshes the page, makes sure that the h3 tags are either visible or not
$( window ).on( "load", function() {
	if ($(window).width() <= 750){
		$("h3").html("");
	}else{
		for(var i=0; i<3;i++){
			$("h3")[i].innerHTML = links[i];
		}
	}
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



