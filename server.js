const {shutDownComputer}=require('shutdown-computer');
const express=require('express');
const app=express();
app.use(express.json());

app.get('/shutit',(req,res)=>{

    shutDownComputer();
});


//Serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //Set a static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port =process.env.PORT || 5000;

app.listen(port);


