<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<?php 

if(!isset($_SESSION["sess_user"])){
	header("location:login.php");
} else {
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Review Your Cart Before Buying</title>
<link href="style/style.css" rel="stylesheet" type="text/css">
<script src="js/jquery-3.1.1.js" type="text/javascript"></script>
</head>
<body>
<h3 style="text-align:center">Review Your Cart Before Buying</h3>
<center><h2>Welcome, <?=$_SESSION['sess_user'];?>! <a href="logout.php">Logout</a></h2></center>
<?php
if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){
	$total 			= 0;
	$list_tax 		= '';
	$cart_box 		= '<ul class="view-cart">';

	foreach($_SESSION["products"] as $product){ //Print each item, quantity and price.
		$product_name = $product["product_name"];
		$product_qty = $product["product_qty"];
		$product_price = $product["product_price"];
		$product_code = $product["product_code"];
                $product_size = $product["product_size"];
                if($product_size=='M')
                    {
                        $product_price=$product_price+120;
                        
                    }
                    if($product_size=='L')
                    {
                        $product_price=$product_price+200;
                     
                    }
                    
                    if($product_size=='Md')
                    {
                        $product_price=$product_price+35;
                    
                    }
                    if($product_size=='Lg')
                    {
                        $product_price=$product_price+60;
                        
                    }
                
               $item_price 	= sprintf("%01.2f",($product_price * $product_qty));  // price x qty = total item price
               
   
		$cart_box 		.=  "<li> $product_code &ndash;  $product_name (Qty : $product_qty |  $product_size) <span> $currency. $item_price </span></li>";
		
		$subtotal 		= ($product_price * $product_qty); //Multiply item quantity * price
		$total 			= ($total + $subtotal); //Add up to total price
	
           
                }
        
	
	$grand_total = $total ; //grand total
	
	foreach($taxes as $key => $value){ //list and calculate all taxes in array
			$tax_amount 	= round($total * ($value / 100));
			$tax_item[$key] = $tax_amount;
			$grand_total 	= $grand_total + $tax_amount; 
	}
	
	foreach($tax_item as $key => $value){ //taxes List
		$list_tax .= $key. ' '. $currency. sprintf("%01.2f", $value).'<br />';
	}
	
	
	
	//Print Shipping, VAT and Total
	$cart_box .= "<li class=\"view-cart-total\">  $list_tax <hr>Payable Amount : $currency ".sprintf("%01.2f", $grand_total)."</li>";
	$cart_box .= "</ul>";
	
	echo $cart_box;
}else{
	echo "Your Cart is empty";
}
?>
</body>
</html>
<?php
}
?>