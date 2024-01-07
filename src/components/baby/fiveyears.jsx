"use client"
import React, { useState, useEffect } from 'react';

const Fiveyears = () => {
    const [babyData, setBabyData] = useState(null);
    const [filteredBabies, setFilteredBabies] = useState([]);

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const ageInMilliseconds = today - birthDateObj;

        const ageDate = new Date(ageInMilliseconds);
        const year = ageDate.getUTCFullYear() - 1970;
        const month = ageDate.getUTCMonth();
        const day = ageDate.getUTCDate();

        return { year, month, day };
    };

    useEffect(() => {
        const fetchData = async () => {
            // Fetch all baby data from your backend API
            try {
                const response = await fetch('https://incomparable-brioche-b13e68.netlify.app/api/babies');
                if (response.ok) {
                    const data = await response.json();
                    setBabyData(data);
                    

                    // Filter babies based on age (e.g., 20 days)
                    const filteredBabiesData = data.filter(baby => {
                        const age = calculateAge(baby.birthday);
                        return age.year === 4 && age.month === 11 && age.day > 10 && age.day < 30;

                    });
                    setFilteredBabies(filteredBabiesData);
                } else {
                    console.error('Failed to fetch baby data.');
                }
            } catch (error) {
                console.error('Error fetching baby data: ', error);
            }
        };
        
        fetchData();
    }, []); // Run the effect only once on component mount

    return (
        <div>
            {filteredBabies.length > 0 ? (
                <>
                    <h2 className='text-center text-2xl'>අවුරුදු 5 කණ්ඩායම </h2>
                    {filteredBabies.map((baby, index) => (
                        <div key={index} className='p-5 '>
                            <div className=' bg-sky-200 p-3 rounded-lg '>
                            <p>Name: {baby.name}</p>
                            <p>Mother: {baby.mother}</p>
                            <p>Address: {baby.address}</p>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p>No babies found with age less than 20 days.</p>
            )}
        </div>
    );
};

export default Fiveyears;
