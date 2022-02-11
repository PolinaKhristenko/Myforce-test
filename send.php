<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['debt'])) {$debtSum = $_POST['debt'];}
    if (isset($_POST['estate'])) {$estate = $_POST['estate'];}
    if (isset($_POST['deal'])) {$deal = $_POST['deal'];}
    if (isset($_POST['consult'])) {$consult = $_POST['consult'];}

    if ($name=="" or $phone=="" or $debtSum=="" or $estate=="" or $deal=="" or $consult=="") {
        echo "Пожалуйста, заполните все поля";
    }

    $fp = fopen('forms/form.txt', 'a+'); 
    $data = 'ФИО: ' . $name . ' Телефон: ' . $phone . ' Общая сумма долга: ' . $debtSum . ' Есть ли имущество: ' . $estate . ' Крупные сделки за 3 года: ' .  $deal . ' Встреча: ' . $consult . "\r\n"; 
    fwrite($fp, $data); 
    fclose($fp); 
    exit();
}

?>