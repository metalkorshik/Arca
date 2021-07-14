$('.notes__close').click(function (){
    $(this).closest('.notes__item').remove()
})
$('.notes__add-btn').click(function (e){
    e.preventDefault
    let nowDate = new Date();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowClock = nowHours + ':' + nowMinutes
    let output = document.getElementById('outputNotes');

    output.innerHTML += '<div class="notes__item">' +
        '<div class="notes__box">' +
            '<textarea class="notes__text" placeholder="Введите текст">' +
            '</textarea>' +
            '<div class="notes__bottom">' +
                '<div class="notes__date">'+
                    'Создано: ' +
                    '<span>' +
                        nowClock +
                    '</span>' +
                '</div>' +
                '<div class="notes__date">'+
                    'Отредактировано: ' +
                    '<span>' +
                    '12/04/2015' +
                    '</span>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="notes__icons">' +
            '<div class="notes__close">' +
            '</div>' +
        '</div>' +
        '</div>'

    $('.notes__close').click(function (){
        $(this).closest('.notes__item').remove()
    })
})