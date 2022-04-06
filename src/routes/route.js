const express = require('express');
const logger = require('../logger/logger.js');
const helper = require('../util/helper.js');
const formatter = require('../validator/formatter.js');
const _=require('lodash')

const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    logger.greetings()
    formatter.trimmer()
});
router.get('/hello', function (req, res) {
    res.send('installed lodash')
    let arr =[1,3,5,9]
    console.log(_.tail(arr))
    let mnth=["jan","feb","merch","april","may","june","july","august","sept","november","december"]
    console.log(_.chunk(mnth,4))
    let arr1=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(_.fromPairs(arr1))
    let j=[1,2]
    let k=[1,4]
    let l=[5,2]
    let m=[6,2]
    let n=[8,4]

    console.log(_.union(j,k,l,m,n))
    
});

module.exports = router;
// adding this comment for no reason