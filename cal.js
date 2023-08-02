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



    // let notification = document.getElementById('result');
    // notification.style.display = "none"






// let value_1 = document.getElementById('value-1');
// let value_2 = document.getElementById('value-2');

// let display = () => {
//     // if (value_1 == "" && value_2 == "") {
//     //     alert('Please Enter the value')
//     // }
//      let values = (`${value_1.value}${value_2.value}`);
//     console.log(values)
//     notification.style.display = "block"
//     value_1.value = "";
//     value_2.value = "";
}



