$(document).ready(function () {

    let timesheetSelect = $('.js-select-timesheet-year');

    timesheetSelect.select2({
        minimumResultsForSearch: Infinity,
    });

    let itemsDates = $('.date-items__dates');

    timesheetSelect.change(function(e) {

        itemsDates.empty();
        let year = this.value;
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        for (let month = 1; month <= 12; month++) {

            itemsDates.append(`<div class="button date-items__item button--noselect">
                    <a href="${this.dataset.link}?month=${month}&year=${year}">${months[month - 1]}, ${year}</a>
                </div>`);

        }
    });
});