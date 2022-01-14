$(document).ready(function() {
    $("#basic-form").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        surname : {
            required: true,
            minlength: 3
          },
        phonenumber : {
            required: true,
            minlength: 8,
            number: true,
          },
        email: {
          required: true,
          email: true
        },
        password: {
            required: true,
            minlength: 5
          },        
          number: true,
          min: 0
        
      },
      messages : {
        name: {
          minlength: "Name should have least 3 characters"
        },
        surname: {
            minlength: "Surname should have least 3 characters"
        },
        phonenumber: {
            minlength: "Phone Number should have least 8 digits"
        },             
        email: {
          email: "The email should be in the format: abc@domain.tld"
        },
        password: {
            minlength: "Password should have at least 5 characters"
        },

        
      }
    });
  });