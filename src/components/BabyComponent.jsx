// components/BabyComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBabyData } from '../redux/slices/babySlice';
import BabyList from './BabyList';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const BabyComponent = ({ filter, title }) => {
  const { data, loading } = useSelector((state) => state.baby);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBabyData());
  }, [dispatch]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageInMilliseconds = today - birthDateObj;
    const ageDate = new Date(ageInMilliseconds);
    return {
      year: ageDate.getUTCFullYear() - 1970,
      month: ageDate.getUTCMonth(),
      day: ageDate.getUTCDate(),
    };
  };

  const filteredBabies = data.filter((baby) => filter(calculateAge(baby.birthday)));

  return (
    <div>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <h2 className="text-center text-2xl">{title}</h2>
          <BabyList babies={filteredBabies} calculateAge={calculateAge} />
        </>
      )}
    </div>
  );
};

export default BabyComponent;
