<?php

/**
 * Specific functions that can be called based on the passed in url string variable
 * Every version of index.php can be exactly the same, however each Specific.php
 * will have function names specific to the folder into which it is placed
 * this example would have each of these functiones called by a url like:
 * http://localhost/blah/api/example/?f=printTest3
 * that will run the printTest3 function
 * The POSTED data from the parent class is carried into the constructor here
 *
 * @author Jonathan Borthwick
 */
class Specific {

    public static $functionNames = [];
    private $data = ["printTest2", "printTest3"];

    public function __construct($data) {
        $this->data = $data;
    }

    function defaultFunction() {
        echo("{\"result\":\"Running default\"}");
    }

    function printTest2() {
        echo("{\"result\":\"test 2 invoked via reflection\",\"data\":" . $this->data . "}");
    }

    function printTest3() {
        echo("{\"result\":\"test 3\",\"data\":" . $this->data . "}");
    }

}
?>