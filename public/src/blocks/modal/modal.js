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

    $('.modal__consumption-modal').click(function () {
        $('.modal-consumption').fadeIn(100);
    });
    $('.modal__consumption-show').click(function () {
        $('.modal-consumption').fadeIn();
    });

    $('.modal__editing').click(function () {
        $('.modal-editing').fadeIn();
    });

    $('.modal__show-comment').click(function () {
        $('.modal-show-comment').fadeIn();
    });

    $('.modal__apartments').click(function () {
        $('.modal-apartments').fadeIn();
        return false;

    });

    $('.modal__flat').click(function () {
        $('.modal-flat').fadeIn();

    });

    $('.calendar__show').click(function (){
        $('.modal-calendar-cell').fadeIn();
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
        $(this).parents().children('.modal__input').removeAttr('disabled');
    })
    $('.modal__input-edit').blur(function () {
        $(this).attr('disabled', 'disabled');
    })

    $('.modal__edit-icon').click(function () {
        $(this).parents().children('.modal__parameters-text').removeAttr('disabled');
    })
    $('.modal__parameters-text').blur(function () {
        $(this).attr('disabled', 'disabled');
    })

    $('.modal__edit-icon').click(function () {
        $(this).parents().children('.modal__status').attr('contenteditable', 'true');
        $('.modal__status').focus()
    })


    $('.js-edit-pass').click(function () {
        $(this).closest('.modal__profile-row').find('.js-edit-input').removeAttr('disabled');
    })
    $('.js-edit-input').blur(function () {
        $(this).attr('disabled', 'disabled');
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


    $('.modal__show-icon').click(function () {
        $('.modal__input-pass').attr('type', 'text');
        $(this).removeClass('modal__show-icon--show')
        $(this).addClass('modal__show-icon--hidden')
        $('.modal__hidden-icon').addClass('modal__hidden-icon--show')
    })

    $('.modal__hidden-icon').click(function () {
        $('.modal__input-pass').attr('type', 'password');
        $(this).removeClass('modal__hidden-icon--show')
        $(this).addClass('modal__hidden-icon--hidden')
        $('.modal__show-icon').addClass('modal__show-icon--show')
    })

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
    if ($('#todayInputDate').length){
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth();
        let todayDay = todayDate.getDate();
        let todaySum =  todayMonth + '/' + todayDay  + '/' + todayYear
        document.getElementById('todayInputDate').value = todaySum
    }

})
// Клик по фону, но не по окну.
$('.modal').click(function (e) {
    e.preventDefault
    if ($(e.target).closest('.modal__content').length == 0) {
        $(this).fadeOut();
    }
    // return false
});

