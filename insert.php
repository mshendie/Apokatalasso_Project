<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $first_name = $_POST['first_name'];
     $last_name = $_POST['last_name'];
     $email = $_POST['email'];
     $date_of_brith = $_POST['date_of_birth'];
     $location = $_POST['location'];
     $sql = "INSERT INTO users (first_name,last_name,email,date_of_birth,location)
     VALUES ('$first_name','$last_name','$email','$date_of_birth,'$location')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>