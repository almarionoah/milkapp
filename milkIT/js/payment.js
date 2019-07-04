var paymentGateway = () =>{
	var template = '<h2>A charge of R' +grand_total.toFixed(2) + ' will be placed</h2><form id="form"><label for="card_number">Card Number:</label><input type="text" placeholder="Card Number" id="card_number"><br/><br/><label for="expiry_date">Expiry Date:</label><input type="month" id="expiry_date"><br/><br/><label for="cvv">cvv (3 digits at the back of card):</label><input type="text" placeholder="cvv" id="cvv" size="3"><br/><br/><label for="email">E-mail:</label><input type="email" placeholder="E-mail" id="email" name="email"><br/><br/><input type="submit" id="submit" value="Place Order" class="btn btn-success" onclick="window.open(\'https://www.freecodecamp.com/email-submit\')"/><br/><br/><img src="../images/credit_providers.png" alt="credit_provider_images" style="max-width: 200px;max-height:200px;"></form>';
	$("#paymentPage").append(template);
	$("#print_selection").hide();
	$("#paymentPage").show();
};