<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validate inputs
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "All fields are required.";
        exit;
    }

    // Email setup
    $to = "your-email@example.com"; // Replace with your email address
    $headers = "From: $email";
    $full_message = "Name: $name\nPhone: $phone\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $full_message, $headers)) {
        echo "Your message was sent successfully.";
    } else {
        http_response_code(500);
        echo "Failed to send your message. Please try again.";
    }
} else {
    http_response_code(405); // Method not allowed
    echo "Invalid request method.";
}
?>
