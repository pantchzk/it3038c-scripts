# Yum log to HTML program

by: Zackary Pantchev

This code uses node.js to read the log file in the directory /var/log/yum.log and displays the contents on a webpage using a localized web server utilizing port 3000. This log file displays the time, date, and name of installs and upgrades used through yum.


## Requirements

- Use a CentOS or Linux operating system that uses a similar filesystem
- Have node.js installed (by running the command "sudo yum install nodejs")
- Root access to the machine this script is being ran on


## Instructions to run
1. Open the terminal
2. Use the cd command to navigate to the directory of the downloaded script
3. Run the command "sudo node Pantchev_Project2.js"


## Viewing the expected output
1. After running the command, check that the terminal displays the output "Server is listening on port 3000"
2. After confirming this message appeared, open your preferred web browser and enter "http://localhost:3000/" into the url bar at the top of your web browser, and hit enter
3. A web page should load and now display the contents of the yum.log file. Each line of the document represents a different event, and each line contains the date, time, status (whether the package was installed or updated), then the package name in that order.





