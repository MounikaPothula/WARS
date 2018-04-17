var express=require('express');
var router=express.Router();
var User=require('../models/Usermodels');
var bcrypt=require('bcrypt-nodejs');
var jwt=require('jsonwebtoken');

router.post('/AddSupervisor',function(req,res){

var supervisor=new User();

supervisor.UserType='Supervisor',

supervisor.Password=supervisor.generateHash('password'),

supervisor.MobileNo=req.body.MobileNo,

supervisor.Email=req.body.Email,

supervisor.LastName=req.body.LastName,

supervisor.FirstName=req.body.FirstName

supervisor.save().then(function(docs){

  console.log('User Data Saved',docs);

},function(err){

  console.log(err);

});
});



router.get('/getSupervisor',function(req,res){

  User.find({

    UserType:'Supervisor'

  },function(err,data) {

    if(err){

      throw err;

    }

    else{

      res.json(data);

    }

  });

});




router.post('/AddUser',function(req,res){

var newUser=new User();

  User.findOne({

Email:req.body.Email

  },function(err,data) {

    if(!data){

newUser.UserType='Customer',

newUser.Password=newUser.generateHash(req.body.Password),

newUser.MobileNo=req.body.MobileNo,

newUser.Email=req.body.Email,

newUser.LastName=req.body.LastName,

newUser.FirstName=req.body.FirstName

newUser.save().then(function(customer){

res.status(200).send(customer);

},function(err){

  res.status(400).send(err);

});
}

else{

  console.log('User Already Exists');

  res.status(403).send();

}

});

});



router.post('/login',function(req,res){

User.findOne({

  Email:req.body.Email

},function(error,user){
  console.log("user : ", user);

if(error){

  throw error;

}

else if(!user){

res.json({

  success:false,

  message:'Email ID is not found'

});

console.log('Email ID is not found');

}else if(!user.validPassword(req.body.Password)){ //validate password

res.json({

  success:false,

  message:'You entered a wrong password'

});

console.log('You entered a wrong password');



}else if(user){

  /*var token=jwt.sign(user.to('mysecret',{ //creating jwt token

    expiresIn:2000

  }));*/
  var token = jwt.sign({ id: user._id }, 'mysecret', {
      expiresIn: 2000 // expires in 24 hours
    });

  console.log("token : ", token);

res.json({  //sending token details

  token:token,

  isLoggedIn:true,

userDetail:user,

  success:true

});

console.log('Token has been created');

}

});

});



router.post('/AddAdmin',function(req,res){

var newAdmin=new User();

newAdmin.UserType='Admin',

newAdmin.Password=newAdmin.generateHash('admin'),

newAdmin.MobileNo=req.body.MobileNo,

newAdmin.Email=req.body.Email,

newAdmin.LastName=req.body.LastName,

newAdmin.FirstName=req.body.FirstName

newAdmin.save().then(function(docs){

  console.log('User Data Saved',docs);

},function(err){

  console.log(err);

});

});





module.exports=router;