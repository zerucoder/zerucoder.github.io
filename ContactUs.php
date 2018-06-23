<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$db = 'zeru';

$dbconn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db($db);


if (isset($_POST["sss"]))
{
    $fname   = $_POST['txtfname'];
    $lname  = $_POST['txtlname'];
    $txtmail = $_POST['txtmail'];
    $txtsub    = $_POST['txtsub'];
    $txtmsg       = $_POST['txtmsg'];
    
    
 
    $query="INSERT INTO `message`(`fname`, `lname`, `email`, `subject`, `message`) VALUES ('$fname','$lname','$txtmail','$txtsub','$txtmsg')";
   if(mysql_query($query))
 {
echo "<script>alert('INSERTED SUCCESSFULLY');</script>";
}
else
 {
 echo "<script>alert('FAILED TO INSERT');</script>";
 }
 
}
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
<script type="text/javascript">
$(window).load(function() {
	$(".loader").fadeOut("slow");
})
</script>
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
 
    <div class="loader"></div>
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
                            <li><a href="AboutUs.php">About Us</a></li>
                        <li class="select"><a href="#">Contact Us</a></li>
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
    <div class="msg">
        <div class="container">
            <div class="row">
                <h2>Contact Us</h2>
                <p>We are a second-generation family business established in 1989</p>
                <div class="col-md-9">
                    <h4 class="mg0">Leave Us a Message</h4>
                    
                    <p class="mg">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu,<br />
                    dignissim eros. Nulla auctor lacinia enim id mollis.</p>
                </div>
                <div class="col-md-3">
                    <h4 class="ad0">Our Address</h4>
                    
                    <p class="ad">17 Princess Road Tamil Nadu, Greater<br /> State NW1 8JR, TN  Support<br /> (+91) 4424632457
                      <br /> E-mail: info@foodfreak.com
                      
                       
                    </p>
                </div>
                  <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                <div class="txt">
                    <div class="col-md-4">
                        <label>First Name *</label>
                        <input type="text" name="txtfname" class="form-control clr">
                        <label  class="sec">Your Email *</label>
                        <input type="text" name="txtmail" class="form-control clr">
                    </div>
                    <div class="col-md-4">
                        <label>Last Name *</label> 
                        <input type="text" name="txtlname" class="form-control clr">
                        <label class="sec">Subject </label>
                        <input type="text" name="txtsub" class="form-control clr">
                    </div>
                    <div class="col-md-4">
                        <div class="address">
                            <h3>Opening Hours</h3>
                        </div>
                        <table class="week" width="100%">
                            
                            <tr>
                                <td>Monday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>6-12PM</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>6-12PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
                   
                <div class="txtar">
                <div class="col-md-8">
                    <label>Message</label>
                    <textarea class="form-control" name="txtmsg" rows="5"></textarea>
                    <input type="submit"class="btn" value="Send Message" name="sss">
                </div>
                   
                <div class="col-md-4">
                    <div class="car">
                    <h3>Careers</h3>
                    <p>If you are interested in employment opportunities at Pizzaro, please email us: contact@yourstore.com</p>
                </div>
                </div>
                    
                </div>
                 </form>
            </div>
        </div>
    </div>
    
</body>
</html>