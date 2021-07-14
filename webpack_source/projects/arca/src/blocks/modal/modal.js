import addMore from 'highcharts/highcharts-more'
import addExporting from 'highcharts/modules/exporting'
import addOfflineExporting from 'highcharts/modules/offline-exporting'
import addSolidGauge from 'highcharts/modules/solid-gauge'
import addDrilldown from 'highcharts/modules/drilldown'
import addTreemap from 'highcharts/modules/treemap'
import addFunnel from 'highcharts/modules/funnel'
import addVariablePie from 'highcharts/modules/variable-pie'

addMore(Highcharts)
addExporting(Highcharts)
addOfflineExporting(Highcharts)
addSolidGauge(Highcharts)
addDrilldown(Highcharts)
addTreemap(Highcharts)
addFunnel(Highcharts)
addVariablePie(Highcharts)


function createRingChart(chartContainer) {

    let attributes = JSON.parse(chartContainer.dataset.rings)[0]
    console.log(attributes)

    let dayProgress = attributes.today.real / attributes.today.goal * 100;
    let weekProgress = attributes.week.real / attributes.week.goal * 100
    let monthProgress = attributes.month.real / attributes.month.goal * 100

    $('.js-today').text(attributes.today.real)
    $('.js-week').text(attributes.week.real)
    $('.js-month').text(attributes.month.real)


    // GRAPHIC FIRST

    function renderIcons() {

        // Move icon
        if (!this.series[0].icon) {
            this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                .attr({
                    // stroke: '#303030',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': 2,
                    zIndex: 10
                })
                .add(this.series[2].group);
        }
        this.series[0].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
            (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
        );

        // Exercise icon
        if (!this.series[1].icon) {
            this.series[1].icon = this.renderer.path(
                ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                    'M', 8, -8, 'L', 16, 0, 8, 8]
            )
                .attr({
                    // stroke: '#ffffff',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': 2,
                    zIndex: 10
                })
                .add(this.series[2].group);
        }
        this.series[1].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
            (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
        );

        // Stand icon
        if (!this.series[2].icon) {
            this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
                .attr({
                    // stroke: '#303030',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': 2,
                    zIndex: 10
                })
                .add(this.series[2].group);
        }

        this.series[2].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
            (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
        );

        console.log(chartContainer)

        let dayRing = chartContainer.getElementsByClassName('highcharts-series-0')[0]
        let weekRing = chartContainer.getElementsByClassName('highcharts-series-1')[0]
        let monthRing = chartContainer.getElementsByClassName('highcharts-series-2')[0]

        dayRing.addEventListener('mouseenter', function (e) {
            renderTooltip('today')

        })

        dayRing.addEventListener('mouseleave', function (e) {
            clearTooltip()
        })

        weekRing.addEventListener('mouseenter', function (e) {
            renderTooltip('week')
        })

        weekRing.addEventListener('mouseleave', function (e) {
            clearTooltip()
        })

        monthRing.addEventListener('mouseenter', function (e) {
            renderTooltip('month')
        })

        monthRing.addEventListener('mouseleave', function (e) {
            clearTooltip()
        })

        function renderTooltip(type) {
            let tooltip = chartContainer.closest('.js-ring-chart-wrapper').getElementsByClassName('js-ring-chart-tooltip')[0]
            tooltip.classList.add("js-ring--show");

            let tooltipText = '';
            let tooltipNumber = '';

            if (type === 'today') {
                tooltipText = '<div class="tooltip-info">сегодня</div>'
                tooltipNumber = `<div class="tooltip-number tooltip-number--today">${attributes[type].real}</div>`;
            } else if (type === 'week') {
                tooltipText = '<div class="tooltip-info">за неделю</div>'
                tooltipNumber = `<div class="tooltip-number tooltip-number--week">${attributes[type].real}</div>`;
            } else if (type === 'month') {
                tooltipText = '<div class="tooltip-info">всего</div>'
                tooltipNumber = `<div class="tooltip-number tooltip-number--month">${attributes[type].real}</div>`;
            }

            let template = `${tooltipNumber}<br>${tooltipText}`
            tooltip.innerHTML = template
        }

        function clearTooltip() {
            let tooltip = chartContainer.closest('.js-ring-chart-wrapper').getElementsByClassName('js-ring-chart-tooltip')[0]
            tooltip.classList.remove("js-ring--show");
        }

    }


    let domElement = document.getElementsByClassName('js-ring-chart')[0]

    Highcharts.chart(domElement, {
        chart: {
            type: 'solidgauge',
            height: '110%',
            events: {
                render: renderIcons
            }
        },

        title: {
            text: 'Активность',
            style: {
                fontSize: '18px'
            }
        },

        tooltip: {
            enabled: false,
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'today',
            hint: 'в день',
            real: 6,
            goal: 8,
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: dayProgress
            }]
        }, {
            name: 'Всего',
            hint: 'в день',
            real: 6,
            goal: 40,
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: weekProgress
            }]
        }, {
            name: 'Всего',
            hint: 'в день',
            real: 6,
            goal: 70,
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: monthProgress
            }]
        }]
    });

// GRAPHIC FIRST END
}

if (document.getElementsByClassName('js-ring-chart').length > 0) {

    let charts = document.getElementsByClassName('js-ring-chart');

    for (let i = 0; i < charts.length; i++) {
        createRingChart(charts[i])
    }
}


$(document).ready(function () {

    $('.modal__sign-button').click(function () {
        $('.modal-sign').fadeIn();

    });
// Клик по ссылке "Закрыть".
    $('.modal__close').click(function () {
        $(this).parents('.modal-sign').fadeOut();
        return false;
    });
// Клик по ссылке "Закрыть".
    $('.modal__close').click(function () {
        $(this).parents('.modal').fadeOut();
        return false;
    });
// Закрытие по клавише Esc.
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').fadeOut();
        }
    });


    $('.modal__reset-button').click(function () {
        $('.modal-reset').fadeIn();

    });

    $('.modal__contract-edit').click(function () {
        $('.modal-edit').fadeIn();

    });

    $('.modal__contract-button').click(function () {
        $('.modal-contract').fadeIn();
    });


    $('.modal__table-button').click(function () {
        $('.modal-edit-table').fadeIn();

    });

    $('.modal__employee-button').click(function () {
        $('.modal-employee').fadeIn();

    });

    $('.modal__employee-card-button').click(function () {
        $('.modal-employee-card').fadeIn();

    });

    $('.modal__subtract').click(function () {
        $('.modal-subtract').fadeIn();

    });

    $('.modal__prize').click(function () {
        $('.modal-prize').fadeIn();
    });

    $('.modal__salary').click(function () {
        $('.modal-salary').fadeIn();
    });

    $('.modal__consumption-modal').click(function () {
        $('.modal-consumption').find('input[name="title"]').val('');
        $('.modal-consumption').find('input[name="sum"]').val('');
        $('.modal-consumption').fadeIn(100);
    });
    $('.modal__consumption-show').click(function () {
        $('.modal-consumption').find('input[name="title"]').val('');
        $('.modal-consumption').find('input[name="sum"]').val('');
        $('.modal-consumption').fadeIn();
    });

    function addDetailConsumption (e) {
        $('.modal-consumption-detail').data('id', e.target.dataset.id);
        $('.modal-consumption-detail').find('input').val('');
        setToday();
        $('.modal-consumption-detail').fadeIn(100);
    }

    /* TO REMOVE */
    /* $('.modal__consumption-add-detail-modal').click(function (e) {
        $('.modal-consumption-detail').data('id', e.target.dataset.id);
        $('.modal-consumption-detail').find('input').val('');
        setToday();
        $('.modal-consumption-detail').fadeIn(100);
    }); */
    $('.modal__consumption-add-detail-modal').on('click', addDetailConsumption);

    $('.modal-consumption-detail').submit(function (e) {
        e.preventDefault();

        $.ajax({
            'url': `${window.location.origin}/api/contract/consumption/${$(this).data('id')}/detail`,
            'method': e.target.method,
            'data': $(this).serialize(),
            success: function (data) {
                /* TO DELETE */
                $(`.modal__consumption-block[data-id="${data.contract_cost_id}"]`).append(`
                    <div class="modal__contract-row modal__contract-subrow" style="margin-left: 50px;">
                        <div class="modal__costs-date">
                            <div class="modal__text">${data.date}</div>
                        </div>
                        <div class="modal__costs-account_number" style="margin-left: 100px;">
                            <div class="modal__text">${data.account_number}</div>
                        </div>
                        <div class="modal__costs-account_counterparty" style="margin-left: 100px;">
                            <div class="modal__text">${data.counterparty}</div>
                        </div>
                        <div class="modal__costs-account_nomenclature" style="margin-left: 100px;">
                            <div class="modal__text">${data.nomenclature}</div>
                        </div>
                        <div class="modal__costs-account_sum" style="margin-left: 100px;">
                            <div class="modal__text">${data.sum} руб.</div>
                        </div>
                    </div>
                `);

                let spent = $(`.modal__consumption-block[data-id="${data.contract_cost_id}"]`).find('.spent-total-sum');
                spent.text(+data.sum + +spent.text());

                $(`#total-spent`).text(+data.sum + +$(`#total-spent`).text())
                /* TO DELETE END */

                $(`.list__cost-table tr[data-id="${data.contract_cost_id}"] + .cost-detail-header`).after(`
                    <tr class="cost-detail">
                        <td>${data.date}</td>
                        <td>${data.account_number}</td>
                        <td>${data.counterparty}</td>
                        <td>${data.nomenclature}</td>
                        <td colspan="2">${data.sum} руб.</td>
                    </tr>
                `);

                spent = $(`.list__cost-table tr[data-id="${data.contract_cost_id}"]`).find('.list__cost-spent');
                spent.text(+data.sum + +spent.text());

                let profit = $(`.list__cost-table tr[data-id="${data.contract_cost_id}"]`).find('.list__cost-profit');
                profit.text(+profit.text() - +data.sum);

                $('.modal-consumption-detail').fadeOut();
            }
        });
    });

    $('.modal-consumption').submit(function (e) {
        e.preventDefault();

        let title = $(this).find('input[name="title"]').val();
        let sum = $(this).find('input[name="sum"]').val();

        $.ajax({
            'url': e.target.action,
            'method': e.target.method,
            'data': {
                'title': title,
                'sum': sum
            },
            success: function (data) {
                /* TO REMOVE */
                $('.modal__contract-table .modal__table-inner').append(`
                    <div data-id="${data.id}">
                        <div class="modal__contract-row">
                            <div class="modal__contract-name">
                            <div class="modal__text">${title}</div>
                            </div>
                            <div class="modal__contract-contribution">
                            <div class="modal__text modal__text--blue">${sum} руб.</div>
                            </div>
                            <div class="modal__contract-consumption">
                            <div class="modal__text modal__text--blue">0 руб.</div>
                            </div>
                            <a href="#" class="modal__edited modal__consumption-show"></a>
                        </div>
                    </div>
                `);
                /* TO REMOVE END */

                $('.list__cost-table tbody').append(`
                    <tr data-id="${data.id}">
                        <td class="list__cost-title">${title}</td>
                        <td><span class="list__cost-sum">${sum}</span> руб.</td>
                        <td><span class="list__cost-spent">0</span> руб.</td>
                        <td><span class="list__cost-profit">${sum}</span> руб.</td>
                        <td class="action-block">
                            <a href="#" class="modal__edited modal__consumption-edit-modal" data-id="${data.id}"></a>
                            <a href="#" class="modal__add-cost modal__consumption-add-detail-modal" data-id="${data.id}"></a>
                        </td>
                    </tr>
                `);

                $('.modal__consumption-edit-modal').on('click', editConsumption);
                $('.modal__consumption-add-detail-modal').on('click', addDetailConsumption);

                /* TO REMOVE */
                $('.modal__consumption-show').click(function () {
                    $('.modal-consumption').fadeIn();
                });
                /* TO REMOVE END */

                $('.modal-consumption').fadeOut();
            }
        });
    });

    function editConsumption (e)
    {
        $.ajax({
            'url': `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`,
            success: data => {
                $('.modal-consumption-edit').attr('action', `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`);
                $('.modal-consumption-edit').find('input[name="title"]').val(data.title);
                $('.modal-consumption-edit').find('input[name="sum"]').val(data.sum);
                $('.modal-consumption-edit').fadeIn(100);
            }
        })
    }

    $('.modal__consumption-edit-modal').on('click', editConsumption);
    /* TO REMOVE */
    /* $('.modal__consumption-edit-modal').click(function (e) {
        $.ajax({
            'url': `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`,
            success: data => {
                $('.modal-consumption-edit').attr('action', `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`);
                $('.modal-consumption-edit').find('input[name="title"]').val(data.title);
                $('.modal-consumption-edit').find('input[name="sum"]').val(data.sum);
                $('.modal-consumption-edit').fadeIn(100);
            }
        })
    }); */

    $('.modal-consumption-edit').submit(function (e) {
        e.preventDefault();

        let title = $(this).find('input[name="title"]').val();
        let sum = $(this).find('input[name="sum"]').val();

        $.ajax({
            'url': e.target.action,
            'method': e.target.method,
            'data': {
                'title': title,
                'sum': sum
            },
            success: (data) => {
                /* TO REMOVE */
                let parent = $(`.modal__contract-table .modal__contract-row[data-id="${data.id}"]`)
                parent.find('.modal__contract-name .modal__text').text(title);
                parent.find('.modal__contract-contribution .modal__text').text(sum + ' руб.');

                //$('.modal-consumption-edit').fadeOut();
                /* TO REMOVE END */

                parent = $(`.list__cost-table tr[data-id="${data.id}"]`);
                parent.find('.list__cost-title').text(title);
                parent.find('.list__cost-sum').text(sum);
                parent.find('.list__cost-profit').text(+sum - +parent.find('.list__cost-spent').text());

                $('.modal-consumption-edit').fadeOut();
            }
        });
    });

    $('.modal__editing').click(function () {
        $('.modal-editing').fadeIn();
    });

    $('.modal__show-comment').click(function (e) {
        $('.modal__comment-text').text(e.currentTarget.dataset.comment);
        $('.modal-show-comment').fadeIn();
    });

    $('.modal__flat-add').click(function (e) {
        $('.modal-flat').fadeIn();
    });

    $('.modal__apartments').click(function (e) {
        $.ajax({
            url: `//${window.location.host}/flat/` + e.target.dataset.id,
            success: function(result) {
                $('.modal__header--apartments').text(result.address);

                $('.modal-apartments .modal__apartments-inner .modal__apartments-row').remove();

                result.lodgers.forEach(lodger => {

                    let entrance = new Date(lodger.entrance);
                    let leaving = new Date(lodger.leaving);

                    $('.modal-apartments .modal__apartments-inner').append(
                        `<div class="modal__apartments-row">
                            <div class="modal__apartments-name">
                                <div class="modal__text modal__text--hidden">Проживают (ли) в квартире:</div>
                                <div class="modal__text modal__text--bold">
                                    ${lodger.lodger.lname} ${lodger.lodger.fname} ${lodger.lodger.mname}
                                </div>
                            </div>
                            <div class="modal__apartments-arrival">
                                <div class="modal__text modal__text--hidden">Прибытие</div>
                                <div class="modal__text">
                                    ${entrance.getDay() + 1}/${entrance.getMonth()}/${entrance.getFullYear()}
                                </div>
                            </div>
                            <div class="modal__apartments-departure">
                                <div class="modal__text modal__text--hidden">Выезд</div>
                                <div class="modal__text">
                                    ${leaving.getDay() + 1}/${leaving.getMonth()}/${leaving.getFullYear()}
                                </div>
                            </div>
                        </div>`
                    );
                });

            }
        });

        $('.modal-apartments').fadeIn();
        return false;
    });

    $('.modal__flat-edit').click(function (e) {
        $.ajax({
            url: `//${window.location.host}/flat/` + e.target.dataset.id,
            success: function(result) {
                $('.modal-flat-edit').data('id', e.target.dataset.id)
                $('.modal-flat-edit .modal__input[name="address"]').val(result.address);
                $('.modal-flat-edit .modal__input[name="cost"]').val(result.cost);
                $('.modal-flat-edit').fadeIn();
            }
        });
    });

    $('.modal-flat-edit').submit(function (e) {
        e.preventDefault();

        let address = $('.modal-flat-edit .modal__input[name="address"]').val();
        let cost = $('.modal-flat-edit .modal__input[name="cost"]').val();

        $.ajax({
            url: `//${window.location.host}/flat/` + $('.modal-flat-edit').data('id') + '/update',
            method: 'POST',
            data: {
                'address': address,
                'cost': cost
            },
            success: (result) => {
                $(`.flat-${result.id} .contracts__address .contracts__text`).text(address);
                $(`.flat-${result.id} .contracts__cost .contracts__text`).text(cost + ' руб.');
                $('.modal-flat-edit').fadeOut();
            }
        });
    });

    function showCalender ()
    {
        $('.modal-calendar-cell').data('worker', $(this).attr('data-worker'));
        $('.modal-calendar-cell').data('day', $(this).attr('data-day'));
        $('.modal-calendar-cell').data('date', $(this).attr('data-date'));
        $('.modal-calendar-cell').data('timesheet', $(this).attr('data-timesheet'));
        $('.modal-calendar-cell').data('business', $(this).attr('data-business') ?
            $(this).attr('data-business') : 0);
        $('.modal-calendar-cell').data('premium', $(this).attr('data-premium'));
        $('.modal-calendar-cell').data('retention', $(this).attr('data-retention'));
        $('.modal-calendar-cell').data('fill', $(this).hasClass('timesheet__cell--fill'));
        $('.modal-calendar-cell').data('hourse', 0);
        // $('.modal-calendar-date').text($(this).attr('data-date'));
        let cellDate = $(this).attr('data-date');

        var d = new Date(cellDate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        cellDate = [day, month, year].join('.');
        $('.modal-calendar-date').text(cellDate);

        $('#show-business').prop('checked', +this.dataset.engineer ? false : true);
        $('#modal-calendar-cell__clear').hide();

        let hourse = 10;
        let comment = '';
        let business = 600;
        if ($(this).hasClass('timesheet__cell--fill'))
        {
            $('#modal-calendar-cell__clear').show();

            hourse = $(this).children().text();
            comment = $(this).attr('data-comment');

            if ($(this).attr('data-business'))
                business = $(this).attr('data-business');
            else
                $('#show-business').prop('checked', false);

            $('.modal-calendar-cell').data('hourse', +hourse);
        }
        else 
        {
            if(+this.dataset.sunday)
                hourse = 0;
            else if(+this.dataset.engineer)
            {
                hourse = 8;
                business = 1250;
            }
        }

        $('.modal-calendar-cell').find('input[name="hourses"]').val(hourse);
        $('.modal-calendar-cell').find('.modal__editing-area').val(comment);
        $('.modal-calendar-cell').find('input[name="business"]').val(business);

        $('.modal-calendar-cell').find('input[name="premium"]').val($(this).attr('data-premium'));
        $('.modal-calendar-cell').find('input[name="retention"]').val($(this).attr('data-retention'));

        $('.modal-calendar-cell').fadeIn();
    }

    $('.calendar__show').on('click', showCalender);

    $(this).keypress(function (ev) {
        var keycode = (ev.keyCode ? ev.keyCode : ev.which);
        
        if (keycode == '13' && $('.modal-calendar-cell').css('display') == 'block') 
            $('.modal__editing-btn').click();   
    })

    $('.modal__editing-btn').click(function(e) {
        e.preventDefault();
        $('.modal-calendar-cell').submit();
    });

    $('#modal-calendar-cell__clear').click(function (e) {
        e.preventDefault();

        let timesheet = $('.modal-calendar-cell').data('timesheet');
        let worker = $('.modal-calendar-cell').data('worker');
        let date = $('.modal-calendar-cell').data('date');
        let day = $('.modal-calendar-cell').data('day');

        $.ajax({
            url: `//${window.location.host}/api/timesheet/${timesheet}/hour/clear`,
            method: 'POST',
            data: {
                'worker': worker,
                'date': date
            },
            success: (result) => {

                let classList = `timesheet__cell calendar__show worker-${worker} day-${day}`;
                if ($(`.worker-${worker}.day-${day}`).hasClass('timesheet__cell--holiday'))
                    classList += ' timesheet__cell--holiday';

                let html = `<div class="${classList}" data-date="${date}" data-worker="${worker}" data-day="${day}"
                    data-premium="0" data-retention="0" data-timesheet="${timesheet}"></div>`;

                $(`.worker-${worker}.day-${day}`).parent().html(html);

                let totalHourNode = $(`.timesheet__row.worker-${worker} .timesheet__hours .timesheet__table-text`);
                let totalHour = +totalHourNode.text() - +$('.modal-calendar-cell').data('hourse');
                totalHourNode.text(totalHour);

                let totalDaysNode = $(`.timesheet__row.worker-${worker} .timesheet__days .timesheet__table-text`);
                totalDaysNode.text(+totalDaysNode.text() - 1);

                let totalBusinessNode = $(`.timesheet__row.worker-${worker} .timesheet__business .timesheet__table-text`);
                let totalBusiness = +totalBusinessNode.text() - +$('.modal-calendar-cell').data('business');
                totalBusinessNode.text(totalBusiness);

                let totalPremiumNode = $(`.timesheet__row.worker-${worker} .timesheet__premium .timesheet__table-text`);
                let totalPremium = +totalPremiumNode.text() - +$('.modal-calendar-cell').data('premium');
                totalPremiumNode.text(totalPremium);

                let totalRetentionNode = $(`.timesheet__row.worker-${worker} .timesheet__retention .timesheet__table-text`);
                let totalRetention = +totalRetentionNode.text() - +$('.modal-calendar-cell').data('retention')
                totalRetentionNode.text(totalRetention);

                let totalSalary = +$(`.timesheet__row.worker-${worker} .timesheet__rate`).text()
                    * totalHour + totalBusiness + totalPremium - totalRetention;
                $(`.timesheet__row.worker-${worker} .timesheet__salary .timesheet__table-text`).text(totalSalary);

                $(`.worker-${worker}.day-${day}`).on('click', showCalender);

                $('.modal-calendar-cell').fadeOut();
            }
        });
    });

    $('.modal-calendar-cell').submit(function (e) {
        e.preventDefault();

        let worker = $(this).data('worker');
        let date = $(this).data('date');
        let day = $(this).data('day');
        let hourse = $(this).find('input[name="hourses"]').val();
        let comment = $(this).find('.modal__editing-area').val();
        let timesheet = $(this).data('timesheet');
        let business = $(this).find('#show-business').is(':checked') ? $(this).find('input[name="business"]').val() : null;

        let premium = $(this).find('input[name="premium"]').val();
        let retention = $(this).find('input[name="retention"]').val();

        $.ajax({
            url: `//${window.location.host}/api/timesheet/${timesheet}/hour/add`,
            method: 'POST',
            data: {
                'worker': worker,
                'date': date,
                'hourse': hourse,
                'comment': comment,
                'business': business,
                'premium': premium,
                'retention': retention
            },
            success: (result) => {
                let block = $(`.worker-${worker}.day-${day}[data-timesheet="${timesheet}"]`);
                block.html(`<div class="timesheet__table-text">${hourse}</div>`);

                block.attr('data-premium', premium);
                block.attr('data-retention', retention);

                //if (! block.hasClass('today'))
                //{
                    //block.off('click');
                    //block.removeClass('timesheet__cell--empty');
                    //block.removeClass('calendar__show');
                    block.addClass('timesheet__cell--active');
                    block.addClass('timesheet__cell--fill');

                    if (business)
                        block.attr('data-business', business);
                    else
                        block.removeAttr('data-business');

                    if (comment.trim().length != 0)
                    {
                        //block.addClass('modal__show-comment');
                        block.addClass('timesheet__comment-cell');
                        //block.addClass('calendar__comment');
                        block.attr('data-comment', comment);
                        /* block.click(function () {
                            $('.modal__comment-text').text(comment);
                            $('.modal-show-comment').fadeIn();
                        }); */
                    }
                    else
                    {
                        block.removeClass('timesheet__comment-cell');
                        block.removeAttr('data-comment');
                    }
                //}
                //else
                    //block.attr('data-comment', comment);
                let totalPremiumNode = $(`.timesheet__row.worker-${worker} .timesheet__premium .timesheet__table-text`);
                let totalPremium = +totalPremiumNode.text();
                if (+$(this).data('premium') != +premium)
                    totalPremium = totalPremium - +$(this).data('premium') + +premium;
                totalPremiumNode.text(totalPremium);

                let totalRetentionNode = $(`.timesheet__row.worker-${worker} .timesheet__retention .timesheet__table-text`);
                let totalRetention = +totalRetentionNode.text();
                if (+$(this).data('retention') != +retention)
                    totalRetention = totalRetention - +$(this).data('retention') + +retention;
                totalRetentionNode.text(totalRetention);

                let totalHourNode = $(`.timesheet__row.worker-${worker}`).length > 0 ?
                    $(`.timesheet__row.worker-${worker} .timesheet__hours .timesheet__table-text`) :
                    block.parents('.calendar__row').find('.calendar__cell--hours .calendar__cell-text');

                let totalHour = +totalHourNode.text();
                if (+$(this).data('hourse') != +hourse)
                    totalHour = totalHour - +$(this).data('hourse') + +hourse;
                totalHourNode.text(totalHour);

                if (!$(this).data('fill'))
                {
                    let totalDaysNode = $(`.timesheet__row.worker-${worker}`).length > 0 ?
                        $(`.timesheet__row.worker-${worker} .timesheet__days .timesheet__table-text`) :
                        block.parents('.calendar__row').find('.calendar__cell--days .calendar__cell-text');
                    totalDaysNode.text(+totalDaysNode.text() + 1);
                }

                let totalBusinessNode = $(`.timesheet__row.worker-${worker}`).length > 0 ?
                    $(`.timesheet__row.worker-${worker} .timesheet__business .timesheet__table-text`) :
                    block.parents('.calendar__row').find('.calendar__cell--business .calendar__cell-text');

                let totalBusiness = +totalBusinessNode.text();
                if (business != null)
                {
                    if ($(this).data('business') == undefined)
                        totalBusiness += +business;
                    else if (+$(this).data('business') != +business)
                        totalBusiness = totalBusiness - +$(this).data('business') + +business;
                }
                else if ($(this).data('business') != undefined)
                    totalBusiness -= +$(this).data('business');
                totalBusinessNode.text(totalBusiness);

                let totalSalary = +$(`.timesheet__row.worker-${worker} .timesheet__rate`).text()
                    * totalHour + totalBusiness + totalPremium - totalRetention;
                $(`.timesheet__row.worker-${worker} .timesheet__salary .timesheet__table-text`).text(totalSalary);

                /* let totalBusinessNode = $(`.timesheet__row.worker-${worker} .timesheet__business .timesheet__table-text`);
                totalBusinessNode.text(+totalBusinessNode.text() + +business);

                totalBusinessNode = block.parents('.calendar__row').find('.calendar__cell--business .calendar__cell-text');
                totalBusinessNode.text(+totalBusinessNode.text() + +business); */

                $('.modal-calendar-cell').fadeOut();
            }
        });

    })

    $('.modal__position-select').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.modal__position')
    });

    $('.modal__expenses-select').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.modal__expenses-date')
    });

    $('.modal__editing-select').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.modal__editing-box')
    });


    // tabs

    $(function () {

        $('.modal__tabs').on('click', '.modal__tab-item:not(.modal__tab-item--active)', function () {
            $(this)
                .addClass('modal__tab-item--active').siblings().removeClass('modal__tab-item--active')
                .closest('.modal__employee-card').find('.modal__employee-inner').removeClass('modal__employee-inner--active').eq($(this).index()).addClass('modal__employee-inner--active');
        });

    });

    // end tabs


    // edit

    $('.modal__edit-icon').click(function () {
        $(this).parents().children('.modal__input').removeAttr('readonly');
    })
    $('.modal__input-edit').blur(function () {
        $(this).attr('readonly', 'readonly');
    })

    $('.modal__edit-icon').click(function () {
        $(this).parents().children('.modal__parameters-text').removeAttr('readonly');
    })
    $('.modal__parameters-text').blur(function () {
        $(this).attr('readonly', 'readonly');
    })

    $('.modal__edit-icon').click(function () {
        $(this).parents().children('.modal__status').attr('contenteditable', 'true');
        $('.modal__status').focus()
    })


    $('.js-edit-pass').click(function () {
        $(this).closest('.modal__profile-row').find('.js-edit-input').removeAttr('readonly');
    })
    $('.js-edit-input').blur(function () {
        $(this).attr('readonly', 'readonly');
    })

    // end edit

    // value buttons

    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();

    });
    $('.plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();

    });

    // end value buttons

    // range slider

    let rangeSliderOptions = {
        hide_from_to: true,
        hide_min_max: true,
        onChange: function (data) {
            $('#input-subtract').val(data.from);
        }
    };
    if ($("#slider-subtract").length) $("#slider-subtract").ionRangeSlider(rangeSliderOptions);

    let rangeSliderOptions2 = {
        hide_from_to: true,
        hide_min_max: true,
        onChange: function (data) {
            $('#input-prize').val(data.from);
        }
    };
    if ($("#slider-prize").length) $("#slider-prize").ionRangeSlider(rangeSliderOptions2);

    let rangeSliderOptions3 = {
        hide_from_to: true,
        hide_min_max: true,
        onChange: function (data) {
            $('#input-salary').val(data.from);
        }
    };
    if ($("#slider-salary").length) $("#slider-salary").ionRangeSlider(rangeSliderOptions3);

    //end range slider


    if ($('#container2').length) {
        // // GRAPHIC SECOND

        Highcharts.chart('container2', {
            chart: {
                type: 'variablepie'
            },
            title: {
                text: ''
            },
            tooltip: {
                title: false,
                name: false,
                headerFormat: '',
                // pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                //     'Area (square km): <b>{point.y}</b><br/>' +
                //     'Population density (people per square km): <b>{point.z}</b><br/>'
            },
            series: [{
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: '',
                data: [{
                    name: '',
                    y: 505370,
                    z: 20
                }, {
                    name: '',
                    y: 551500,
                    z: 20
                },]
            }]
        });

        // // GRAPHIC END
    }

    $('.js-select-flat').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.calendar__flat-box')
    });

    $('.label-file').change(function () {
        if ($(this).val() != '') $(this).prev().text('Загружено: ' + $(this)[0].files.length);
        else $(this).prev().text('Загрузите удостоверение');
    });


    $('.my').change(function () {
        if ($(this).val() != '') $('.modal-inputfile__text').text('Загружено: ' + $(this)[0].files.length);
        else $('.modal-inputfile__text').text('Загрузите удостоверение');
    });

    $('.modal__close-return').click(function () {
        $('.modal-close').show()
    })
    $('.js-modal-yes').click(function (e) {
        e.preventDefault
        $('.modal-close').hide()
        $('.modal').hide()
    })
    $('.js-modal-no').click(function (e) {
        e.preventDefault
        $('.modal-close').hide()
    })

    // Загрузка фото
    $("#imgInput").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imgOutput').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });


    // Сегодняшняя дата
    function setToday(nodeId = 'todayInputDate')
    {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth();
        let todayDay = todayDate.getDate();
        let todaySum =  todayMonth + '/' + todayDay  + '/' + todayYear
        document.getElementById(nodeId).value = todaySum
    }
    if ($('#todayInputDate').length)
        setToday();

})
// Клик по фону, но не по окну.
$('.modal').click(function (e) {
    e.preventDefault
    if ($(e.target).closest('.modal__content').length == 0) {
        $(this).fadeOut();
    }
    // return false
});

$('.modal__pass-icon--show-icon').click(function () {
    $('.modal__input-password').attr('type', 'text');
    $(this).addClass('modal__pass-icon--hide')
    $('.modal__pass-icon--hide-icon').removeClass('modal__pass-icon--hide')
})
$('.modal__pass-icon--hide-icon').click(function () {
    $('.modal__input-password').attr('type', 'password');
    $(this).addClass('modal__pass-icon--hide')
    $('.modal__pass-icon--show-icon').removeClass('modal__pass-icon--hide')
})

$('.modal__show-icon').click(function () {
    $('.modal__input-pass').attr('type', 'text');
    $(this).removeClass('modal__show-icon--show')
    $(this).addClass('modal__show-icon--hidden')
    $('.modal__hidden-icon').addClass('modal__hidden-icon--show')
})
$('.modal__hidden-icon').click(function () {
    $('.modal__input-password').attr('type', 'password');
    $('.modal__input-pass').attr('type', 'password');
    $(this).removeClass('modal__hidden-icon--show')
    $(this).addClass('modal__hidden-icon--hidden')
    $('.modal__show-icon').addClass('modal__show-icon--show')
})