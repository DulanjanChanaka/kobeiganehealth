"use client";
import React from "react";

const BabyList = ({ babies, calculateAge }) => {
  if (babies.length === 0) {
    return <p>No babies found.</p>;
  }

  return (
    <>
      {babies.map((baby, index) => (
        <div key={index} className="p-4">
          <div className="bg-blue-100 py-4 px-6 rounded-lg shadow-sm">
            <table className="w-full border-collapse border border-blue-200">
              <tbody>
                <tr>
                  <th className="text-left font-semibold border border-blue-200 px-2 py-1">
                    Name
                  </th>
                  <td className="font-normal text-blue-700 border border-blue-200 px-2 py-1">
                    {baby.name}
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-semibold border border-blue-200 px-2 py-1">
                    Mother
                  </th>
                  <td className="font-normal text-blue-700 border border-blue-200 px-2 py-1">
                    {baby.mother}
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-semibold border border-blue-200 px-2 py-1">
                    Address
                  </th>
                  <td className="font-normal text-blue-700 border border-blue-200 px-2 py-1">
                    {baby.address}
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-semibold border border-blue-200 px-2 py-1">
                    Birthdate
                  </th>
                  <td className="font-normal text-blue-700 border border-blue-200 px-2 py-1">
                    {baby.birthday}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="font-semibold text-sm text-center pt-2">
              Age: {calculateAge(baby.birthday).year} Years,{" "}
              {calculateAge(baby.birthday).month} Month,{" "}
              {calculateAge(baby.birthday).day} Days
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BabyList;
