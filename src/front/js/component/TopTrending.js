// import React, { useState, useEffect } from "react";
// import { Row } from "react-bootstrap";

// // // import useSWR from "swr";

// // // export async function fetcher() {
// // //   const response = await fetch(process.env.BACKEND_URL + "/api/gettopnfts");
// // //   if (response.status === 200) {
// // //     const body = await response.json();
// // //     return body;
// // //   }
// // //   return null;
// // // }

// export function TopTrending() {
//   const [nft, setNft] = useState([]);
//   useEffect(() => {
//     fetch("https://top-nft-sales.p.rapidapi.com/sales/7d", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
//         "x-rapidapi-key": "042ca87ebdmsh74fb588ba8f852fp1fe206jsn4f13f7b280b0",
//       },
//     })
//       .then((response) => response.json())

//       .then((data) => {
//         console.log(data);
//         setNft(data);
//       });
//   }, []);
//   return (
//     <div>
//       {nft.map((item, index) => {
//         return (
//           <li id="trending" key={index}>
//             <h2>{item.nft_name}</h2>
//             <h2>{item.collection}</h2>
//             <a href="">{item.nft_url}</a>
//             {item.price}
//           </li>
//         );
//       })}
//     </div>
//   );
// }
