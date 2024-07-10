 import { useState } from "react";
import "./AddContact.css";
// import { Form } from "react-router-dom";

const AddContact = () => {
    const [form, setForm] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address: [{ address: "", longitude: "", latitude: "" }]
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        // if (name === "address" || name === "longitude" || name === "latitude") {
            // const addresses = [...form.addresses];
            // addresses[index][name] = value;
            // setForm({ ...form, addresses });
        // } else {
        //     setForm({ ...form, [name]: value });
        //  }
    };

//     const handleAddAddress = () => {
//         if (form.addresses.length < 5) {
//             setForm({
//                 ...form,
//                 addresses: [...form.addresses, { address: "", longitude: "", latitude: "" }]
//             });  
//         }
//     };

//     const handleRemoveAddress = (index) => {
//         const addresses = form.addresses.filter((_, i) => i !== index);
//         setForm({ ...form, addresses });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", form);
//     };

     return (
        <div>
            
            
            
            <h2>Add Contact</h2>
            <form>
                <div>
                    <label>Name: *</label>
                    <input
                        type="text"
                        name="name"
                         value={form.name}
                        onChange={handleChange}
                        required
                    />
        </div>
        <div>
            <label>Phone Number: *</label>
            <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                pattern="^\d{10}$"
                required
            />
        </div>
        <div>
            <label>Email: *</label>
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />
        </div>
        <div>
                    <label>Address: *</label>
                    <input
                        type="text"
                        name="address"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
        </div>
        <div>
                    <label>Longitude:</label>
                    <input
                        type="text"
                        name="longitude"
                        // value={address.longitude}
                        // onChange={(e) => handleChange(e, index)}
                        readOnly
                    />
                </div>

                <div>
                    <label>Latitude:</label>
                    <input
                        type="text"
                        name="latitude"
                        // value={address.latitude}
                        // onChange={(e) => handleChange(e, index)}
                        readOnly
                    />
                    </div>
                    </form>
        



        </div>
























//         <div className="add-contact">
        //     <div className="form">
        //         <h2>Add Contact</h2>
                
        //     </div>
        //     <h2>Add Contact</h2>
        //     <Form onSubmit={handleSubmit}>
        //         <div>
        //             <label>Name: *</label>
        //             <input
        //                 type="text"
        //                 name="name"
        //                 value={form.name}
        //                 onChange={handleChange}
        //                 required
        //             />
        // </div>

        // <div>
        //     <label>Phone Number: *</label>
        //     <input
        //         type="tel"
        //         name="phoneNumber"
        //         value={form.phoneNumber}
        //         onChange={handleChange}
        //         pattern="^\d{10}$"
        //         required
        //     />
        // </div>

        // <div>
        //     <label>Email: *</label>
        //     <input
        //         type="email"
        //         name="email"
        //         value={form.email}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

    //     {form.addresses.map((address, index) => (
    //         <div key={index} className="address-section">
    //             <div>
    //                 <label>Address {index + 1}: *</label>
    //                 <input
    //                     type="text"
    //                     name="address"
    //                     value={address.address}
    //                     onChange={(e) => handleChange(e, index)}
    //                     required
    //                 />
    //             </div>

                // <div>
                //     <label>Longitude:</label>
                //     <input
                //         type="text"
                //         name="longitude"
                //         value={address.longitude}
                //         onChange={(e) => handleChange(e, index)}
                //         readOnly
                //     />
                // </div>

                // <div>
                //     <label>Latitude:</label>
                //     <input
                //         type="text"
                //         name="latitude"
                //         value={address.latitude}
                //         onChange={(e) => handleChange(e, index)}
                //         readOnly
                //     />
                //     </div>
    //                 {index > 0 && (
    //                     <button type="button" onClick={() => handleRemoveAddress(index)}>
    //                         Remove Address
    //                     </button>
    //                 )}
    //         </div>
    //     ))}
    //     {form.addresses.length < 5 && (
    //         <button type="button" onClick={handleAddAddress}>
    //             Add Address
    //         </button>
    //     )}
    //     <button type="submit">Submit</button>
    // </Form>
// </div>
    );
 };

 export default AddContact;

 