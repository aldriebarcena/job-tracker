"use client";
import JobRow from "@/components/JobRow";
import AddJob from "@/components/AddJob";
import React, { useState } from "react";

export default function Home() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex justify-center items-center text-black flex-col">
      {/* Add Job Button
      <button
        onClick={() => setToggleForm(!toggleForm)} // Fixed: Pass a function
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mb-4 items-start"
      >
        {toggleForm ? "Close Form" : "Add Job"}
      </button>

      {/* Conditionally Render AddJob Component */}
      {/* {toggleForm && <AddJob />} */}

      <AddJob />

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Position</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Applied Date</th>
            <th className="px-4 py-2 text-left">Notes</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <JobRow
            company="Google"
            position="Software Engineer InternSoftware Engineer InternSoftware Engineer Intern"
            status="Applied"
            date="02/15/2025"
            notes="Location: Mountain View, CA. Additional details about the job application process."
          />
          <JobRow
            company="Amazon"
            position="Frontend Developer"
            status="Interview"
            date="03/01/2025"
            notes="Interview scheduled for March 10th, 2025. Prepare for system design round."
          />
          <JobRow
            company="Microsoft"
            position="Backend Engineer"
            status="Offer"
            date="02/20/2025"
            notes="Offer details: $120,000 base salary, $20,000 signing bonus."
          />
          <JobRow
            company="Netflix"
            position="Data Scientist"
            status="Rejected"
            date="02/10/2025"
            notes="Feedback: Strong technical skills but lacking domain experience. Feedback: Strong technical skills but lacking domain experience. Feedback: Strong technical skills but lacking domain experience."
          />
        </tbody>
      </table>
    </div>
  );
}
