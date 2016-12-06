PHP developer interview questions
=================================


**General**

What are the current versions of Apache, PHP, and MySQL?

&nbsp;

&nbsp;

What is a cookie and how is it useful?

&nbsp;

&nbsp;

If you run into a problem while coding, what steps do you take to find
the answer?

&nbsp;

&nbsp;

What files are commonly found in these standard UNIX directories?

/bin

/boot

/dev

/etc

/home

/mnt

/tmp

/var

&nbsp;

&nbsp;


**HTML**

1.  When you want to show some part of a text displayed on an HTML page
    in red font color, what different possibilities are there to do
    this? What are the advantages and disadvantages of these methods?

    &nbsp;

    &nbsp;

2.  What's the difference between display inline and block?

    &nbsp;

    &nbsp;

**CSS**

1.  What is the primary advantage of CSS?

    &nbsp;

    &nbsp;

2.  Describe the different ways to have content initially hidden on a
    page?

    &nbsp;

    &nbsp;

3.  Explain the purpose and implementation of a float?

    &nbsp;

    &nbsp;

4.  Describe the inherent CSS differences between IE and Mozilla.

    &nbsp;

    &nbsp;


**Javascript**

1.  How can we submit a form without a submit button?

    &nbsp;

    &nbsp;

2.  Do you use DHTML and Javascript? Describe the projects you've used
    them in.

    &nbsp;

    &nbsp;

3.  Describe some methods to redirect a page in Javascript and PHP.

    &nbsp;

    &nbsp;


**PHP**

1.  What is the difference between \$message and \$\$message?

    &nbsp;

    &nbsp;

2.  What are the differences between PHP3, PHP4, and PHP5?

    &nbsp;

    &nbsp;

3.  How can I execute a PHP script using the command line?

    &nbsp;

    &nbsp;

4.  How can we increase the execution time of a PHP script?

    &nbsp;

    &nbsp;

5.  What are public, private, protected, and static methods?

    &nbsp;

    &nbsp;

6.  What is an abstract class and interface?

    &nbsp;

    &nbsp;

7.  What is meant by urlencode and urldecode?

    &nbsp;

    &nbsp;

8.  How do you set a session variable?

    &nbsp;

    &nbsp;

9.  How do you set a cookie? How about reading the value within the same
    page execution?

    &nbsp;

    &nbsp;

10. What are two different ways of unsetting a cookie on the user's
    machine?

    &nbsp;

    &nbsp;

11. How do you encrypt data using PHP?

    &nbsp;

    &nbsp;

12. What is the difference between an enumerated array and an
    associative/hashed array?

    &nbsp;

    &nbsp;

13. What are the differences between require, include, and
    include\_once?

    &nbsp;

    &nbsp;

14. How do you increase the allowable execution time of any PHP script?

    &nbsp;

    &nbsp;

15. What will this output?
    ```php
    <?php
    $a = false;
    $b = true;
    $c = false;
    if ($a ? $b : $c) {
        echo "false";
    } else {
        echo "true";
    }
    ?>
    ```

    &nbsp;

    &nbsp;

16. What will this output?
    ```php
    <?php
    $txt_var1 = "PHP";
    $txt_var2 = &$txt_str1;
    $txt_var2 = "MySQL";
    echo $txt_var1 . $txt_var2;
    ?>
    ```

    &nbsp;

    &nbsp;

17. What does this do?
    ```php
    <?php
    if (isset($_REQUEST))
        while(list($varname, $varvalue) = each($_REQUEST)) {
            $$varname = $variable;
        }
    ?>
    ```

    &nbsp;

    &nbsp;


**MySQL**

1.  How can we repair a MySQL table?

    &nbsp;

    &nbsp;

2.  A select query over a large table runs very slow because of the
    growing number of entries in a table. What different measures could
    be taken to improve speed?

    &nbsp;

    &nbsp;

3.  What are different types of tables in MySQL and their differences.

    &nbsp;

    &nbsp;

4.  What is the difference between GROUP BY and ORDER BY in SQL?

    &nbsp;

    &nbsp;

5.  How do you encrypt data present in a MySQL table using MySQL?

    &nbsp;

    &nbsp;

6.  What is an EXPLAIN? What does its result look like?

    &nbsp;

    &nbsp;

7.  What is an alias? What elements can be aliased and how would one do
    so?

    &nbsp;

    &nbsp;

8.  What are 3 different methods of adding data to a table?

    &nbsp;

    &nbsp;

9.  What is the difference between "DELETE FROM \[...\]" and "TRUNCATE
    TABLE \[...\]"?

    &nbsp;

    &nbsp;


**Misc**

Elaborate on the following acronyms:

LAMP

SNMP

ODBC

IMAP

TCP

PHP

SQL

ASP

SSL

API

XML

XSLT

XHTML

AJAX

JSON

SOAP

JAVA
