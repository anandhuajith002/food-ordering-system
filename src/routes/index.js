import express from 'express';
import db from './../../server.js';

const router = express.Router();

router.post('/instable1',async(req,res) => {
    try{
    const {food,price} = req.body;        
     const rows = await db.query("insert into table1 values ($1,$2)",[food,price]);
     console.log(rows.rows)
    res.status(201).json("Table Successfully inserted");  
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})


router.get('/gettable1',async(req,res) => {
    try{   
     const rows = await db.query("select * from table1");
     console.log(rows.rows)
    res.status(201).json(rows.rows);  
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.post('/insertemployee_details',async(req,res) => {
    try{
        const{employee_id,name,age,gender,position,salary,datehired}=req.body;
         const rows = await db.query("insert into employee_details values ($1,$2,$3,$4,$5,$6,$7)",[employee_id,name,age,gender,position,salary,datehired]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully inserted");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.get('/insertfood',async(req,res) => {
    try{
        //const{name,price,availability}=req.body;
        //  const rows = await db.query("insert into food values ($1,$2,$3)",[name,price,availability]);
        const rows = await db.query("select * from admindetails");

        console.log(rows.rows)
        res.status(201).json("Table Successfully inserted");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.post('/insertresources',async(req,res) => {
    try{
        const{name,quantity,supply_source,defective}=req.body;
         const rows = await db.query("insert into resources values ($1,$2,$3,$4)",[name,quantity,supply_source,defective]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully inserted");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.post('/insretkitchen',async(req,res) => {
    try{
        const{name,quantity,packed}=req.body;
         const rows = await db.query("insert into kitchen values ($1,$2,$3)",[name,quantity,packed]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully inserted");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.post('/insertbilling',async(req,res) => {
    try{
        const{bill_id,billingdate,amount,type_of_payment}=req.body;
         const rows = await db.query("insert into billing values ($1,$2,$3,$4)",[bill_id,billingdate,amount,type_of_payment]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully inserted");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.delete('/deletestaff',async(req,res) => {
    try{
        const{employee_id}=req.body;
        const rows = await db.query("delete from staff where employee_id=($1)",[employee_id]);
        console.log(rows.rows)
        res.status(201).json("Deleted Successfully");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
    }
})

router.delete('/deletefood',async(req,res) => {
    try{
        const{name}=req.body;
        const rows = await db.query("delete from food where name=($1)",[name]);
        console.log(rows.rows)
        res.status(201).json("Deleted Successfully");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
    }
})

router.delete('/deleteresource',async(req,res) => {
    try{
        const{name}=req.body;
        const rows = await db.query("delete from resource where name=($1)",[name]);
        console.log(rows.rows)
        res.status(201).json("Deleted Successfully");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
    }
})

router.delete('/deletekitchen',async(req,res) => {
    try{
        const{name}=req.body;
        const rows = await db.query("delete from kitchen where name=($1)",[name]);
        console.log(rows.rows)
        res.status(201).json("Deleted Successfully");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
    }
})

router.delete('/deletebilling',async(req,res) => {
    try{
        const{bill_id}=req.body;
        const rows = await db.query("delete from billing where bill_id=($1)",[bill_id]);
        console.log(rows.rows)
        res.status(201).json("Deleted Successfully");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
    }
})

router.put('/updateemployee_details',async(req,res) => {
    try{
        const{employee_id,name,age,gender,position,salary,datehired}=req.body;
         const rows = await db.query("update staff set name=$1,age=$2,gender=$3,position=$4,salary=$5,datehired=$6 where employee_id=$7 ",[name,age,gender,position,salary,datehired,employee_id]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully updated");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.put('/updatefood',async(req,res) => {
    try{
        const{name,price,availability}=req.body;
         const rows = await db.query("update food set price=$1,availability=$2 where name=$3 ",[price,availability,name]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully updated");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

router.put('/updateresources',async(req,res) => {
    try{
        const{name,quantity,suppy_source,defective}=req.body;
         const rows = await db.query("update resources set quantity=$1,supply_source=$2,defective=$3 where name=$4 ",[quantity,supply_source,defective,name]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully updated");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

    
router.put('/updatekitchen',async(req,res) => {
    try{
        const{name,quantity,packed}=req.body;
         const rows = await db.query("update kitchen set quantuty=$1,packed=$2 where name=$3 ",[quantity,packed,name]);
         console.log(rows.rows)
        res.status(201).json("Table Successfully updated");
    }
    catch(err)
    {
        res.status(400).json({ message:err });
        console.log(err);
    }
    
})

// router.get('/api', (req, res) => {
//     res.status(200).send({
//       success: 'true',
//       message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
//       version: '1.0.0',
//     });
//   });

export default router;