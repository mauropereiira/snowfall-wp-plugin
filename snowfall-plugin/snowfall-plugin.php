<?php
/*
Plugin Name: Snowfall Plugin
Description: Adds a snowfall effect to every page of the website.
Version: 1.0
Author: Mauro Pereira
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function snowfall_enqueue_scripts() {
    // Enqueue the snowfall JavaScript file
    wp_enqueue_script('snowfall-js', plugin_dir_url(__FILE__) . 'snowfall.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'snowfall_enqueue_scripts');
