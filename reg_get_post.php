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
        $name = $_POST['name'];
        $number = $_POST['number'];
        $email = $_POST['email'];
        $pass = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $course = 'A2';

        //Submit data
        if (isset($_POST['submit'])) {
            $qry = "INSERT INTO register (name,number,email,password,course) VALUES ('$name','$number','$email','$pass','$course')";
            $res = $conn->query($qry);
            echo "Successfully registered!";
        }

        //Get users
        elseif (isset($_POST['show'])) {
            // Write a SQL query to select data from a table
            $qry = "SELECT * FROM register";

            // Execute the query and store the result set
            $result = $conn->query($qry);

            // Check if the result set is not empty
            if ($result->num_rows) {
                // Output the data of each row as an HTML table
                echo "<table border='1'>";
                echo "<tr><th>Name</th><th>Number</th><th>Email</th><th>Password</th><th>Coourse</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row["name"] . "</td>
                              <td>" . $row["number"] . "</td>
                              <td>" . $row["email"] . "</td>
                              <td>" . $row["password"] . "</td>
                              <td>" . $row["course"] . "</td></tr>";
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
