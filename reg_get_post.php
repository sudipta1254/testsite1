<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <?php
        //Define database parameter
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "miniproject";

        // Create a connection object using MySQLi
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check if the connection is successful
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        //Get all fields from form and store them in variables
        $courseId = $_POST['courseId'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $pass= $_POST['password'];
        $gender = $_POST['gender'];
        $learnMode = $_POST['learnMode'];

        //Submit data
        if (isset($_POST['submit'])) {
            $qry = "INSERT INTO registration (courseId,name,email,password,gender,learnMode) VALUES ('$courseId','$name','$email','$pass','$gender','$learnMode')";
            $res = $conn->query($qry);
            echo "Successfully registered!";
        }

        //Get users
        elseif (isset($_POST['show'])) {
            // Write a SQL query to select data from a table
            $qry = "SELECT * FROM registration";

            // Execute the query and store the result set
            $result = $conn->query($qry);

            // Check if the result set is not empty
            if ($result->num_rows > 0) {
                // Output the data of each row as an HTML table
                echo "<table border='1'>";
                echo "<tr><th>User ID</th><th>Course</th><th>Name</th><th>Email</th><th>Password</th><th>Gender</th><th>Learn Mode</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row["userId"] . "</td>
                              <td>" . $row["courseId"] . "</td>
                              <td>" . $row["name"] . "</td>
                              <td>" . $row["email"] . "</td>
                              <td>" . $row["password"] . "</td>
                              <td>" . $row["gender"] . "</td>
                              <td>" . $row["learnMode"] . "</td></tr>";
                }
                echo "</table>";
            } else {
                // No data found
                echo "0 results";
            }
        }

        // Close the connection
        $conn->close();
    ?>
</body>
</html>
