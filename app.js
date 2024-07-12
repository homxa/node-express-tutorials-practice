const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Users = require('users');

app.post('/api/users',async (req,res)=>{

  try {
    const listofUsers =  await Users.create(req.body)

    res.status(201).json(listofUsers);


  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

