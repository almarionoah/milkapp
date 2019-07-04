var grand_total;
var checkOut = () => {
 if(cart.length > 0)
 {
 	printQuotation();
	$("#products_selection").hide();
	$("#print_selection").show(); 
 }	
 else
 {
	 $("#empty_cart_alert_check_out").show();
 }
};


var printQuotation = () => {
	var template = '<div id="quote_header"><p id="company_details"><strong>Company Name</strong><br/>Address line 1<br/>Address line 2<br/>City<br/>Phone<br/>Fax<br/>E-mail<br/></p><p id="heading"><h2>Check Out Quotation</h2></p><p id="quote_details">Date:<br />Quote Number:<br/>Valid Period:<br/></p></div><table id="quote" class="table table-striped"><tr><th>Item Number</th><th>Description</th><th>Item Price</th><th>Quantity</th><th>Sub-Total</th></tr>';
	var itemNumber = 1;
	grand_total = 0;
	cart.forEach(item =>{
		template += '<tr><td>'+itemNumber+'</td><td>'+ item["product_name"] + ' ' +  item["product_size"] + '</td><td>R' + item["product_price"].toFixed(2) + '</td><td>' + item["quantity"] + '</td><td>R' + item["total"].toFixed(2) + '</td></tr>';
		itemNumber++;
		grand_total += item["total"];
	});	
	template += '<td></td><td></td><td></td><td><strong>Grand Total:</strong></td><td>R'+ grand_total.toFixed(2) +'</td></table>';
	$("#print_selection").append(template);
	$("#print_selection").append('<button id="purchaseButton" class="btn btn-success" style="position: fixed;top: 60%;right: 15%;border-radius: 50%;max-height: 200px;box-shadow: 10px 10px;font-size" 1vw;color: black;" onclick="paymentGateway()">Proceed to Payment</button>');
	
};

var testPrint = () => {
 cart = [{
      product_id: 0,
      product_name: "milk sachet",
      product_size: "1L",
	  product_price: 12.00
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
    }]	;
	printQuotation();
};

