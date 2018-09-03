//zegar

function odliczanie()
	{
		let dzisiaj = new Date();
		
		let godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		let minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		let sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}
	
	//menu
	
	/*
	$( function() {
        $( ".rectangle" ).draggable();
      } );
    */  
  $( function() {
    let animationButton = true;
    $( ".hamburger" ).on( "click", function() {
      if ( animationButton ) {
        $( ".site-menu" ).animate({
         marginRight: "100%",
	backgroundColor: "white",
	opacity:"0.7",
	},700);
      } else {
        $( ".site-menu" ).animate({
	backgroundColor:"blue",
           marginRight: "-20%",
	opacity:"0.5",
        }, 700);
      }
      animationButton = !animationButton;
    });
  } );
  
  function batteryCharger() {
		 let a;
		  a = document.getElementById("batteryCharger");
		  a.innerHTML = "&#xf244;";
		  setTimeout(function () {
		      a.innerHTML = "&#xf243;";
		    }, 1000);
		  setTimeout(function () {
		      a.innerHTML = "&#xf242;";
		    }, 2000);
		  setTimeout(function () {
		      a.innerHTML = "&#xf241;";
		    }, 3000);
		  setTimeout(function () {
		      a.innerHTML = "&#xf240;";
		    }, 4000);
		}
		batteryCharger();
		setInterval(batteryCharger, 5000);
  

	


	
	
			
			
			
			
	