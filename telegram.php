<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$work = $_POST['work'];
$wishes = $_POST['wishes'];
$token = "5656187304:AAEk1Y4kKqMPtZQBupq8_vWvKzMh-dJfKS4";
$chat_id = "-877367461";
$arr = array(
  'Имя клиента: ' => $name,
  'Email: ' => $email,
  'Телефон: ' => $phone,
  'Тип работы: ' => $work,
  'Заметки к работе: ' => $wishes
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}

?>