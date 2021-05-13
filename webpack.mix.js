const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/views/front/assests/sass/style.scss', 'public/front/assets/css/style.css')

    .styles([
        'resources/views/front/assests/css/animate.css',
        'resouces/views/front/assets/css/icomoon.css',
        'resouces/views/front/assets/css/bootstrap.css',
        'resouces/views/front/assets/css/magnific-popup.css',
        'resouces/views/front/assets/css/owl.carousel.min.css',
        'resouces/views/front/assets/css/owl.theme.default.min.css',
    ], 'public/front/assets/css/vendor.css')

    .scripts([
        'resources/views/front/assests/js/modernizr-2.6.2.min.js'
    ], 'public/front/assets/js/modernizr.js')

    .scripts([
        'resources/views/front/assests/js/respond.min.js'
    ], 'public/front/assets/js/respond.min.js')

    .scripts([
        'resources/views/front/assests/js/jquery.min.js',
        'resources/views/front/assests/js/jquery.easing.1.3.js',
        'resources/views/front/assests/js/bootstrap.min.js',
        'resources/views/front/assests/js/jquery.waypoints.min.js',
        'resources/views/front/assests/js/jquery.stellar.min.js',
        'resources/views/front/assests/js/owl.carousel.min.js',
        'resources/views/front/assests/js/jquery.countTo.js',
        'resources/views/front/assests/js/jquery.magnific-popup.min.js',
        'resources/views/front/assests/js/magnific-popup-options.js',
    ], 'public/front/assets/js/vendor.js')

    .scripts([
        'resources/views/front/assests/js/main.js'
    ], 'public/front/assets/js/main.js')

    .copyDirectory('resources/views/front/assests/fonts', 'public/front/assets/fonts')
    .copyDirectory('resources/views/front/assests/images', 'public/front/assets/images')

    .options({
        processCssUrls: false
    })

    .version();


