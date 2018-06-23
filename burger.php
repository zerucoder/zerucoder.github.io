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
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.js" type="text/javascript"></script>
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
                            <li><a href="AboutUs.php">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
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
                                            <li class="sel"><img src="images/hamburger-32.png"><a href="burger.php">Burger</a></li>
                                            <li><img src="images/fries-32.png"><a href="fries.php">Fries</a></li>
                                            <li><img src="images/pint-32.png"><a href="drinks.php">Drinks</a></li>
                                        </ul>
                                </div>
                                </div>
                        </div>
                </div>
        </div>	
    


<div class="container">
            <div class="row">

<?php
//List products from database
$results = $mysqli_conn->query("SELECT product_name, product_desc, product_code, product_image, product_price FROM products_list where product_desc='burger'");
//Display fetched records as you please

$products_list =  '<ul class="products-wrp">';

while($row = $results->fetch_assoc()) {
$products_list .= <<<EOT
<div class="col-md-4">
<form class="form-item">
 <div class="box">       
<h4>{$row["product_name"]}</h4>
<div><img src="images/burger/{$row["product_image"]}" height="260px" width="260px"></div>
<div><h4>{$currency} {$row["product_price"]}</h4><div>
<div class="item-box">
    <div>
    <label class="qty">Qty :
   <select name="product_qty">
	<option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</label>
	</div>
	<div>
        <label class="size">Size : 
        <select name="product_size">
	<option value="Sm">SMALL</option>
    <option value="Md">MEDIUM</option>
    <option value="Lg">LARGE</option>
    </select></label>
	</div>
	
	
    <input name="product_code" type="hidden" value="{$row["product_code"]}">
    <button class="btn btn-default" type="submit">Add to Cart</button>
</div>
  </div>  
</form>
    </div>
    </div>
</div>
EOT;

}
$products_list .= '</ul></div>';

echo $products_list;
?>
            
</body>
</html>