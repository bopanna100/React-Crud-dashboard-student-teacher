const Users = [   
    {
      
     
      " studentname": "bopanna",
       "email": "percy.kris@email.com",
       "branch": "Marketing ",
       "school": "sms",
      
    },  
    {
      
    
       "studentname": "chinnu",
       "email": "terrance.nolan@email.com",
       "branch": "coading",
       "school": "lions",
       
    },   
    {
       
     
       "studentname": "dumma",
       "email": "wilmer.armstrong@email.com",
       "branch": "Future Community-Services Planner",
       "school": "roots",
       
    },   
    {
       
      
       "studentname": "ponni",
       "email": "dane.paucek@email.com",
       "branch": "National Developer",
       "school": "sms",
       
    },   
    {
       
    
       "studentname": "uthappa",
       "email": "violeta.howe@email.com",
       "branch": "Internal Hospitality Developer",
       "school": "antonys",
      
    },   
    {
       
      
       "studentname": "arun",
       "email": "wilson.torphy@email.com",
       "branch": "Construction Specialist",
       "school": "sms",
       
    },   
    {
      
      
       "studentname": "vivek",
       "email": "deon.feeney@email.com",
       "branch": "Design Producer",
       "school": "lions",
      
    },   
    {
       
       "studentname": "sajan",
       "email": "erick.langworth@email.com",
       "branch": "Community-Services Representative",
       "school": "lions",
       "feeplan": "Bronze"
    },   
    {
      
     
       "studentname": "dilhan",
       "email": "mario.grady@email.com",
       "branch": "Technology Architect",
       "school": "sms",
      
    },   
    {
      
    
       "studentname": "cheethu",
       "email": "iesha.krajcik@email.com",
       "branch": "Government Developer",
       "school": "loods",
       
    }
 ]
let UserData = Users;
 if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify(Users))
 }
 else{
    UserData = JSON.parse(localStorage.getItem('users'));
 }

 export {UserData};