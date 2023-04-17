$Updating = Get-WUInstallerStatus
#Determines where there is a current Windows installation occuring

if ($Updating = $false)
{
    Write-Output "A Windows update is being installed"
}
else
{

    Write-Output "A Windows update is not currently being installed `n"
}

#Gets the time and date of the latest update
$Latest = Get-WULastResults
$Date = $Latest.LastSearchSuccessDate


Write-Output "The latest update was installed $Date `n" 


$UpdateQuery = Read-Host "Enter a keyword for updates you would like to view the history of"

#Searches the Title field of the update history and retrieves the first 25 results. Good keywords to test are Windows or Intel on a Windows machine
Get-WUHistory | Where-Object {$_.Title -match $UpdateQuery} | Select-Object -First 25
