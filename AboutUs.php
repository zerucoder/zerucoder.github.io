<?php
session_start(); //start session
include("config.inc.php"); //include config file
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Ajax Shopping Cart</title>
<link href="style/style.css" rel="stylesheet" type="text/css">
<link href="style/style_1.css" rel="stylesheet" type="text/css"/>
<link href="style/pizza.css" rel="stylesheet" type="text/css"/>
<link href="style/bootstrap.css" rel="stylesheet" type="text/css"/>
<link href="style/font-awesome.css" rel="stylesheet" type="text/css"/>
<link href="style//flexslider.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.js" type="text/javascript"></script>
<script src="js/jquery.flexslider.js" type="text/javascript"></script>
<script>
$(document).ready(function(){	
		$(".form-item").submit(function(e){
			var form_data = $(this).serialize();
			var button_content = $(this).find('button[type=submit]');
			button_content.html('Adding...'); //Loading button text 

			$.ajax({ //make ajax request to cart_process.php
				url: "cart_process.php",
				type: "POST",
				dataType:"json", //expect json value from server
				data: form_data
			}).done(function(data){ //on Ajax success
				$("#cart-info").html(data.items); //total items in cart-info element
				button_content.html('Add to Cart'); //reset button text to original text
				alert("Item added to Cart!"); //alert user
				if($(".shopping-cart-box").css("display") == "block"){ //if cart box is still visible
					$(".cart-box").trigger( "click" ); //trigger click to update the cart box.
				}
			})
			e.preventDefault();
		});

	//Show Items in Cart
	$( ".cart-box").click(function(e) { //when user clicks on cart box
		e.preventDefault(); 
		$(".shopping-cart-box").fadeIn(); //display cart box
		$("#shopping-cart-results").html('<img src="images/ajax-loader.gif">'); //show loading image
		$("#shopping-cart-results" ).load( "cart_process.php", {"load_cart":"1"}); //Make ajax request using jQuery Load() & update results
	});
	
	//Close Cart
	$( ".close-shopping-cart-box").click(function(e){ //user click on cart box close link
		e.preventDefault(); 
		$(".shopping-cart-box").fadeOut(); //close cart-box
	});
	
	//Remove items from cart
	$("#shopping-cart-results").on('click', 'a.remove-item', function(e) {
		e.preventDefault(); 
		var pcode = $(this).attr("data-code"); //get product code
		$(this).parent().fadeOut(); //remove item element from box
		$.getJSON( "cart_process.php", {"remove_code":pcode} , function(data){ //get Item count from Server
			$("#cart-info").html(data.items); //update Item count in cart-info
			$(".cart-box").trigger( "click" ); //trigger click on cart-box to update the items list
		});
	});

});
</script>
<script type="text/javascript">
    $(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
  </script>

</head>
<body>
<div class="Banner">
<div class="container">
<div class="row">
        <div class="col-md-4">
                <div class="logo">
                        <a href="index.php"><img src="images/pizza.png"></a> 
                        <a href="index.php"><h1>Food Freak</h1></a>
                </div>
        </div>

        <div class="col-md-5">
                <div class="menu">
                        <ul class="menu-pane wow bounceInUp">
                            <li><a href="index.php">Home</a></li>
                        <li class="select"><a href="#">About Us</a></li>
                        <li><a href="ContactUs.php">Contact Us</a></li>
                        </ul>
                </div>
            
        </div>
    <div class="col-md-3">
        
       
       <a href="#" class="cart-box" id="cart-info" title="View Cart">
                   
<?php 
if(isset($_SESSION["products"])){
	echo count($_SESSION["products"]); 
}else{
	echo 0; 
}
?>
</a>
     <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>     
     </div>
     <div class="shopping-cart-box">
        <a href="#" class="close-shopping-cart-box" >&times;</a>
<h3 class="cart-header">Food Cart</h3>
    <div id="shopping-cart-results">
    </div>
</div>
    
</div>
</div>
</div>
    <div class="Banner-2">
                <div class="container">
                        <div class="row">
                                <div class="col-md-12">

                                <div class="menu-2">

                                        <ul class="menu-pane-2 wow bounceInLeft">
                                            <li><img src="images/pizza-32.png"><a href="pizza.php">Pizza</a></li>
                                            <li><img src="images/hamburger-32.png"><a href="burger.php">Burger</a></li>
                                            <li><img src="images/fries-32.png"><a href="fries.php">Fries</a></li>
                                            <li><img src="images/pint-32.png"><a href="drinks.php">Drinks</a></li>
                                        </ul>
                                </div>
                                </div>
                        </div>
                </div>
        </div>
    <div class="AbtImg">
        <img src="images/About Us.jpg" alt="" width="100%"/>
    </div>
    <div class="img-con">
    <div class="container">
        <div class="row">
            <div class="header">
               <h2>About Us</h2>
            <p>We are a second-generation family business established in 1989</p> 
            </div>
        
        
        <div class="col-md-4">
            
            <img src="images/ab1.jpg" alt="" width="370px" height="280px"/>
            <h3>Taste Driven</h3>
            <p class="abt">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
        </div>
        <div class="col-md-4">
            <img src="images/ab2.jpg" alt="" width="370px" height="280px"/>
            <h3>Made the Quality Way</h3>
            <p class="abt">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.<br />

Be Bold // Do Everything Better<br />
Be Open // Work Stronger Together</p>
        </div>
        <div class="col-md-4">
            <img src="images/ab3.jpg" alt="" width="370px" height="280px"/>
            <h3>Family of Creators</h3>
            <p class="abt">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
        </div>
     </div>
        </div>
    </div>
    <div class="piz">
        <img src="images/aboutpiz.jpg" width="1360px" height="296">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>Pizza Basic</h3> 
                </div>
                <div class="col-md-4">
                    <p>
                        Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.
                    </p>
                </div>
                <div class="col-md-4">
                    <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                </div>
            </div>
        </div>
   
    </div>
   


