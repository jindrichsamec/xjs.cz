$(function() {

	$("input,textarea").jqBootstrapValidation({
		preventSubmit: true,
		submitError: function($form, event, errors) {
			// additional error messages or events
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); // prevent default submit behaviour
			// get values from FORM
			var email = $("input#email").val();
			var message = $("textarea#message").val();

			// Check for white space in name for Success/Fail message
			$.ajax({
				url: "././mail/contact_me.php",
				type: "POST",
				data: {
					email: email,
					message: message
				},
				cache: false,
				success: function() {
					// Success message
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#success > .alert-success')
						.append("<strong>Díky za zprávu! Odpovím hned jak to bude možné.</strong>");
					$('#success > .alert-success')
						.append('</div>');

					//clear all fields
					$('#contactForm').trigger("reset");
				},
				error: function() {
					// Fail message
					$('#success').html("<div class='alert alert-danger'>");
					$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#success > .alert-danger').append("<strong>Omlouvám se, zprávu se nepodařilo odeslat. Zkuste to za chvíli znovu!");
					$('#success > .alert-danger').append('</div>');
					//clear all fields
					$('#contactForm').trigger("reset");
				},
			})
		},
		filter: function() {
			return $(this).is(":visible");
		},
	});

	$("a[data-toggle=\"tab\"]").click(function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
	$('#success').html('');
});
