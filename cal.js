 let result = document.getElementById('result');


 let display = (num) =>{
   result.value += num
 }
 let calculate = () =>{
   let finalNumber = result.value
   let finalResult = eval(finalNumber);
    result.value = finalResult;

}
 let dlt = () =>{
    result.value = "";

}
 let clr = () =>{
    result.value = result.value.slice(0,-1);

}
