"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "./Navbar";
import BabyComponent from "./BabyComponent";

function Medical() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const components = [
    {
      label: "2 Month",
      filter: (age) =>
        age.year === 0 && age.month === 2 && age.day > 15 && age.day < 30,
    },
    {
      label: "4 Month",
      filter: (age) =>
        age.year === 0 && age.month === 3 && age.day > 15 && age.day < 30,
    },
    {
      label: "6 Month",
      filter: (age) =>
        age.year === 0 && age.month === 5 && age.day > 15 && age.day < 30,
    },
    {
      label: "9 Month",
      filter: (age) =>
        age.year === 0 && age.month === 8 && age.day > 15 && age.day < 30,
    },
    {
      label: "1 Year",
      filter: (age) =>
        age.year === 1 && age.month === 0 && age.day > 15 && age.day < 30,
    },
    {
      label: "1.5 Years",
      filter: (age) =>
        age.year === 1 && age.month === 5 && age.day > 15 && age.day < 30,
    },
    {
      label: "3 Years",
      filter: (age) =>
        age.year === 2 && age.month === 11 && age.day > 15 && age.day < 30,
    },
    {
      label: "5 Years",
      filter: (age) =>
        age.year === 4 && age.month === 11 && age.day > 15 && age.day < 30,
    },
  ];

  const handleOpenModal = (component) => {
    setSelectedComponent(component);
    setModalVisible(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/petbank-8e53e.appspot.com/o/free-photo-of-mother-embracing-her-baby-daughter.jpg?alt=media&token=6073e654-9247-484e-aa22-8a372fa0a54b')",
      }}
    >
      <div className="top-0 left-0 sticky">
        <Navbar />
      </div>
      <div className="pt-[100px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 text-center text-white py-2 lg:mx-40 lg:pt-10">
          {components.map((component, index) => (
            <li
              key={index}
              onClick={() => handleOpenModal(component)}
              className="bg-pink-400 py-2 rounded-lg cursor-pointer lg:py-5"
            >
              {component.label}
            </li>
          ))}
        </ul>

        <Modal
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50"
          className="relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => setModalVisible(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-900 focus:outline-none py-1 px-2 rounded-full "
          >
            ✖
          </button>

          {/* Modal Content */}
          <div className="p-6">
            {selectedComponent && (
              <BabyComponent
                filter={selectedComponent.filter}
                title={selectedComponent.label}
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Medical;
