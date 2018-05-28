<?php
header('Location: vadim.html');
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$user_name = $_POST['user_name'];
$email_from = $_POST['email_from'];
$message = $_POST['user_message'];
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPDebug = 1;
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Host = 'smtp.gmail.com';  						 // Specify main and backup SMTP servers
$mail->Username = 'vadimreddle@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'vadimreddle2018'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('vadimreddle@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('info@reddle.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка с сайта https://reddleprojects.ru/portfolio/vadim.html';
$mail->Body    = '' .$user_name . ' оставил заявку, его почта ' .$email_from. '<br>Сообщение: ' .$message;
$mail->AltBody = '';
// if(!$mail->send()) {
//     // echo('error');
//     // exit;
// } else {
//     // header('Location: vadim.html');
//     // exit;
// }
?>