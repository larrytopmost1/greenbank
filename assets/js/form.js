// $(function() {
(function($){

	$(document).ajaxStart(function() {
		$('.loading').show();
	}).ajaxStop(function() {
		$('.loading').hide();
	})


	$(document).on('submit', '.form-ajax', function(e) {

		e.preventDefault();

		form = $(this);
		url = form.prop('action');
		type = form.prop('method');
		enctype = form.prop('enctype');

		button = form.find('button[type=submit]');
		htmlText = button.html();
		button.prop('disabled', true).text(button.data('ajax')+'...');
		
		formId = form.prop('id');
		var formData = new FormData(document.getElementById(formId));

		$.ajax({
			// beforeSend : alert('About to send to server - FormData'),
			url : url,
			type : type,
			enctype: enctype,
			processData: false,
			contentType : false,
			data : formData,
			success : function(result) {
				$.globalEval(result);
			}
		}).done(function() {
			button.prop('disabled', false).text(htmlText);
		}).error(function() {
			toastr('Error connecting to server..');
		})

	})

	$.pageRefresh = function(miliseconds) {

		var refresh = function() {
			alert('Page will be refreshed');
			return location.href = location.href;
		}
		window.setTimeout(refresh, miliseconds);

	}

})(this.jQuery);
// })
