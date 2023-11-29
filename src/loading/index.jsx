// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function MyCards() {
//   const [data, setdata] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     async function getData() {
//       const aysel = await axios.get(
//         "https://northwind.vercel.app/api/categories"
//       );
//       setdata(aysel.data);
//       setIsLoading(false);
//     }

//     getData();
//   }, []);

//   return (
//     <div>
//       <h2>my cards</h2>
//       {isLoading ? (
//         <h1>loading..</h1>
//       ) : (
//         data.map((x) => <li key={x.id}>{x.name}</li>)
//       )}
//     </div>
//   );
// }

// export default MyCards;
