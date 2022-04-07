const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
router.get('/all-candidates', function (req, res) {
  let candName=['arjun','sohel','anil','pandey','ram','bhagat','yogi']
  let candList=[]
  for(i=0;i<candName.length;i++){
      candList.push(candName[i])
      
  }res.send(candList)
});
router.get('/candidates', function (req, res) {
  let candName=['arjun','yogi','anil','sohel','pandey','ram','bhagat']
  let candListNew=[]
  let n=req.query.count
  for(i=0;i<n;i++){
      candListNew.push(candName[i])
      
  }res.send(candListNew)

});




module.exports = router;
// adding this comment for no reason