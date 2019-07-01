  var products = [
    {
      product_id: 0,
      product_name: "milk sachet",
      product_size: "1L",
	  product_price: 12.50
    },
    {
      product_id: 1,
      product_name: "milk bottle",
      product_size: "2L",
	  product_price: 16.00
    },
    {
      product_id: 2,
      product_name: "milk bottle",
      product_size: "250 ml",
	  product_price: 6.00
    },
    {
      product_id: 3,
      product_name: "milk bottle",
      product_size: "500ml",
	  product_price: 8.00
    },
    {
      product_id: 4,
      product_name: "cream",
      product_size: "2L",
	  product_price: 22.00
    },
    {
      product_id: 5,
      product_name: "cream",
      product_size: "1L",
	  product_price: 18.00
    },
    {
      product_id: 6,
      product_name: "cream",
      product_size: "500ml",
	  product_price: 10.00
    },
    {
      product_id: 7,
      product_name: "cream",
      product_size: "250ml",
	  product_price: 6.50
    },
    {
      product_id: 8,
      product_name: "juice",
      product_size: "250ml",
	  product_price: 8.99
    },
    {
      product_id: 9,
      product_name: "juice",
      product_size: "500ml",
	  product_price: 11.00
    },
    {
      product_id: 10,
      product_name: "juice",
      product_size: "1L",
	  product_price: 15.00
    },
    {
      product_id: 11,
      product_name: "juice",
      product_size: "2L",
	  product_price: 20.00
    },
    {
      product_id: 12,
      product_name: "juice",
      product_size: "5L",
	  product_price: 28.00
    },
    {
      product_id: 13,
      product_name: "yogurt",
      product_size: "2L",
	  product_price: 25.00
    },
    {
      product_id: 14,
      product_name: "yogurt",
      product_size: "1L",
	  product_price: 18.50
    },
    {
      product_id: 15,
      product_name: "yogurt",
      product_size: "500ml",
	  product_price: 15.00
    },
    {
      product_id: 16,
      product_name: "yogurt",
      product_size: "250ml",
	  product_price: 9.00
    },
    {
      product_id: 17,
      product_name: "turtles",
      product_size: "1.2L",
	  product_price: 40.00
    }
  ];
var cart = [];
var addToCart = (id) =>{
  var clickedButton = id + "_btnCart";
  var specific_product_input = id+ "_txtQuantity";
  var quantity = $("#" + specific_product_input).val(); 
  if((Number(quantity)!== undefined) && (Number(quantity)!== NaN) && (Number(quantity)!== null) && (Number(quantity) > 0))
  {
	if(!($("#" + clickedButton).is(":disabled")))
	{  
	products.forEach(product =>{
			if(product["product_id"] == id)
			{
			  addItem(product,quantity);
			}
		});
		var buttonClass = "btnCart_"+id;
		toggleDisableCartButton(buttonClass,clickedButton);
    } 
  /*if(!($("#" + specific_product_input).is(":readonly")))
  {
	  $("#" + specific_product_input).attr("readonly");
  }*/
  $("#success_alert_add").show();
  updateCheckOutButton();
  
 }
 else{
	 $("#quantity_alert").show();
 } 
};

var removeFromCart = (id) =>{
	var clickedButton = id + "_btnCart";
	var buttonClass = "btnCart_"+id;	
	if(cart.length > 0)
	{
		for(var i=0;i<cart.length;i++)
		{
			var item = cart[i];
			if(item["product_id"] == id)
			{
				cart.splice(i,1);
			}
			break;
		}
		toggleDisableCartButton(buttonClass,clickedButton);
		$("#success_alert_remove").show();
		updateCheckOutButton();
	}
	else{
		$("#empty_cart_alert").show();
	}
};


var toggleQuantity = product => {
  var specific_product_label = product + "_label";
  var specific_product_input = product + "_txtQuantity";
  var specific_product_button = product + "_btnCart";
  if ($("#" + specific_product_label).is(":hidden")) {
    $("#" + specific_product_label).show();
    $("#" + specific_product_input).show();
    $("#" + specific_product_button).show();
  } else {
    $("#" + specific_product_label).hide();
    $("#" + specific_product_input).hide();
    $("#" + specific_product_button).hide();
  }
};



var closeQuantityAlertBox = () =>{
	$("#quantity_alert").hide();
}

var closeSuccessAddAlertBox = () =>{
	$("#success_alert_add").hide();
}

var closeSuccessRemoveAlertBox = () =>{
	$("#success_alert_remove").hide();
}

var closeEmptyCartAlertBox = () =>{
	$("#empty_cart_alert").hide();
}

var closeEmptyCartAlertBoxCheckOut = () =>{
	$("#empty_cart_alert_check_out").hide();
};
var toggleDisableCartButton = (button,id) =>{
	if(!($("#" + id).is(":disabled")))
	{
	 $("." + button).css("background-color","gray");  
	 	$("#" + id).attr("disabled", "true");
	}
	else{
		$("." + button).css("background-color","#0044cc");  
	 	$("#" + id).prop("disabled", false);
	}
}
var addItem = (item,numberOfItems) => {
    item.quantity = numberOfItems;
	item.total = numberOfItems * item["product_price"];
		cart.push(item);
	};

var updateCheckOutButton = () =>{
	$("#check_out").html('<span class="glyphicon glyphicon-usd"></span><br/>Check Out ('+cart.length+') items');
};



$(document).ready(() => {
   products.forEach(item => {
    var template =
      '<a onclick="toggleQuantity(' +
      item["product_id"] +
      ')"><h3>' +
      item["product_name"] +
      '<br/>'  +
      item["product_size"] +
      '</h3> <img alt="product_image" src=""/><br/><br/></a><label for="quantity" hidden="true" id="' +
      item["product_id"] +
      '_label">Quantity:<input type="number" placeholder="quantity per dozen" name="quantity" hidden="true" id="' +
      item["product_id"] +
      '_txtQuantity" /><input type="button" class="btn-primary btnCart_'+item["product_id"] + '" value="Add to cart" hidden="true" id="' +
      item["product_id"] +
      '_btnCart" onclick="addToCart(' + item["product_id"] +')" /> <a onclick="removeFromCart('+ item["product_id"] +')"><h4 class="glyphicon glyphicon-backward">Undo</h4></a></label>';
    $("#products").append(template);
  });
  $("#products").append('<button type="button" class="btn btn-success" value="Check Out" id="check_out" style="width:200px;height:200px;max-height:10%;max-width:15%;position:fixed;top: 60%;right: 10%;border-radius:50%;color:black;font-size: 1vw;box-shadow: 10px 10px;" onclick="checkOut()"><span class="glyphicon glyphicon-shopping-cart"></span><br/>Check Out <br/>('+cart.length+') items</button>');
});

