<?php

$myemail  = "thegraniteshopllc@gmail.com";

$username = check_input($_POST['username'], "Enter your name");
$phone  = check_input($_POST['phone']);
$email    = check_input($_POST['email']);
$comments = check_input($_POST['comments'], "Write your comments");
$subject = "Webform submission";


$message = "Hello!

Your contact form has been submitted by:

Name: $username
E-mail: $email
Phone: $phone

Message:
$comments

End of message
";

mail($myemail, $subject, $message);

header('Location: ../formsent.html');
exit();
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>