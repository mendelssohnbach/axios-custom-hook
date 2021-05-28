import { useState } from 'react';

const useWage = (years) => {
  const [wage, setWage] = useState(years * 3);
  const [extraHours, setExtraHours] = useState(0);
  const [missedHours, setMissedHours] = useState(0);

  const incrementWage = () => {
    setWage(wage + Number(extraHours));
  };

  const decrementWage = () => {
    setWage(wage - Number(missedHours));
  };

  const incrementHours = (e) => {
    setExtraHours(e.target.value);
  };

  const decrementHours = (e) => {
    setMissedHours(e.target.value);
  };

  return {
    wage,
    extraHours,
    missedHours,
    incrementWage,
    decrementWage,
    incrementHours,
    decrementHours,
  };
};

export default useWage;
