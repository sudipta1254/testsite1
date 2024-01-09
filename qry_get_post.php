<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
        $userId = $_POST['userId'];
        $courseId = $_POST['courseId'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $query = $_POST['query'];

        //Submit data
        if (isset($_POST['submit'])) {
            $sql = "INSERT INTO query (userId,courseId,name,email,query) VALUES ('$userId','$courseId','$name','$email','$query')";
            $res = $conn->query($sql);
            echo "Successfully registered!";
        }

        //Get users
        elseif (isset($_POST['show'])) {
            // Write a SQL query to select data from a table
            $sql = "SELECT * FROM query";

            // Execute the query and store the result set
            $result = $conn->query($sql);

            // Check if the result set is not empty
            if ($result->num_rows > 0) {
                // Output the data of each row as an HTML table
                echo "<table border='1'>";
                echo "<tr><th>Query ID</th><th>User ID</th><th>Course</th><th>Name</th><th>Email</th><th>Query</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row["queryId"] . "</td>
                              <td>" . $row["userId"] . "</td>
                              <td>" . $row["courseId"] . "</td>
                              <td>" . $row["name"] . "</td>
                              <td>" . $row["email"] . "</td>
                              <td>" . $row["query"] . "</td></tr>";
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
