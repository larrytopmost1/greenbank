// JavaScript Document
(function($){

	$('#password').keypad({
		backText: 'BCK',
		clearText: 'CLR',
		layout: ['123' + $.keypad.BACK,'456' + $.keypad.CLEAR,'7890'],
		randomiseNumeric: true,
		beforeShow: function(div, inst) { 
			// $('<input type="button" id="keypad-login" class="keypad-key" value="LOGIN">').appendTo(div).click(function() { $('#keypad-form').submit();}); 
			$('<button type="submit" id="keypad-login" class="keypad-key">LOGIN</button>').appendTo(div);
  		}
	})

	$('#keypad-form').submit(function () {
        $this = $(this);
        account_no = $this.find('#account_no');
    	password = $this.find('#password');
    	if($.trim(account_no.val()).length == 0 || $.trim(password.val()).length == 0) {
    		alert('Enter account no. and password');
    		return false;
    	}

		p = $('<input>', {type:'hidden', name:'p', id:'p', value:hex_sha512(password.val())});
		$this.find('#p').length ? $this.find('#p').val(hex_sha512(password.val())) : $this.prepend(p);
		password.val(b64_sha512(password.val()));

		$this.find('#request').val('signin');

		btn = $('#keypad-login');
		btnHtml = btn.html();
		$(document).ajaxStart(function() {
            btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i>');
        }).ajaxStop(function() {
            btn.prop('disabled', false).html(btnHtml);
        });

        $.ajax({
            type: 'POST',
            url: $this.prop('action'),
            data: $this.serialize(),
            success: function(response) {
                $.globalEval(response);
                password.val('');
            }
        })
        return false;
    })

    $('#reset').click(function () {
    	$this = $(this);
    	form = $this.parents('form');
    	account_no = form.find('#account_no');
    	if($.trim(account_no.val()).length != 7) {
    		alert('Enter a valid account no.');
    		return false;
    	}

    	form.find('#request').val('reset');

    	$.ajax({
            type: 'POST',
            url: form.prop('action'),
            data: form.serialize(),
            success: function(response) {
                $.globalEval(response);
            }
        })
        return false;
    })
	

	
	// $(document).on('click', '#btnResetPassword', function(e) {

	// 	$this = $(this).parents('#fmresetpassword');
	// 	cpassword = $this.find('#cpassword');
	// 	npassword = $this.find('#npassword');
	// 	cnpassword = $this.find('#cnpassword');
		
	// 	if($.trim(npassword.val()).length < 6 || isNaN($.trim(npassword.val()))) {
	// 		alert('New password must be 6 digits number and above'); return false;
	// 	}else if(npassword.val() != cnpassword.val()) {
	// 		alert('New password not match'); return false;
	// 	}else {
	// 		p = $('<input>', {type:'hidden', name:'p', id:'p', value:hex_sha512(cpassword.val())});
	// 		np = $('<input>', {type:'hidden', name:'np', id:'np', value:hex_sha512(npassword.val())});
	// 		cfp = $('<input>', {type:'hidden', name:'cnp', id:'cnp', value:hex_sha512(cnpassword.val())});
									
	// 		cpassword.val(b64_sha512(cpassword.val()));
	// 		npassword.val(b64_sha512(npassword.val()));
	// 		cnpassword.val(b64_sha512(cnpassword.val()));
			
	// 		$this.append(p).append(np).append(cfp)
	// 		$this.addClass('form').submit();
	// 	}
	// });
	
	
	
	
})(this.jQuery);