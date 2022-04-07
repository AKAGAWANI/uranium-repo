let detail=function todaySession(){
   const a= new Date()
    console.log("Date:",a.getDate())
    console.log("Month:",a.getMonth()+1)
    batchInfo={
        batch:"uranium",
        week:"W3",
        day:"D3",
        topics:"nodejs,dependencies,main,NPM,imprt,exprt"
    }
    console.log(Object.values(batchInfo))
}
module.exports.detail=detail