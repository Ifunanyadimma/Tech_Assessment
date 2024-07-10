// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "./Dashboard.css"


// const contacts = [
//     {
//         name: "Val Doe",
//         phoneNumber: "1234567890",
//         email: "val.v@example.com",
//         addresses: [
//             { address: "123 Nsk", longitude: "-0.09", latitude: "51.505" },
//             { address: '123 Main St', longitude: '-0.11', latitude: '51.507' },
//         ],
//     },

//     {
//             name: 'Love Dimma',
//             phone: '0987654321',
//             email: 'love.dimma@example.com',
//             addresses: [
//               { address: '789 High St', longitude: '-0.12', latitude: '51.503' },
//             ],
//     },

//     // Add other contacts
// ];

// const getRandomAdress = (addresses) => {
//     const randomIndex = Math.floor(Math.random() * addresses.length);
//     return addresses[randomIndex];
// };

 const Dashboard = () => {
    return (
        <div className="dashboard">
            <div>
                Dashboard
            </div>
{/* //             <div className="table-view">
//             <h2>Table View</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Longitude</th>
//                         <th>Latitude</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {contacts.map((contact, index) => { */}
{/* //                         const address = getRandomAdress(contact.addresses);
//                          return (
//                             <tr key={index}>
//                                 <td>{contact.name}</td>
//                                 <td>{contact.phoneNumber}</td>
//                                 <td>{contact.email}</td>
//                                 <td>{address.address}</td>
//                                 <td>{address.longitude}</td>
//                                 <td>{address.latitude}</td>
//                             </tr> 
//                          );
//                     })} 
//                 </tbody> */}
{/* //             </table> */}
{/* //             </div> */}

{/* //             <div className="map-view">
//                 <h2>Map View</h2>
//                 <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
{/* //                     attribution="&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors"
//                     />

//                     {contacts.map((contact, index) => { */}
{/* //                         return contact.addresses.map((address, idx) => (
//                             <Marker key={`${index}-${idx}`} position={[address.latitude, address.longitude]}>
//                                 <Popup>
//                                     <div>
//                                         <strong>{contact.name}</strong><br />
//                                         {address.address}<br />
//                                         Longitude: {address.longitude}<br />
//                                         Latitude: {address.latitude}
//                                     </div>
//                                 </Popup>
//                             </Marker>
//                         ))
//                     })}
//                 </MapContainer> */}
{/* //             </div>        */}
        </div>
    );
    
 };

export default Dashboard;