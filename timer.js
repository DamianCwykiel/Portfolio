//zegar

function odliczanie()
	{
		var dzisiaj = new Date();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
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


	
	
			
			
			
			
	