<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link href="style/onlinepay.css" rel="stylesheet" type="text/css"/>
        <link href="style/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="style/font-awesome.css" rel="stylesheet" type="text/css"/>
        
    </head>
    <body>
        <div class="body-sec">
<div class="container">
<div class="row">
<div class="col-md-4">
<!-- CREDIT CARD FORM STARTS HERE -->
<div class="panel panel-default credit-card-box">
<div class="panel-heading display-table" >
<div class="row display-tr" >
<h3 class="panel-title display-td" >Payment Details</h3>
<div class="display-td" >                            
    <img class="img-responsive pull-right" src="images/cardpay.png">
</div>
</div>                    
</div>
<div class="panel-body">
<div class="row">
<div class="col-xs-12">
<div class="form-group">
<label for="cardNumber">CARD NUMBER</label>
<div class="input-group">
    <input type="tel" id="cardno" class="form-control" placeholder="Valid Card Number" required="required">
<span class="input-group-addon"><i class="fa fa-credit-card"></i></span>
</div>
</div>                            
</div>
</div>s
<div class="row">
<div class="col-md-7">
<div class="form-group">
<label for="cardExpiry"><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
<input 
type="tel" 
class="form-control" 
name="cardExpiry"
placeholder="MM / YY"
autocomplete="cc-exp"
required 
/>
</div>
</div>
<div class="col-md-5 pull-right">
<div class="form-group">
<label for="cardCVC">CV CODE</label>
<input 
type="tel" 
class="form-control"
name="cardCVC"
placeholder="CVC"
autocomplete="cc-csc"
required
/>
</div>
</div>
</div>
<div class="row">
<div class="col-xs-12">
<div class="form-group">
<label for="couponCode">HOLDER NAME</label>
<input type="text" class="form-control" name="couponCode" />
<?php
if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){
$total 			= 0;
$cart_box 		= '<ul class="view-cart">';
foreach($_SESSION["products"] as $product){ //Print each item, quantity and price.
$product_qty = $product["product_qty"];
$product_price = $product["product_price"];
$subtotal 		= ($product_price * $product_qty); //Multiply item quantity * price
$total 			= ($total + $subtotal); //Add up to total price
}
$grand_total = $total ; //grand total
foreach($taxes as $key => $value){ //list and calculate all taxes in array
$tax_amount 	= round($total * ($value / 100));
$tax_item[$key] = $tax_amount;
$grand_total 	= $grand_total + $tax_amount; 
}
//Print Shipping, VAT and Total
$cart_box .= "<li class=\"view-cart-total\">  <hr>Total Amount : $currency ".sprintf("%01.2f", $grand_total)."</li>";
$cart_box .= "</ul>";
echo $cart_box;
}else{
echo "Rs. 0";
}
?>
</div>
</div>                        
</div>
<div class="row">
<div class="col-xs-12">
    <button class="btn btn-success btn-lg btn-block" id="confirm" onclick="funct()" type="submit">Confirm</button>
</div>
</div>
</div>
</div>            
<!-- CREDIT CARD FORM ENDS HERE -->
</div>            
</div>
</div>
</div>
        <script>
          function  funct()
              {
              alert("Payment Success");
              window.location.href="view_cart.php";
              
          }
      
        </script>
</body>
</html>
