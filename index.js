function isEvenOrOdd(input){
    if(typeof input==="number"){
        return input%2===0?"even":"odd";
    }
    else return "Please check the number";
}
module.exports = isEvenOrOdd;