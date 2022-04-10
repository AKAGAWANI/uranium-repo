const express = require('express');
// const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first  api!')
});
router.get('/movie/:mov', function (req, res) {
    let movies=['LOR','IPOH','POC','TSK']
    let movieList=[]
    if (req.params.mov<=movies.length){
    for (let i=0;i<movies.length;i++){
        if (req.params.mov==i+1){
            movieList.push(movies[i])
            res.send(movieList)
        }}}
        else{
            res.send("enter valid input") }
    
});
router.get('/movie', function (req, res) {
    let movies=['LOR','IPOH','POC','TSK']
    let movieList=[]
    for (let i=0;i<movies.length;i++){
            movieList.push(movies[i])
        
    }
    res.send(movieList)
});
router.get('/films', function (req, res) {
    let movies=[{
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
    
    let filmList=[]
    for (let i=0;i<movies.length;i++){
            filmList.push(movies[i])
        
    }
    res.send(filmList)
});
router.get('/films/:ID', function (req, res) {
    let movies=[{
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
    let filmList=[]
    if (req.params.ID<=movies.length){
    for (let i=0;i<movies.length;i++){
        if (req.params.ID==i+1){
            filmList.push(movies[i])
            res.send(filmList)
        }}}
        else{
            res.send("enter valid input") }
    
});
    
    

router.get('/missing', function (req, res) {
    let num=[33,35,37,38,39,40]
    let misNum=[]
    for (let i=0;i<num.length-1;i++){
        if (num[i+1]!==num[i]+1){
            misNum.push((num[i]+1))
            }        
    }
    console.log(misNum)
    res.send(misNum)
});

let playersList=[{
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: [
    "swimming"
    ]
    },
    {
        name: "lokesh",
        dob: "1/1/1990",
        gender: "male",
        ity: "mumbai",
        sports: [
            "soccer"
        ]
    },

 {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: [
        "soccer"
    ]
}]

router.post('/player', function (req, res) {
    let head=[]
    for (i=0;i<playersList.length;i++){
        head.push(playersList[i].name)
    }
    let newPlayer=req.body
    for (i=0;i<playersList.length;i++){
      if( head.includes (newPlayer.name)){ 
            res.send("exist")
            break
        }

    else{playersList.push(req.body)
        res.send(playersList)}
        break
    }
});


module.exports = router;
// adding this comment for no reason