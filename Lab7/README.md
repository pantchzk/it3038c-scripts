# Lab 7: Windows update status viewer

The first step to using this program is to install the PSWindowsUpdate package in powershell using the following command:

```
Install-Module -Name PSWindowsUpdate
```

When being ran on a Windows machine, this program first states if there is an update currently being installed or not,

The program then displays the time and date of the most recent update that was installed.

User input is then required to search up a keyword within the history of updates. The first 25 updates containing that keyword are returned (good keywords to try are "Intel" and "Windows").
