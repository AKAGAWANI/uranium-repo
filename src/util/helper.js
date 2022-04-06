let detail=function todaySession(){
   const a= new Date('may 6,2022')
    console.log("date is ",a.getDate())
    console.log("month is ",a.getMonth())
    batchInfo={
        batch:"uranium",
        week:"W3",
        day:"D3",
        topics:"nodejs,dependencies,main,NPM,imprt,exprt"
    }
    console.log(Object.values(batchInfo))
}
module.exports.detail=detail