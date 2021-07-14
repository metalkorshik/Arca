$(document).ready(function (){
    $('.calendar__pick-date').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('.calendar__date-selector')
    });


    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }

    $('.calendar__trip-select').select2({
        minimumResultsForSearch: Infinity
    })

    $('.js-trip-save').click(function (){
        $('.calendar__trip-select').val(null).trigger('change')
        $('.calendar__trip-input').val('');
    })
})