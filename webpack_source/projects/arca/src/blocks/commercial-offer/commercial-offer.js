$(document).ready(function () {

    $('.js-select-personal').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.js-select-engineer').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.js-select-designer').select2({
        minimumResultsForSearch: Infinity,
    });


    $('.js-add-row').click(function (e) {
        e.preventDefault()
        let i = $('.commercial-offer__tab').children().length - 1;
        let itemRow = (`<div class="commercial-offer__row"><div class="commercial-offer__col"><input type="text" placeholder="Название" name="costs[${i}][title]" maxlength="50" class="commercial-offer__text" required></div><div class="commercial-offer__col"><input type="number" placeholder="Сумма" name="costs[${i}][sum]" maxlength="50" class="commercial-offer__text" required></div><div class="commercial-offer__remove-box"><div class="commercial-offer__remove"></div>Удалить</div></div>`)
        $('.commercial-offer__tab').append(itemRow);
        $('.commercial-offer__remove-box').click(function () {
            $(this).parent().remove()
        })
    });
    $('.commercial-offer__remove-box').click(function () {
        $(this).parent().remove()
    })


    $('.commercial-offer__file-input').change(function () {
        if ($(this).val() != '') {
            $(this).closest('.commercial-offer__file').find('.commercial-offer__file-text').text('Выбрано файлов: ' + $(this)[0].files.length)
        } else {
            $(this).closest('.information__upload').find('.commercial-offer__file-text').text('Нажмите, чтобы добавить файлы')
        }

    });



    updateList = function () {
        let input = document.getElementById('file');
        let output = document.getElementById('fileList');

        // output.innerHTML = '<div>';
        for (let i = 0; i < input.files.length; ++i) {
            output.innerHTML += '<div class="commercial-file">'
                + '<div class="commercial-file__inner">'
                + '<div class="commercial-file__icon">'
                + '</div>'
                + input.files.item(i).name
                + '</div>'
                + '<div class="commercial-file__remove ">'
                + '</div>'
                + '</div>'
                + '</div>'
        }

        // output.innerHTML += '</div>';

        function addModal() {
            $('.modal-remove-box').clone().appendTo('.commercial-file')
        }

        addModal()

        $('.commercial-file__remove').click(function () {
            $(this).closest('.commercial-file').find('.modal-remove-box').show();

            $('.js-file-accept').click(function () {
                $(this).closest('.commercial-file').remove()
            })

            $('.js-file-close, .modal-overlay').click(function () {
                $('.modal-remove-box').hide();
            })
        })
    }

    $('.contracts__open-modal-btn').click(function (e) {
        e.preventDefault();
        let action = $(this).data()['modal'];
        $(this).siblings(`.modal-contracts-box[data-modal="${action}"]`).css('display', 'block');
    })

    $('.js-contracts-close').click(function (e) {
        e.preventDefault();
        $(this).closest('.modal-contracts-box').css('display', 'none');
    })

    $('.js-contracts-accept').click(function (e) {
        $.ajax({
            url: `//${window.location.host}/api/${e.target.dataset.target}/${e.target.dataset.id}/${e.target.dataset.action}`,
            method: 'post',
            success: (result) => {
                $(this).closest('.modal-contracts-box').css('display', 'none')
                $(this).closest('.list__row').remove()

                if(e.target.dataset.redirect)
                    location = e.target.dataset.redirect;
            }
        });
    })

    $('.js-select-position').select2({
        minimumResultsForSearch: Infinity
    })

    $("#imgload").change(function () {
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('#imgshow').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    $('.js-select-fio').select2({
        minimumResultsForSearch: Infinity
    })


    /* if($('#inputClothes').length){
        let input = document.querySelector('#inputClothes');

        input.addEventListener('keypress', (e) => {
            let keyCode = e.keyCode || e.which; // Код символа
            if (!/[A-Za-z ]/.test(String.fromCharCode(keyCode)) // Проверка на разрешённые символы
                || (/[ ]/.test(input.value) && keyCode === 32)) // Проверка на количество пробелов
                e.preventDefault(); // Если условие выполнилось, то запрещаем ввод символа
        });
    } */


    $('.js-validate-rate').keypress(function (key) {
        if (key.charCode == 45 || key.charCode == 46 || key.charCode == 101) return false;
    });


    downloadIdentity = function () {
        let input = document.getElementById('inputIdentity');
        let output = $('#listIdentity');
        let uploadedDocsLength = $('.commercial-document__row').length;

        let formData = new FormData();
        formData.append("temp_path", document.querySelector('input[name="temp_path"]').value);
        for (let i = 0; i < input.files.length; ++i)
            formData.append(`documents[${i}]`, input.files[i]);

        $.ajax({
            'url': `//${window.location.host}/api/staff/documents/upload`,
            'type': 'POST',
            'data': formData,
            'processData': false,
            'contentType': false,
            'enctype': 'multipart/form-data',
            success : (data) => {

                for (let i = 0; i < data.length; ++i) {

                    let docNumber = uploadedDocsLength + i;

                    output.append('<div class="commercial-offer__row">' +
                        '<div class="commercial-offer__col">' +
                        '<div class="commercial-offer__name">' +
                        `<input name="documents[${docNumber}][id]" value="0" type="hidden"/>` + 
                        `<input name="documents[${docNumber}][title]" type="text" placeholder="Название" require value="${data[i]['original']}" maxlength="50" class="commercial-offer__input_text">` +
                        `<input name="documents[${docNumber}][path]" type="hidden" value="${data[i]['name']}" />` +
                        '</div>' +
                        '</div>' +
                        '<div class="commercial-offer__col">' +
                        `<input name="documents[${docNumber}][validity]" type="text" placeholder="Дата" require maxlength="50" class="commercial-offer__input-date js-date">` +
                        '</div>' +
                        '<div class="commercial-offer__col">' +
                        `<input name="documents[${docNumber}][date_of_issue]" type="text" placeholder="Дата" require maxlength="50" class=".commercial-offer__input-date js-date">` +
                        '</div>' + 
                        `<div class="commercial-offer__remove-box"  data-file="${data[i]['name']}">` +
                        '<div class="commercial-offer__remove">' +
                        '</div>' +
                        '</div>' +
                        '</div>');
                }

                $( ".js-date" ).datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: 'dd/mm/yy',
                    yearRange: '1970:2021',
                    firstDay: 1,
                    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
                    dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
                });
                $('.commercial-offer__remove-box').click(function (e) {
                    $.ajax({
                        'url': `//${window.location.host}/api/staff/document/remove`,
                        'type': 'POST',
                        'data': {
                            'temp_path': document.querySelector('input[name="temp_path"]').value,
                            'file_path': e.target.dataset.file
                        },
                        success : (data) => {
                            $(this).parent().remove()
                        }
                    });
                })
            }
        })
    }

    // Оставить коммантарий

    $('.modal__request-btn').click(function (e){
        e.preventDefault
        let nowDate = new Date();
        let nowHours = nowDate.getHours();
        let nowMinutes = nowDate.getMinutes();
        let nowClock = nowHours + ':' + nowMinutes

        let message = document.getElementById('textMessage').value;
        let output = document.getElementById('comments');

        output.innerHTML += '<div class="modal__comment">'+
            '<div class="modal__comment-info">' +
                '<div class="modal__text modal__comment-name">' + 'Вимм Билль Данн' + '</div>' +
                '<div class="modal__text modal__text--mr">' + '18.01.2020г' + '</div>' +
                '<div class="modal__text">' + nowClock + '</div>' +
            '</div>' +
            '<div class="modal__text">' + message + '</div>' +
            '</div>'

        document.getElementById('textMessage').value=''
    })
});



