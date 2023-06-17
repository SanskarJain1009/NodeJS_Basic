console.log("This is module 2");
function sum(arr){
    let sum=0;
    arr.forEach(arr => {
        sum+=arr;
    });
    return sum;
}
module.exports={
    sum,
    name:"Sanskar"

}