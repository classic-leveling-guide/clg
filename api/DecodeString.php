<?php
require "vendor/autoload.php";

use SoftCreatR\WeakAuras\Decoder;


// Encoded WeakAuras string
$encoded =  $_GET['input'];

// Perform decode
$decoded = Decoder::decodeAura($encoded);

// Print the result
echo json_encode($decoded);
?>