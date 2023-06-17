console.log("This is module");
function avg(arr){
    let sum=0;
    arr.forEach(arr => {
        sum+=arr;
    });
    return sum/arr.length;
}
module.exports=avg;