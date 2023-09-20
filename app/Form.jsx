"use client";

import { useState } from "react";
import Image from 'next/image';
import doc from "../public/doc.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QueryForm = () => {
  const [disable,setDisable] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    employeeId: "",
    location: "",
    department: "",
    device:'',
    field:'',
    message: "",
    resolved:"Unresolved"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm)=>{return{ ...prevForm, [name]: value }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    axios.post("/api/querySubmit", formData)
        .then((response) => {
            console.log('Form data submitted successfully:', response.data);
            toast.success('Query Submitted')
            setDisable(false)
            setFormData({
            name: '',
            phone: '',
            email: '',
            employeeId: '',
            location: '',
            department: '',
            device:'',
            field:'',
            message: '',
            resolved:"Unresolved",
        });
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
        toast.error('Something went wrong')
        setDisable(false);
      })
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center md:p-3">
        <ToastContainer/>
      <form onSubmit={handleSubmit} className="flex flex-col w-screen h-screen max-h-lg lg:max-w-lg md:max-w-md:flex sm:max-w-sm bg-white p-7 rounded-2xl">
        <div className="flex flex-row h-16 items-center font-arial text-xl text-black w-full">
            <Image src={doc} alt="doc.png" width={20} className="object-contain mx-2 h-auto"/>
            <div>
                Query Form
            </div>
        </div>
        <label htmlFor="name"><span className="text-red-600">*</span>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required={true}
          className="input border-slate-950 w-full max-w-lg"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="+91-XXXXX-XXXXX"
          value={formData.phone}
          onChange={handleChange}
          className="input border-slate-950 w-full max-w-lg"
        />

        <label htmlFor="email"><span className="text-red-600">*</span>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="input border-slate-950 w-full max-w-lg"
        />
        <label htmlFor="employeeId">Employee Id</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          className="input border-slate-950 w-full max-w-lg"
        />
        <div className="flex flex-row">
            <div className="flex-col mr-4">
                <label htmlFor="location"><span className="text-red-600">*</span>Select Location</label>
                <select
                onChange={handleChange}
                value={formData.location}
                name="location"
                required
                id="location"
                className="select border-black w-full max-w-lg"
                >
                <option value="" disabled>Select City</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Pune'>Pune</option>
                <option value='Banglore'>Banglore</option>
                <option value='Dehli'>Dehli</option>
                <option value='Ahmedabad'>Ahmedabad</option>
                <option value='Hyderabad'>Hyderabad</option>
                </select>
            </div>
            <div className="flex-col">
                <label htmlFor="department"><span className="text-red-600">*</span>Select Department</label>
                <select
                onChange={handleChange}
                required
                value={formData.department}
                name="department"
                placeholder={'Select Department'}
                id="department"
                className="select border-black w-full max-w-lg"
                >
                <option value="" disabled>Select Department</option>
                <option value='IT'>IT</option>
                <option value='Sales'>Sales</option>
                <option value='Production'>Production</option>
                <option value='Store & Logistics'>Store & Logistics</option>
                <option value='HR & Admin'>HR & Admin</option>
                <option value='Finance'>Finance</option>
                </select>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="flex-col mr-4">
                <label htmlFor="device"><span className="text-red-600">*</span>Select Device</label>
                <select
                onChange={handleChange}
                value={formData.device}
                name="device"
                required
                id="device"
                className="select border-black w-full max-w-lg"
                >
                <option value="" disabled>Select Device</option>
                <option value='Laptop'>Laptop</option>
                <option value='Dekstop'>Dekstop</option>
                </select>
            </div>
            <div className="flex-col">
                <label htmlFor="field"><span className="text-red-600">*</span>Select Field</label>
                <select
                onChange={handleChange}
                required
                value={formData.field}
                name="field"
                placeholder={'Select Field'}
                id="field"
                className="select border-black w-full max-w-lg"
                >
                <option value="" disabled>Select Field</option>
                <option value='Hardware'>Hardware</option>
                <option value='Software'>Software</option>
                <option value='ERP'>ERP</option>
                </select>
            </div>
        </div>
        <label htmlFor="message"><span className="text-red-600">*</span>Enter your query</label>
        <textarea
          name="message"
          placeholder="Enter your message..."
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="textarea border-slate-950 w-full resize-none max-w-lg mb-3"
          rows={5}
        />
        <button type="submit" disabled={disable} className="btn btn-neutral active:btn">
          Submit
        </button>
      </form>
    </main>
  );
};

export default QueryForm;
