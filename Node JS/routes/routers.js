const Student = require('../models/student');

const express=require('express');

const router=express.Router();


router.post('/add-student',(req,res)=>{   //done
    // res.sendFile('index');
    console.log(req.body);
    const student=new Student(req.body); //just like insert into
    student.save()
        .then((result)=>{
            res.send('saved');
        })
        .catch((err)=>{
            console.log(err);
        })
        
    // const student = new Student({
    //     roll_no:12,
    //     name:'utuu hajare',
    //     class:'10th',
    //     division:'A',
    //     dateofbirth:'1998-04-15',
    //     parent_mobile_no:9637851036
    // });
    // student.save()
    //         .then((result)=>{
    //             res.send(result);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
            
    
    //res.sendFile('./views/index .html',{root:__dirname});
});

router.get('/get-student/:rollno',(req,res)=>{  //find student by roll no

    const roll=req.params.rollno;
    Student.find({ roll_no: roll})
        .then((result)=>{
            res.send(result);
        })
        .catch(err=>{
            console.log(err);
        })
        // .then((result)=>{
        //     res.send({
        //             roll_no:result.rollno,
        //             name:result.name,
        //             class:result.class,
        //             division:result.division,
        //             dateofbirth:result.dateofbirth,
        //             parent_mobile_no:result.parent_mobile_no
        //         });
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
});

router.get('/fetch-class/:class',(req,res)=>{ //fetch class
    const my_class=req.params.class;
    Student.find({ class: my_class})
        .then((result)=>{
            res.send(result);
        })
        .catch(err=>{
            console.log(err);
        })
})

router.get('/birth/:date',(req,res)=>{ //fetch class
    const my_date=req.params.date;
    Student.find({ dateofbirth: my_date})
        .then((result)=>{
            res.send(result);
        })
        .catch(err=>{
            console.log(err);
        })
})

router.put('/update/:name',(req,res)=>{ //update
    Student.findOneAndUpdate({name:req.params.name},{$set:{name:req.body.name}})
        .then(result=>{
            res.send('updated')
        })
        .catch(err=>{
            console.log('error')
        })
})

router.delete('/delete/:rollno',(req,res)=>{ //delete
    const roll=req.params.rollno;
    Student.findOneAndDelete({ roll_no: roll})
    .then(result=>{
        res.send('record deleted');
    })
    .catch(err=>{
        console.log(err);
    })
})

router.use((req, res) => {
    res.send('invalid request');
  });

  module.exports=router;