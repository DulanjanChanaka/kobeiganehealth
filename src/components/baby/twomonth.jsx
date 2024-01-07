"use client"
import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const BabyComponent = () => {
  const [babyData, setBabyData] = useState(null);
  const [filteredBabies, setFilteredBabies] = useState([]);
  const [loading, setLoading] = useState(true);

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
      try {
        const response = await fetch('https://incomparable-brioche-b13e68.netlify.app/api/babies');
        if (response.ok) {
          const data = await response.json();
          setBabyData(data);

          // Filter babies based on age (e.g., 15-30 days)
          const filteredBabiesData = data.filter((baby) => {
            const age = calculateAge(baby.birthday);
            return age.year === 0 && age.month === 0 && age.day > 15 && age.day < 30;
          });
          setFilteredBabies(filteredBabiesData);
        } else {
          console.error('Failed to fetch baby data.');
        }
      } catch (error) {
        console.error('Error fetching baby data: ', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          {filteredBabies.length > 0 ? (
            <>
              <h2 className='text-center text-2xl'>මාස 2 කණ්ඩායම</h2>
              {filteredBabies.map((baby, index) => (
                <div key={index} className='m-2'>
                  <div className=' bg-sky-200 py-3 px-2 rounded-lg '>
                    <p>Name: {baby.name}</p>
                    <p>Mother: {baby.mother}</p>
                    <p>Address: {baby.address}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No babies found .</p>
          )}
        </>
      )}
    </div>
  );
};

export default BabyComponent;
