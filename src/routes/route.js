const express = require('express');
const logger = require('../logger/logger.js');
const helper = require('../util/helper.js');
const formatter = require('../validator/formatter.js');
const _=require('lodash')

const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    logger.greetings()
    helper.detail()
    helper.detail()
    formatter.trimmer()
    formatter.smler()
    formatter.capitl()
});
router.get('/hello', function (req, res) {
    res.send('installed lodash')
    let arr =[1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(arr))
    let mnth=["jan","feb","merch","april","may","june","july","august","sept","november","december"]
    console.log(_.chunk(mnth,4))
    let arr1=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(_.fromPairs(arr1))
    let j=[1,2,5,4]
    let k=[1,4,9,8]
    let l=[5,2,3,7]
    let m=[6,2,7,10]
    let n=[8,4,10,3]

    console.log(_.union(j,k,l,m,n))
    
});

module.exports = router;
// adding this comment for no reason