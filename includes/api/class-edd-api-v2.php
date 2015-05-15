<?php
/**
 * Easy Digital Downloads API V13
 *
 * @package     EDD
 * @subpackage  Classes/API
 * @copyright   Copyright (c) 2015, Pippin Williamson
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       2.4
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * EDD_API_V13 Class
 *
 * The base version API class 
 *
 * @since  2.4
 */
class EDD_API_V2 extends EDD_API_Base {

	public function get_discounts( $discount = null ) {
		return array();
	}

}