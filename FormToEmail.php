<?php
if(!isset($_POST['submit']))
{
    echo"Error, Please submit email through the form.";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate Input
if(empty($name)||empty($visitor_email))
{
    echo "Name and email required.";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Please check your email and resubmit";
    exit;
}

$email_from = 'ryan.jfoster94@gmail.com';   // Update this before launching site
$email_subject = "New Form submission";
$email_body = "New message from $name. on club website. \n".
    "Here is the message: \n $message";
$to = "ryan.jfoster94@gmail.com";              //Update this before launching site
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";


// Function to validate against any email injection attempts
function IsInjected($str)
{
    $injections = array('(\n+)',
        '(\r+)',
        '(\t+)',
        '(%0A+)',
        '(%0D+)',
        '(%08+)',
        '(%09+)'
    );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
    {
        return true;
    }
    else
    {
        return false;
    }
}
