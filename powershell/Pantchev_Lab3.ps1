function getIP{
    (get-netipaddress).ipv4address | Select-String "192*"
}

$IP = getIP
$MAJORVERSION = $HOST.Version.Major
$NAME= $env:computername
$DATE = Get-Date -UFormat "%B %e %Y"
$DAYOFWEEK = Get-Date -UFormat "%A"
$BODY = ("This machine's IP is $IP. This computer's hostname is $NAME. My current major version of Powershell is $MAJORVERSION. Today's day is $DAYOFWEEK, $DATE.")

Write-Host ($BODY)

Send-MailMessage -To "pantchzk@mail.uc.edu" -From "zpantchev@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)

#Commands to create and delete output to a text file in the root of C:
Write-Host ($BODY) | out-file C:\Pantchzk_Lab3.txt
Remove-Item C:\Pantchzk_Lab3.txt