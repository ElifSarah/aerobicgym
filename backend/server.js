const express=require('express');
const cors=require('cors');
const mongoose=require ('mongoose');
require('dotenv').config();
const app=express();
const port= process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('mongoDB connection established successfully');
})

const exercisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');
const classesRouter=require('./routes/classes');
const membersRouter=require('./routes/members');
const trainersRouter=require('./routes/trainers');
const equipmentsRouter=require('./routes/equipments');


app.use('/exercises',exercisesRouter);
app.use('/classes',classesRouter);
app.use('/members',membersRouter);
app.use('/trainers',trainersRouter);
app.use('/equipments',equipmentsRouter);
app.use('/users',usersRouter);



app.listen(port,()=>{
    console.log('server is running on port: ${port}');
});
