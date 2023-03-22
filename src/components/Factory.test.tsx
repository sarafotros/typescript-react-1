// import { render, screen } from "@testing-library/react";
// import FactoryProductionPage from "./Factory";

// describe("FactoryProductionPage", () => {
//   it("displays the default cut off for each returned delivery service for each factory returned from the API", () => {
//     const factories = {
//       results: [
//         {
//           factoryCode: "NL-GRTZ-AMS",
//           deliveryServices: [
//             {
//               deliveryService: "POSTNL_MAILBOX_POST",
//               cutoff: {
//                 defaultTime: "21:00:03",
//               },
//             },
//           ],
//         },
//       ],
//     };

//     const { deliveryServices, ...factoriesWithoutDeliveryServices } = factories.results[0]; // Create a new object without the deliveryServices property

//     render(<FactoryProductionPage factories={factoriesWithoutDeliveryServices} />);

//     expect(screen.getByText(`Factory Code: ${factoriesWithoutDeliveryServices.factoryCode}`)).toBeInTheDocument();
//     expect(screen.getByText(`Delivery Service: ${deliveryServices[0].deliveryService}`)).toBeInTheDocument();
//     expect(screen.getByText(`Default Cut Off: ${deliveryServices[0].cutoff.defaultTime}`)).toBeInTheDocument();
//   });
// });
