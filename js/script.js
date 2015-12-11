 $(document).ready(function () {
$('#logintab').on('click',function(e){
      e.preventDefault();
    $('.loginmodal-container').show();
    $('.signupmodal-container').hide();
});
$('#signuptab').on('click',function(e){
    e.preventDefault();
    $('.loginmodal-container').hide();
    $('.signupmodal-container').show();
});
 $('#register_tab').on('click',function(e){
    e.preventDefault();
    $('.loginmodal-container').hide();
    $('.signupmodal-container').show();
});

     
$('#login_subtab').on('click',function(e){
    e.preventDefault();
    $('.loginmodal-container').show();
    $('.signupmodal-container').hide();
});

$('#customize_button').on('click',function(e){
$('#inputbox').hide();
$('#customized_inputbox').show();
$('#customize_button').hide();
$('#back_button').show();
});

$('#back_button').on('click',function(e){
$('#inputbox').show();
$('#customized_inputbox').hide();
$('#customize_button').show();
$('#back_button').hide();
});
     
     
});