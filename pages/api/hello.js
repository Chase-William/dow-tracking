// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// export function getPolymer(req, res) {
//   res.status(200).json(
//     {
//       "BatchId": "",
//       "MaterialId": "",
//       "CustomerId": "",
//       "SiteCreated": "",
//       "Quantity": 0,
//       "Transits": [
//         {
//           "TransitId": "",
//           "DateTimeDeparture": "",
//           "DateTimeReceived": "",
//           "DeliveredFrom": "",
//           "DeliveredTo": "",
//           "TransitType": "",
//           "Arrived": ""
//         }
//       ],
//       "SustainabilityMetrics": {
//         "CarbonEmission": 0,
//         "ElectricityUsed": 0,
//         "WaterUsed": 0,
//         "Waste": [
    
//         ]
//       },
//       "RawMaterials": [
        
//       ]
//     }
//   )
// }
