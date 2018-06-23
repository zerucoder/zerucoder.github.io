<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
        <title>Details</title>
        <link href="style/font-awesome.css" rel="stylesheet" type="text/css"/>
        <link href="style/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="style/bill.css" rel="stylesheet" type="text/css"/>
        <script>
            function funct(){
              pay.style.visibility="visible";  
            }
        </script>
        <script type="text/javascript">
  
</script>

        <script src="js/jquery-3.1.1.js" type="text/javascript"></script>
        <script src="js/bootstrap.js" type="text/javascript"></script>
</head>
<body>


<form action="" method="POST">
<div class="Bill">
 
        <div class="container">
            <div class="row">
               
                <div class="col-md-8">
                <h2>Billing Details</h2>
                <a href="login.php" class="exist">Existing User ?</a>
                <div class="col-md-6">
                    <input type="text" name="fname" class="form-control" placeholder="First Name" required="required">
                    <input type="text" name="email" class="form-control" placeholder="Email Address" required="required">
                </div>
                <div class="col-md-6">
                    <input type="text" name="lname" class="form-control" placeholder="Last Name" required="required">
                    <input type="text" name="phone" class="form-control" placeholder="Phone" required="required">
                </div>
                <div class="col-md-12">
                    <select class="form-control" name="country" required="required">
                            <option value="Ind">India</option>
                            <option value="USA">USA</option>
                            <option value="Aus">Australia</option>
                        </select>
                    <input type="text" name="addr" class="form-control" placeholder="Address" required="required">
                    <input type="text" name="city" class="form-control" placeholder="Town/City" required="required">
                    
                    </div>
                <div class="col-md-6">
                    <input type="text" name="state" class="form-control" placeholder="State" required="required">
                </div>
                <div class="col-md-6">
                    <input type="text" name="pin" class="form-control" placeholder="ZIP Code" required="required">
                </div>
                 <label class="crt">Create User</label>
                <div class="col-md-12 reg">
                   
                    <input type="text" name="usr" class="form-control" placeholder="Username" required="required">
                    <input type="password" name="psd" class="form-control" placeholder="Password" required="required">
                   
                </div>
                 <input type="submit" class="bt-def" name="sub1" onclick="funct()" id="sub" value="Submit">
                 
            </div>
                
                <div class="col-md-4 ">
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
	
	
	echo "<h3 class=\"bill-hed\">Bill</h3>";
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
if(isset($_POST["sub1"])){

if(!empty($_POST['usr']) && !empty($_POST['psd'])) {
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $country=$_POST['country'];
    $addr=$_POST['addr'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    $pin=$_POST['pin'];
        $usr=$_POST['usr'];
	$psd=$_POST['psd'];

	$con=mysql_connect('localhost','root','') or die(mysql_error());
	mysql_select_db('zeru') or die("cannot select DB");

	$query=mysql_query("SELECT * FROM register WHERE usr='".$usr."'");
	$numrows=mysql_num_rows($query);
	if($numrows==0)
	{
	$sql="INSERT INTO register(`fname`, `lanme`, `email`, `phone`, `country`, `addr`, `city`, `state`, `pin`, `usr`, `psd`) VALUES('$fname','$lname','$email','$phone','$country','$addr','$city','$state','$pin','$usr','$psd')";

	$result=mysql_query($sql);


	if($result){
	echo "Account Successfully Created";
        /* Redirect browser */
	header("Location: login.php");
	} else {
	echo "Failure!";
	}

	} else {
	echo "That username already exists! Please try again with another.";
	}

} else {
	echo "All fields are required!";
}
}
?>
</body>
</html>