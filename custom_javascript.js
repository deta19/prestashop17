/* fix gb pixel product not reloading viewcontent*/
prestashop.on('updatedProduct', function(params) {
	var lang = $('html').attr('lang').toUpperCase();
	var the_content_name = $('h1.product-detail-name').text().toUpperCase() + ' (' + lang + ')';
	var prod_id = $('#product_page_product_id').val();
	var prod_price = $('.current-price span').attr('content');
	var prod_curency = $('[itemprop="priceCurrency"]').attr('content');
	
var combinations = $('.product-variants-item');
var contents_comb = [];

	if ( combinations.length > 0 ) {
		combinations.each(function(combination_index) {
			label = $(this).find('.control-label').text();
			value = $(this).find('.form-control-select.choose option:selected').attr('title');
			if (value !== undefined ) {
				contents_comb.push(label+' '+value); 

			}
		});
	}

	fbq('track', 'ViewContent', {
		content_type: 'product',
		content_name: the_content_name,
		contents: contents_comb,
		content_ids: [prod_id],
		value: prod_price,
		currency: prod_curency,
	 });
});
