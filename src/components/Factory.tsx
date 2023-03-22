// import React, { useState, useEffect } from "react";

// interface ProductionData {
//   factoryCode: string;
//   deliveryServices: Array<{
//     deliveryService: string;
//     cutoff: {
//       defaultTime: string;
//     };
//   }>;
// }

// function FactoryProductionPage() {
//   const [productionData, setProductionData] = useState<ProductionData>({ factoryCode: "", deliveryServices: [] });
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     fetch("https://your-api-url.com/factory-production-data")
//       .then((response) => response.json())
//       .then((data) => setProductionData(data.results[0]))
//       .catch((error) => console.log(error));
//   }, []);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       <h2>Factory Production Page</h2>
//       <table>
//         <thead>
//           <tr>
//             <th onClick={toggleDetails}>Factory Code</th>
//             {showDetails && <th onClick={toggleDetails}>Delivery Service</th>}
//             {showDetails && <th onClick={toggleDetails}>Default Cut Off</th>}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{productionData.factoryCode}</td>
//             {showDetails &&
//               productionData.deliveryServices.map((service) => (
//                 <React.Fragment key={service.deliveryService}>
//                   <td>{service.deliveryService}</td>
//                   <td>{service.cutoff.defaultTime}</td>
//                 </React.Fragment>
//               ))}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FactoryProductionPage;
