$(document).ready(function () {
    alert(123);

    $('.js-select-personal').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.js-select-engineer').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.js-select-flat').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.js-select-designer').select2({
        minimumResultsForSearch: Infinity,
    });


    $('.js-add-row').click(function (e) {
        e.preventDefault()
        let itemRow = ('<div class="commercial-offer__row"><div class="commercial-offer__col"><input type="text" placeholder="Название" maxlength="50" class="commercial-offer__text"></div><div class="commercial-offer__col"><input type="number" placeholder="Сумма" maxlength="50" class="commercial-offer__text"></div><div class="commercial-offer__remove-box"><div class="commercial-offer__remove"></div>Удалить</div></div>')
        $('.commercial-offer-costs__tab').append(itemRow);
        $('.commercial-offer__remove-box').click(function () {
            $(this).parent().remove()
        })
    });
    $('.js-add-flat-row').click(function (e) {
        e.preventDefault()

        let flats = JSON.parse(this.dataset.flats);
        id = $('.commercial-offer-flats__tab').children().length();

        let itemRow = `<div class="commercial-offer__row">
            <div class="commercial-offer__col">
                <select name="flats[${id}][id]">`;

        for (let index = 0; index < flats.length; index++) 
            itemRow += `<option value="${flat['id']}">${flat['address']}</option>`;

        itemRow += `</select>
            </div>
            <div class="commercial-offer__col">
                <input type="number" placeholder="От" name="flats[${id}][from]" " maxlength="50" class="commercial-offer__text" required="">
            </div>
            <div class="commercial-offer__col">
                <input type="number" placeholder="До" name="flats[${id}][to]" maxlength="50" class="commercial-offer__text" required="">
            </div>
            <div class="commercial-offer__remove-box">
                <div class="commercial-offer__remove"></div>Удалить
            </div>
        </div>`;

        $('.commercial-offer-flats__tab').append(itemRow);
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


    $('.contracts__accept-btn').click(function (e) {
        e.preventDefault()
        $(this).closest('.contracts__row').find('.modal-contracts-box').show()
    })

    $('.js-contracts-close').click(function (e) {
        e.preventDefault()
        $('.modal-contracts-box').hide()
    })

    $('.js-contracts-accept').click(function () {
        $('.modal-contracts-box').hide(0)
        $(this).closest('.contracts__row').find('.contracts__status').find('.contracts__text').text('Контракт');
        $(this).closest('.contracts__row').find('.contracts__accept-btn').hide();
        $(this).closest('.contracts__row').find('.contracts__accept').find('.contracts__text').text('Подверждено')
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


    if($('#inputClothes').length){
        let input = document.querySelector('#inputClothes');

        input.addEventListener('keypress', (e) => {
            let keyCode = e.keyCode || e.which; // Код символа
            if (!/[A-Za-z ]/.test(String.fromCharCode(keyCode)) // Проверка на разрешённые символы
                || (/[ ]/.test(input.value) && keyCode === 32)) // Проверка на количество пробелов
                e.preventDefault(); // Если условие выполнилось, то запрещаем ввод символа
        });
    }


    $('.js-validate-rate').keypress(function (key) {
        if (key.charCode == 45 || key.charCode == 46 || key.charCode == 101) return false;
    });



    // При загрузке удостворенеия создать строку в таблицу

    downloadIdentity = function () {
        let input = document.getElementById('inputIdentity');
        let output = document.getElementById('listIdentity');


        // output.innerHTML = '<div>';
        for (let i = 0; i < input.files.length; ++i) {
            let file = input.files.item(i).name;
            output.innerHTML += '<div class="commercial-offer__row">' +
                '<div class="commercial-offer__col">' +
                '<div class="commercial-offer__name">' +
                file.substr(0, file.lastIndexOf('.')) +
                '</div>' +
                '</div>' +
                '<div class="commercial-offer__col">' +
                '<input type="text" placeholder="Дата" maxlength="50" class="commercial-offer__input-date js-date">' +
                '</div>' +
                '<div class="commercial-offer__col">' +
                '<input type="text" placeholder="Дата" maxlength="50" class=".commercial-offer__input-date js-date">' +
                '</div>' +
                '<div class="commercial-offer__remove-box">' +
                '<div class="commercial-offer__remove">' +
                '</div>' +
                'Удалить' +
                '</div>' +
                '</div>'
        }
        // output.innerHTML += '</div>';

        $( ".js-date" ).datepicker();
        $('.commercial-offer__remove-box').click(function () {
            $(this).parent().remove()
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



