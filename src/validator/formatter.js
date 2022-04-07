let trimmer=function(){
    let batch='     my batch is uranium   '
    console.log(batch)
     console.log(batch.trim())
}
let lowerCase=function (){
    console.log("Hello".toLowerCase())
}
let upperCase=function (){
    console.log("Hello".toUpperCase())
}

module.exports.trimmer=trimmer
module.exports.smler=lowerCase
module.exports.capitl=upperCase