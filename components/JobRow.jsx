"use client";
import React, { useState } from "react";

const JobRow = (props) => {
  const [isExpandedCompany, setIsExpandedCompany] = useState(false);
  const [isExpandedPosition, setIsExpandedPosition] = useState(false);
  const [isExpandedNotes, setIsExpandedNotes] = useState(false);

  const toggleExpandCompany = () => {
    setIsExpandedCompany(!isExpandedCompany);
  };

  const toggleExpandPosition = () => {
    setIsExpandedPosition(!isExpandedPosition);
  };

  const toggleExpandNotes = () => {
    setIsExpandedNotes(!isExpandedNotes);
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {/* Company Column */}
      <td className="px-4 py-2 max-w-xs">
        <div
          className={`overflow-hidden ${isExpandedCompany ? "" : "truncate"}`}
          onClick={toggleExpandCompany}
          style={{ cursor: "pointer" }}
        >
          {props.company}
        </div>
        {!isExpandedCompany && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleExpandCompany}
          >
            ...
          </span>
        )}
      </td>

      {/* Position Column */}
      <td className="px-4 py-2 max-w-xs">
        <div
          className={`overflow-hidden ${isExpandedPosition ? "" : "truncate"}`}
          onClick={toggleExpandPosition}
          style={{ cursor: "pointer" }}
        >
          {props.position}
        </div>
        {!isExpandedPosition && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleExpandPosition}
          >
            ...
          </span>
        )}
      </td>

      {/* Status Column */}
      <td className="px-4 py-2">{props.status}</td>

      {/* Date Column */}
      <td className="px-4 py-2">{props.date}</td>

      {/* Notes Column */}
      <td className="px-4 py-2 max-w-xs">
        <div
          className={`overflow-hidden ${isExpandedNotes ? "" : "truncate"}`}
          onClick={toggleExpandNotes}
          style={{ cursor: "pointer" }}
        >
          {props.notes}
        </div>
        {!isExpandedNotes && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleExpandNotes}
          >
            ...
          </span>
        )}
      </td>

      {/* Edit Button Column */}
      <td className="px-4 py-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default JobRow;
