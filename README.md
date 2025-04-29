<<<<<<< HEAD
JavaScript/MongoDB Midterm Project

Setup Instructions:
1.Run command to start containers:
docker-compose up -d

This will build the containers making the API at http://localhost:5000

Test Instructions:
To create a new entry with powershell: 
$body = @{
    Name = Bob"
    Age = 20
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/upsertEntry" -Method Post -Body $body -ContentType "application/json"
 
(MAKE SURE TO REPLACE ENTRYID WITH THE ACTUAL ID NUMBER)
Then, after using this command you can GET:
Invoke-RestMethod -Uri "http://localhost:5000/api/getEntry/{entryId}" -Method Get

GET URL: http://localhost:5000/api/getEntry/{entryId}

To DELETE:
Invoke-RestMethod -Uri "http://localhost:5000/api/deleteEntry/{entryId}" -Method Delete

DELETE URL: http://localhost:5000/api/deleteEntry/{entryId}
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pEEsX3Jo)
>>>>>>> 654b8ae02aaec730dd17808a50c9d5e3a1c4cadb
