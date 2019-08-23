<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);
require "vendor/autoload.php";

use SoftCreatR\WeakAuras\Decoder;


// Encoded WeakAuras string
$encoded =  $_GET['input'];
echo $encoded;
// Perform decode
$decoded = Decoder::decodeAura($encoded);

// Print the result
echo json_encode($decoded);
?>