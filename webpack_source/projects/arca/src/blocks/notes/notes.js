function remove ()
{
    $.ajax({
        'url': `//${window.location.host}/note/${$(this).closest('.notes__item').attr('data-id')}/remove`,
        'method': 'POST',
        success: () => $(this).closest('.notes__item').remove()
    });
}

function edit ()
{
    $.ajax({
        'url': `//${window.location.host}/note/${$(this).closest('.notes__item').attr('data-id')}/edit`,
        'method': 'POST',
        'data': {
            'content': $(this).val()
        },
        success: (data) => {
          
        }
    });
}
function change ()
{
    let colorItem = $(this);
    let color = colorItem.attr('data-color');

    $.ajax({
        'url': `//${window.location.host}/note/${$(this).closest('.notes__item').attr('data-id')}/edit`,
        'method': 'POST',
        'data': {
            'color': color
        },
        success: function (data) {
            let notesItem = colorItem.closest('.notes__item');
            notesItem.css('background', color);
            notesItem.find('.notes__color').removeClass('notes__color_selected');
            colorItem.addClass('notes__color_selected');
        }
    })
}

$('.notes__close').on('click', remove);
$('.notes__color').on('click', change);
$('.notes__text').on('focusout', edit);

$('.notes__add-btn').click(function (e) {
    e.preventDefault
    $.ajax({
        'url': `//${window.location.host}/note`,
        'method': 'POST',
        success: function (data) {
            let date = new Date(data.created_at);
            let output = document.getElementById('outputNotes');

            $.ajax({
                'url': `//${window.location.host}/identity/notes_colors`,
                'method': 'GET',
                success: function (colors) {
            
                    console.log(colors);
                    colors = colors.reverse();
                    let colorsHtml = '';

                    for (let i = 0; i < colors.length; i++) 
                        colorsHtml += `<div class="notes__color ${i == 0 ? 'notes__color_selected' : ''}" data-color="${colors[i].color}" style="background: ${colors[i].color}"></div>`;

                    output.innerHTML += `<div class="notes__item" data-id="${data.id}" style="background: #fef7b2">` +
                        '<div class="notes__box">' +
                            '<textarea class="notes__text" name="content" placeholder="Введите текст">' +
                            '</textarea>' +
                            '<div class="notes__bottom">' +
                                '<div class="notes__info">' +
                                    '<div class="notes__date">'+
                                        'Создано: ' +
                                        '<span>' +
                                            date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
                                            + date.getHours() + ':' + (date.getMinutes() + 1) +
                                        '</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="notes__colors">' +
                                    colorsHtml + 
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="notes__icons">' +
                            '<div class="notes__close"></div>' +
                        '</div>' +
                    '</div>';

                    $('.notes__close').on('click', remove);
                    $('.notes__color').on('click', change);
                    $('.notes__text').on('focusout', edit);
                }
            });
        }
    })
})