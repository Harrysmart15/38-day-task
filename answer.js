//users

db.users.insert. Many([

    {
        userid : 1,
        name : "Harikarthi",
        email :"harikarthik508@gmail.com",
        batch : "weekday"
    },

    {
        userid : 2,
        name : "mohan",
        email :"mohan@gmail.com",
        batch : "weekday"
    },

    {
        userid : 3,
        name : "srinidhi",
        email :"srinidhi@gmail.com",
        batch : "weekend"
    },

    {
        userid : 4,
        name : "jeeva",
        email :"jeeva002@gmail.com",
        batch : "weekend"
    },

    {
        userid : 5,
        name : "gopal",
        email :"gopal12@gmail.com",
        batch : "weekday"
    },

]);

//codekata

db.codekata.insertMany([

    {
        userid : 1,
        solved : 200
    } ,

    {
        userid : 2,
        solved : 117
    } ,

    {
        userid : 1,
        solved : 150
    } ,

    {
        userid : 1,
        solved : 105
    } ,

    {
        userid : 1,
        solved : 100
    } ,

]);

//attendence

db.attendence.insertMany([

    {
        userid : 1,
        percentage : 95
    },

    {
        userid : 2,
        percentage : 86
    },

    {
        userid : 3,
        percentage : 85
    },

    {
        userid : 4,
        percentage : 88
    },

    {
        userid : 5,
        percentage : 75
    },

])

//topics

db.topics.insertMany([

    {
        userid : 1,
        topic : "html",
        date : "10.01.2023"
    },

    {
        userid : 2,
        topic : "css",
        date : "15.01.2023"
    },

    {
        userid : 3,
        topic : "javascript",
        date : "17.02.2023"
    },

    {
        userid : 4,
        topic : "react",
        date : "28.02.2023"
    },

    {
        userid : 5,
        topic : "nodejs",
        date : "20.04.2022"
    },

]),

//tasks

db.tasks.insertMany([

    {
        userid : 1,
        taskid : 1,
        sumitted : "15.01.2023"
    },

    {
        userid : 2,
        taskid : 2,
        sumitted : "20.01.2023"
    },

    {
        userid : 3,
        taskid : 3,
        sumitted : "28.01.2023"
    },

    {
        userid : 4,
        taskid : 4,
        sumitted : "22.03.2023"
    },

    {
        userid : 5,
        taskid : 5,
        sumitted : "26.04.2023"
    },

]),

//company drives

db.companydrives.insertMany([

    {
       userid : 1,
       company : "google" 
    },

    {
        userid : 2,
        company : "google" 
     },

     {
        userid : 3,
        company : "google" 
     },

     {
        userid : 4,
        company : "zoho" 
     },

     {
        userid : 5,
        company : "zoho" 
     },

]),

//mentors

db.mentors.insertMany([

    {
       userid : 1,
       mentor : "magesh"
    },

    {
        userid : 2,
        mentor : "rupan"
     },

     {
        userid : 3,
        mentor : "sangeetha"
     },

     {
        userid : 4,
        mentor : "sanjay"
     },

     {
        userid : 5,
        mentor : "sanjay"
     },

]),





//find all topics and task which are taught in month of october


db.topics.aggregate([

    {
        $lookup : {
           from : "tasks",
           localField : "taskid",
           foreignField : "taskid",
           as : "task"
        },
    },

    {
        $match:{
            $and:[
                {
                    $or:[
                        {"task_date":{$gt:(01.10.2022)}}
                        {"task_date":{$lt:(31.10.2022)}}
                    ],
                },
            ],
        },
    },
]),
