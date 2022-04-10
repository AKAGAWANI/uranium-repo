// let playersList=[{
//     name: "manish",
//     dob: "1/1/1995",
//     gender: "male",
//     city: "jalandhar",
//     sports: [
//     "swimming"
//     ]
//     },
//     {
//         name: "lokesh",
//         dob: "1/1/1990",
//         gender: "male",
//         ity: "mumbai",
//         sports: [
//             "soccer"
//         ]
//     },

//  {
//     name: "gopal",
//     dob: "1/09/1995",
//     gender: "male",
//     city: "delhi",
//     sports: [
//         "soccer"
//     ]
// }]
// router.post('/player', function (req, res) {
    
//     let newPlayer=req.body
//     for (i=0;i<playersList.length;i++){
//       if( playersList[i].name==newPlayer.name){
//             playersList.push(newPlayer)  
//             res.send(playersList)
//         }

//     else{res.send("exist")}
//     }
// });
    let arr=[1,12,45]
    for (i=0;i<arr.length;i++){
      if(arr.includes(1)){
          console.log("exist")
    break
      }else{
        arr.push(45)
    console.log(arr)
            break}}


// module.exports = router;
// // adding this comment for no reason