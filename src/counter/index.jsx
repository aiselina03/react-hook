// import React, { useMemo, useState } from "react";
// import useIncrease from "../hook/useCounter";

// function Counter() {
//   const [count1, inccount1] = useIncrease();
//   const [toggle, settoggle] = useState(false);
//   const m10 = useMemo(() =>  calcAVT(count1)  , [count1])

//   function calcAVT(count1) {
//     console.log("isleyir");
//     for (let index = 0; index < 2; index++) {}
//     return count1 *10;
//   }

//   function handleToggle() {
//     settoggle(!toggle);
//   }

//   return (
//     <div>
//       <div>saygac1: {count1}</div>
//       <button onClick={inccount1}>add</button>
//       <button onClick={handleToggle}>{toggle ? "x" : "="} </button>
//       <button>{m10}</button>
//     </div>
//   );
// }

// export default Counter;
