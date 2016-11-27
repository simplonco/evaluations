NOM :

---

```php
$a .= "a";
$a .= "b";
$a .= "c";
```
What is the value of `$a` ?

---

```php
$a = 4;
for ($b = 0; $b <= $a; $b++) {
    $c++;
}
```
What is the value of `$c` ?

---

```php
$a[] = "a";
$a[] = "b";
$a[] = "c";
```
What is the value of `$a[2]` ?

---

```php
$a = 200.5;
$b = 2005;
$c = "2005";
```
Which of the above variables's type is integrer ?

---

```php
$a = '1';
$b = &$a;
$b = "2$a";
```
What is the value of `$a` ?

---

```php
$a = "abc";
$b = substr($a, 0, -1);
```
What is the value of `$b` ?

---

```php
$a = true;
$b = "true";
$c[] = "true";
```
Which of the above variables's type is string ?

---

```php
$a = "b";
$b = "a";
```
What is the value of `${$b}` ?

---

```php
$a = array("a","b","c");
foreach ($a as $b) {
    $c++;
}
```
What is the value of `$c` ?

---

```php
$a = "0";
$b = "0";
if ($a != "1" && $b == "1" || $a != "0" || $b != "1") {
    $d = "0";
} else {
    $d = "1";
}
```
What is the value of `$d` ?

---

```php
$a = "post_processed_string";
$b = array("post_", "_");
$c = array("", " ");
$d = ucwords(str_replace($b,$c,$a));
```
What is the value of `$d` ?

---

```php
$a = "<tt>some</tt><b>html</b>";
preg_match("/<\w?>(\w*?)<\/\w?>/",$a,$b);
```
What is the value of `$b[1]` ?
