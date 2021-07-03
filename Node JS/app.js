
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routers');
const  routes=require('./routes/routers');
// express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost/student',{ useNewUrlParser: true ,useUnifiedTopology:true, useCreateIndex :true } )
    .then((res)=>{
        app.listen(3000);
        console.log('conected');
    })
    .catch((err)=>{
        console.log('error')
    });

app.use(routes);

// // mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//   const student = new Student({
//     title: 'new blog',
//     snippet: 'about my new blog',
//     body: 'more about my new blog',
//     roll_no:12
//   })

//   student.save()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });


// 404 page
