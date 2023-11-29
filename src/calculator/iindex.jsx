// import React from "react";
// import { useState } from "react";
// function Calc() {
//   const [inputValue1, setinputValue1] = useState("");
//   const [inputValue2, setinputValue2] = useState("");
//   const [result,setResult]=useState();
//   // const [add, setadd] = useState()
//   // const [subsctract, setsubsctract] = useState()
//   // const [divide, setdivide] = useState()
//   // const [multiple, setmultiple] = useState()



// function handleOperation(operation){
//     const num1 = parseFloat(inputValue1);
//     const num2 = parseFloat(inputValue2);

//     if (isNaN(num1) ||isNaN(num2)) {
//         setResult("bu ededler reqemdeyil")
//     }

//     switch (operation) {
//         case "add":
//             setResult(inputValue1+inputValue2)
//             break;
//       case "subsctract":
//             setResult(inputValue1-inputValue2)
//             break;
//       case "divide":
//             setResult(inputValue1/inputValue2)
//             break;
//     case "multiple":
//             setResult(inputValue1*inputValue2)
//             break;
//         default:
//             break;
//     }
// }
// }
//   return (
//     <div>
     
//         <input type="text" value={inputValue1} onChange={(e)=>setinputValue1(e.target.value)} placeholder="Enter num 1" />
//         <input type="text" value={inputValue2} onChange={(e)=>setinputValue2(e.target.value)} placeholder="Enter num 2" />
//         <br />
//         <button onClick={add}>Add</button>
//         <button onClick={subsctract}>Subsctract</button>
//         <button onClick={divide}>Divide</button>
//         <button onClick={multiple}>Multiple</button>
      
      
//     </div>
//   );
  

// export default Calc;
