// Подключение Jquery
import $ from '../../../libs/js/jquery.min';

window.jQuery = $;
window.$ = $;


window.mobileWidth = 1279;
window.mobileWidthSmall = 768;

// Подключение кастомных глобальных переменных и универсальных функций
require('../../../libs/js/customLib.js');

// Подключение плагинов
require('../../../plugins/menu.js');

require('../../../plugins/owlcarousel2/owl.carousel.min.js');
import '../../../plugins/owlcarousel2/assets/owl.carousel.min.css';

// Подключение Select 2

require('../plugins/select2/dist/js/select2.min');
import '../plugins/select2/dist/css/select2.min.css';

// Подключение Highcharts

// require('../plugins/highcharts/code/highcharts.js');
// require('../plugins/highcharts/code/highcharts-more.js');
// require('../plugins/highcharts/code/modules/solid-gauge.js');


// Подключение Ion Range Slider

require('../plugins/ion-range-slider/js/ion.rangeSlider.min');
import '../plugins/ion-range-slider/css/ion.rangeSlider.min.css';

// Подключение jQuery UI

require('../plugins/jquery-ui/jquery-ui.min.js');
import '../plugins/jquery-ui/jquery-ui.min.css';

// Подключение Masked input

require('../plugins/mask-input/dist/jquery.maskedinput.min');
