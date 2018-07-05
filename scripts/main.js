//Появление формы по нажатии на кнопку

$('#feedback-pencil').click(function(){
    $('.overlay').fadeIn();
});


//Обработка формы

$(document).ready(function() {
    $('#form').submit(function() {
        if (document.form.name.value == '' || document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $('.overlay').fadeOut();
            $('.overlay-thankyou').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});


// Закрытие формы "Спасибо" по нажатии на кнопку

$('#js-close-thankyou').click(function() {
    $('.overlay-thankyou').fadeOut();
});

// Закрытие попапов при клике не на него

$(document).mouseup(function(e){
    let popupForm = $('.form-place');
    if (e.target != popupForm[0] && popupForm.has(e.target).length === 0) {
        $('.overlay').fadeOut();
    }
});
$(document).mouseup(function(e){
    let thankyouForm = $('.thankyou');
    if (e.target != thankyouForm[0] && thankyouForm.has(e.target).length === 0) {
        $('.overlay-thankyou').fadeOut();
    }
});

// Маска ввода телефона

$(function($) {
    $('[name="phone"]').mask("+7 (999) 999-99-99");
});

