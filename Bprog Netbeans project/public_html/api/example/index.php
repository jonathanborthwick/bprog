<?php
include 'Specific.php';
header('Content-Type: application/json');

$functionName = $_GET['f'];

$data = "";
if (isset($_POST)) {
    //$data = $_POST['data'];
    $data = file_get_contents("php://input");//pass the data in as rawe in this form: {"thing":"its value"}
}
$c = new Chooser($functionName, $data);
$c->runFunction();

class Chooser {

    private $functionName, $data;

    public function __construct($functionName, $data) {
        $this->data = $data;
        $this->functionName = $functionName;
    }

    function runFunction() {
        //$names = $GLOBALS['functionNames'];
        $names = Specific::$functionNames;

        $len = count($names);
        $found = false;

        $inst = new Specific($this->data);

        if (!$this->functionName) {
            $inst->defaultFunction();
        } else {
            for ($i = 0; $i < $len; $i++) {
                $thisFunction = $names[$i];
                if ($thisFunction == $this->functionName) {
                    $reflectionMethod = new ReflectionMethod('Specific', $thisFunction);
                    $reflectionMethod->invoke($inst);
                    $found = true;
                    goto found;
                }
            }
            found:
                if($found == false){
                    $inst->defaultFunction();
                }
        }
    }  
}
?>

