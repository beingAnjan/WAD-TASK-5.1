let dateDisplay=document.getElementById("dateDisplay");
let now=new Date();
let date=now.getDate();
let month=now.getMonth()+1;
let year=now.getFullYear();
function displayDate(){
    dateDisplay.value=date+"/"+month+"/"+year;
}
function calculateFactorial(){
    let number=prompt("Enter a number to calculate its Factorial");
    if (number==="1" || number==="0"){
        alert("Factorial of "+number+" is: 1");
    };
    if(number>1){
        let factorial=1;
        for(let i=1;i<=number;i++){
            factorial*=i;
        }
        alert("Factorial of "+number+" is: "+factorial)
    };
}