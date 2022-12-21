const express = require('express');
const path = require('path');
const fs = require('fs');

const { users } = require('./dataBase/users-info.js');

const app = express();

// create
app.post('/users/:userId/:userName/:userEmail', (req,res) => { 

    const { userId } = req.params;
    const { userName } = req.params;
    const { userEmail } = req.params;

    users[userId] = {name: userName, email: userEmail}
    res.json(users[userId]);
});

//read
app.get('/users/:userId', (req,res) => { 

    const { userId } = req.params;

    const user = users[userId-1]

    if(!user){
        res.json("Unfound user with this id");
    }
    else{
        res.json(user);
    }

});

//update - in work
// app.put('/users', (req,res) => { 

// });


// app.delete('/users', (req,res) => { 

// });


app.listen(5000, () => {
    console.log("Server started.")
});

