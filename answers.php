<?php

$a .= "a";
$a .= "b";
$a .= "c";

// What is the value of `$a` ?
echo "Answer: ".$a."\n";
// => Answer: abc


$a = 4;
for ($b = 0; $b <= $a; $b++) {
    $c++;
}

// What is the value of `$c` ?
echo "Answer: ".$c."\n";
// => Answer: 5


$a[] = "a";
$a[] = "b";
$a[] = "c";

// What is the value of `$a[2]` ?
echo "Answer: ".$a[2]."\n";
// PHP Warning:  Cannot use a scalar value as an array
// => Answer:


$a = 200.5;
$b = 2005;
$c = "2005";

// Which of the above variables's type is integrer ?
// $b


$a = '1';
$b = &$a;
$b = "2$a";

// What is the value of `$a` ?
echo "Answer: ".$a."\n";
// => Answer: 21


$a = "abc";
$b = substr($a, 0, -1);

// What is the value of `$b` ?
echo "Answer: ".$b."\n";
// => Answer: ab


$a = true;
$b = "true";
//$c[] = "true"; (throw a Fatal Error)

// Which of the above variables's type is string ?
// $b


$a = "b";
$b = "a";

// What is the value of `${$b}` ?
echo "Answer: ".${$b}."\n";
// => Answer: a


$a = array("a","b","c");
foreach ($a as $b) {
    $c++;
}

// What is the value of `$c` ?
echo "Answer: ".$c."\n";
// => Answer: undefined


$a = "0";
$b = "0";
if ($a != "1" && $b == "1" || $a != "0" || $b != "1") {
    $d = "0";
} else {
    $d = "1";
}

// What is the value of `$d` ?
echo "Answer: ".$d."\n";
// => Answer: 0
// PHP Warning:  ucwords() expects parameter 1 to be string


$a = "post_processed_string";
$b = array("post_", "_");
$c = array("", " ");
$d = ucwords(str_replace($b,$c,$a));

// What is the value of `$d` ?
echo "Answer: ".$d."\n";
// => Answer:


$a = "<tt>some</tt><b>html</b>";
preg_match("/<\w?>(\w*?)<\/\w?>/",$a,$b);

// What is the value of `$b[1]` ?
echo "Answer: ".$b[1]."\n";
// => Answer: html
