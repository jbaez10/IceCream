// JavaScript Document

<!--The javascript that changes the image when the text is clicked.-->
    $( document ).ready(function() {
		
		$("#vanilla").on("click", function(){   
            $("#image").attr('src', "img/flavors/vanilla.png");
        });
		
		$("#greentea").on("click", function(){   
            $("#image").attr('src', "img/flavors/greentea.png");
        });

        $("#chocolate").on("click", function(){             
            $("#image").attr('src', "img/flavors/chocolate.png");
        });

        $("#coconut").on("click", function(){   
            $("#image").attr('src', "img/flavors/coconut.png");
        });
        
        $("#strawberry").on("click", function(){   
            $("#image").attr('src', "img/flavors/strawberry.png");
        });
		
		$("#mango").on("click", function(){   
            $("#image").attr('src', "img/flavors/mango.png");
        });
		
		$("#cookie").on("click", function(){   
            $("#image").attr('src', "img/flavors/cookie.png");
        });
		
		$("#redbean").on("click", function(){   
            $("#image").attr('src', "img/flavors/redbean.png");
        });
		
		$("#cookiescream").on("click", function(){   
            $("#image").attr('src', "img/flavors/cookiescream.png");
        });
		
		$("#mint").on("click", function(){   
            $("#image").attr('src', "img/flavors/mintchip.png");
        });

    });