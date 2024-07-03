<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission
    $name = $_POST["name"];
    $email = $_POST["email"];
    // You can process other fields similarly

    // Example: Saving to a file
    $file = $_FILES["resume"];
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($file["name"]);

    if (move_uploaded_file($file["tmp_name"], $targetFile)) {
        echo "Resume uploaded successfully.";
    } else {
        echo "Error uploading file.";
    }
}
?>
