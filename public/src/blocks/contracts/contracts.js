$('.contracts__input').on('click', function(){
    if($(this).prop("checked")) {
        $(this).parents('.contracts__row').addClass('contracts__row--active')
    } else {
        $(this).parents('.contracts__row').removeClass('contracts__row--active')
    }
});