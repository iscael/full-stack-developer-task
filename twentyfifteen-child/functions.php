<?php 

/*
==========================================================
Function definition of the cta calling, it receive the 
passing data on the tag calling, register, send parameters
and enqueue the script 
==========================================================
*/

function cta_calling($attr){

	shortcode_atts( array(
		'title' => '',
		'remaining' => ''
		), $attr);

	wp_register_script( 'customscript', get_stylesheet_directory_uri().'/js/script.js' );

	wp_localize_script( 'customscript', 'php_vars', $attr);

	wp_enqueue_script( 'customscript' );

	$html = '<div id="cta">
				<div class="cta_left">

				</div>
				<div class="cta_center">
					<div>
						<div class="countdown_container">
							<div class="cta_countdown">
								<div class="cta_countdown_text">Days</div>
								<div class="cta_countdown_number" id="cta_countdown_days">01</div>
							</div>
							<div class="cta_countdown">
								<div class="cta_countdown_text">Hours</div>
								<div class="cta_countdown_number" id="cta_countdown_hours">01</div>
							</div>
							<div class="cta_countdown">
								<div class="cta_countdown_text">Mins</div>
								<div class="cta_countdown_number" id="cta_countdown_mins">01</div>
							</div>
							<div class="cta_countdown">
								<div class="cta_countdown_text">Secs</div>
								<div class="cta_countdown_number" id="cta_countdown_secs">01</div>
							</div>
						</div>
						<div class="cta_left_countdown_text">Remaining time to place bet</div>
					</div>
					<div class="cta_lower_center">
						<div class="cta_title" id="cta_title"></div>
						<div class="cta_subtitle">Hurry up! <strong>25</strong> people have placed this bet</div>
					</div>
				</div>
				<div class="cta_right">
					<button class="cta_button" href="/cta"> BET AND WIN</button>
					<div class="cta_underbutton_text">Trusted</div><div class="cta_underbutton_text">Sportsbettin.ag</div>
				</div>
			</div>';

	return $html;
}

/*
==========================================================
Shortcode add and definition, this shortcode receive the
title and the remaining time for the counter.
==========================================================
*/
add_shortcode('cta', 'cta_calling');




?>