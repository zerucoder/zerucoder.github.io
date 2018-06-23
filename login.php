<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<!doctype html>
<html>
<head>
<title>Login</title>
<link href="style/bootstrap.css" rel="stylesheet" type="text/css"/>
<link href="style/font-awesome.css" rel="stylesheet" type="text/css"/>
<link href="style/bill.css" rel="stylesheet" type="text/css"/>
</head>
<body>

    <form action="" method="POST">
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-6 reg">
<h3>Login</h3>
<p><a href="register.php" class="exist">Register Now</a></p>

<input type="text" name="user" class="form-control" placeholder="Username" required="required">
<input type="password" name="pass" class="form-control" placeholder="Password" required="required">


                </div>
                <input type="submit" class="bt-def" name="submit" value="Submit">
                <div class="col-md-6 ">
                    <div class="bill-sec">
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
	
	
	echo "<h3><u>Order</u></h3>";
	//Print  VAT and Total
	$cart_box .= "<li class=\"view-cart-total\"><hr>  $list_tax <hr>Payable Amount : $currency ".sprintf("%01.2f", $grand_total)."</li>";
	$cart_box .= "</ul>";
	
	echo $cart_box;
}else{
	echo "<h4 class=\"cart-empty\">Your Cart is empty</h4>";
}
?>
                       
                    </div>
                </div>
            </div>
            </div>
    </div>
        </form>
<?php
if(isset($_POST["submit"])){

if(!empty($_POST['user']) && !empty($_POST['pass'])) {
	$user=$_POST['user'];
	$pass=$_POST['pass'];

	$con=mysqli_connect('localhost','root','') or die(mysql_error());
	mysqli_select_db($con,'zeru') or die("cannot select DB");

	$query=mysqli_query($con,"SELECT * FROM register WHERE usr='".$user."' AND psd='".$pass."'");
	$numrows=mysqli_num_rows($query);
	if($numrows!=0)
	{
	while($row=mysqli_fetch_assoc($query))
	{
	$dbusername=$row['usr'];
	$dbpassword=$row['psd'];
	}

	if($user == $dbusername && $pass == $dbpassword)
	{
	session_start();
	$_SESSION['sess_user']=$user;

	/* Redirect browser */
	header("Location: onlinepay.php");
	}
	} else {
	echo "Invalid username or password!";
	}

} else {
	echo "All fields are required!";
}
}
?>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script src="js/jquery-3.1.1.js" type="text/javascript"></script>
</body>
</html>