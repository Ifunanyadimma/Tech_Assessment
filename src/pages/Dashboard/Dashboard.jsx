//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment } from "react";
import "./Dashboard.css";
// import { AppContext } from "../context/AppContext";

const contacts = [
  {
    name: "Love Dimma",
    phoneNumber: "1112223333",
    email: "love.dimma@example.com",
    addresses: [
      { address: "456 Elm St", longitude: "-0.13", latitude: "51.502" },
      { address: "789 Oak St", longitude: "-0.14", latitude: "51.508" },
    ],
  },
  {
    name: "Christy Gab",
    phoneNumber: "4445556666",
    email: "christy.gab@example.com",
    addresses: [{ address: "901 Maple St", longitude: "-0.15", latitude: "51.501" }],
  },
  {
    name: "Nk Biggy",
    phoneNumber: "7778889999",
    email: "nk.biggy@example.com",
    addresses: [
      { address: "234 Pine St", longitude: "-0.16", latitude: "51.509" },
      { address: "567 Cedar St", longitude: "-0.17", latitude: "51.506" },
    ],
  },
  {
    name: "Funs Chinwe",
    phoneNumber: "6667778888",
    email: "funs.chinwe@example.com",
    addresses: [{ address: "890 Walnut St", longitude: "-0.18", latitude: "51.504" }],
  },
  {
    name: "KC Ifuu",
    phoneNumber: "3334445555",
    email: "kc.ifuu@example.com",
    addresses: [
      { address: "345 Spruce St", longitude: "-0.19", latitude: "51.510" },
      { address: "678 Cherry St", longitude: "-0.20", latitude: "51.511" },
    ],
  },
  {
    name: "Gerald Ebube",
    phoneNumber: "9998887777",
    email: "gerald.ebube@example.com",
    addresses: [{ address: "5678 Orange St", longitude: "-0.21", latitude: "51.512" }],
  },
  {
    name: "Val Vic",
    phoneNumber: "2223034444",
    email: "val.vic@example.com",
    addresses: [
      { address: "9012 Yellow St", longitude: "-0.22", latitude: "51.513" },
      { address: "3456 Green St", longitude: "-0.23", latitude: "51.514" },
    ],
  },
  {
    name: "Alex Nana",
    phoneNumber: "8887776666",
    email: "alex.nana@example.com",
    addresses: [{ address: "4567 Blue St", longitude: "-0.24", latitude: "51.515" }],
  },
  {
    name: "Jonathan Johnson",
    phoneNumber: "5556667777",
    email: "jonathan.johnson@example.com",
    addresses: [
      { address: "2345 Red St", longitude: "-0.25", latitude: "51.516" },
      { address: "6789 Purple St", longitude: "-0.26", latitude: "51.517" },
    ],
  },
];


const TableHeading = ["name", "phone number", "email", "address", "longitude", "latitude"];
const Dashboard = () => {
  // console.log(name)
  return (
    <div className="dashboard">
      <div className="table-view">
        <h2>Table View</h2>
        <div>
          <div className="table-pt1">
            <div className="table-head">
              {TableHeading.slice(0, 3).map((heading, i) => (
                <div key={i}>{heading}</div>
              ))}
            </div>
            <div className="table-body">
              {contacts?.map((contact, i) => {
                return (
                  <Fragment key={i}>
                    <div className="table-column">
                      <div>{contact.name}</div>
                      <div>{contact.phoneNumber}</div>
                      <div>{contact.email}</div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="table-pt2">
              <div className="table-head">
                {TableHeading?.slice(3, 6).map((heading, i) => (
                  <div key={i}>{heading}</div>
                ))}
              </div>
              <div>
                {contacts?.map((contact, i) => {
                  return (
                    <Fragment key={i}>
                      <div className="">
                        {contact?.addresses?.map((address, i) => {
                          return (
                            <Fragment key={i}>
                              <div className="table-column">
                                <div>{address.address}</div>
                                <div>{address.longitude}</div>
                                <div>{address.latitude}</div>{" "}
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-view">
        <h2>Map View</h2>
        <div id="map"></div>
      </div>
    </div>
  );
};

export default Dashboard;