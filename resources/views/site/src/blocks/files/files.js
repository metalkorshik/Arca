$('.js-btn-create-folder').click(function (){
    $('.js-create-folder').addClass('files-modal--show')
})
$('.files-modal__close, .js-modal-cancel, .overlay').click(function (){
    $('.files-modal').removeClass('files-modal--show')
})
$('.js-btn-transfer').click(function (){
    $('.js-file-transfer').addClass('files-modal--show')
})

$('.js-btn-folder').click(function (){
    let inputValue = document.getElementById('textMessage').value;
    let output = document.getElementById('filesOutput');
    let nameFolder = document.getElementById('nameFolder').value

    output.innerHTML += '<div class="files__item">' +
        '<div class="files__type-icon files__type-icon--folder">' + '</div>' +
        '<div class="files__named">' +
            '<div class="files__name">' + nameFolder + '</div>' +
        '</div>' +
        '</div>'

    $('.files-modal').removeClass('files-modal--show')
    document.getElementById('nameFolder').value = ''
})

$('.js-transfer-file, .js-btn-remove').click(function (){
    $('.files__item--active').remove()
    $('.files-modal').removeClass('files-modal--show')
})
$('.js-btn-modal-remove').click(function (){
    $('.js-modal-remove').addClass('files-modal--show')
})

$('.files__info-close').click(function (){
    $('.files__info').removeClass('files__info--active')
})

$('.files__container').on('click', '.files__item:not(.files__item--active)', function() {
    $(this)
        .addClass('files__item--active').siblings().removeClass('files__item--active')
        .closest('.files__inner').find('.files__info').removeClass('files__info--active').eq($(this).index()).addClass('files__info--active');
});



downloadFiles = function () {
    let input = document.getElementById('downloadFiles');
    let output = document.getElementById('filesOutput');
    let outputInfo = document.getElementById('outputInformation')

    // output.innerHTML = '<div>';
    for (let i = 0; i < input.files.length; ++i) {
        let file = input.files.item(i).name;
        let fileSize = input.files.item(i).size;
        let fileTotalSizeMb = fileSize / Math.pow(1024,2);
        let fileFinalSize = Math.round(fileTotalSizeMb * 100) / 100
        output.innerHTML += '<div class="files__item">' +
            '<div class="files__type-icon files__type-icon--folder">' + '</div>' +
            '<div class="files__named">' +
            '<div class="files__name">' + file + '</div>' +
            '<div class="files__size">' + fileFinalSize + ' mb' + '</div>' +
            '</div>' +
            '</div>'

        outputInfo.innerHTML += '<div class="files__info">' +
                '<div class="files__info-close">' + '</div>' +
                '<div class="files__info-image">' +
                    '<div class="files__info-type files__info-type--document">' + '</div>' +
                '</div>' +
                '<div class="files__info-inner">' +
                    '<div class="files__label">' + 'Название:' + '</div>' +
                    '<input type="text" placeholder="Название" class="input-styled files__input-name" />' +
                    '<div class="files__info-row">' +
                        '<div class="files__label">' + 'Тип:' + '</div>' +
                        '<div class="files__info-text files__info-text--ml">' + file + '</div>' +
                    '</div>' +
                    '<div class="files__info-row">' +
                        '<div class="files__label">' + 'Размер:' + '</div>' +
                        '<div class="files__info-text files__info-text--ml">' + fileFinalSize + ' mb' + '</div>' +
                    '</div>' +
                    '<div class="files__info-row">' +
                        '<div class="files__label">' + 'Ссылка:' + '</div>' +
                        '<a href="#" class="files__link">' + 'Кликните тут' + '</a>' +
                    '</div>' +
                    '<div class="files__info-row files__info-row--direction">' +
                        '<div class="files__label">' + 'Последнее изменение:' + '</div>' +
                        '<div class="files__info-text files__info-text--mt">' + '29/10/2020' + '</div>' +
                    '</div>' +
            '</div>' +
            '</div>'

        $('.files__info-close').click(function (){
            $('.files__info').removeClass('files__info--active')
        })
    }
    // output.innerHTML += '</div>';


}
