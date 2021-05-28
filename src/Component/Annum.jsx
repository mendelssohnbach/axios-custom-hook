import { useState } from 'react';

const Annum = ({ name, years }) => {
  const [wage, setWage] = useState(years * 3);
  const [extraHours, setExtraHours] = useState(0);
  const [missedHours, setMissedHours] = useState(0);

  const incrementWage = () => {
    setWage(wage + Number(extraHours));
  };

  const decrementWage = () => {
    setWage(wage - Number(missedHours));
  };

  return (
    <div>
      <h1>In One Year (12X)</h1>
      <p>{name}</p>
      <p>Yearly Wage: {wage * 12}</p>
      <label>
        Hours missed per month
        <input
          value={missedHours}
          onChange={(e) => {
            setMissedHours(e.target.value);
          }}
        ></input>
      </label>
      <button onClick={decrementWage}>Decrement Wage</button>

      <br />
      <br />

      <label>
        Extra hours per month
        <input
          value={extraHours}
          onChange={(e) => {
            setExtraHours(e.target.value);
          }}
        ></input>
      </label>
      <button onClick={incrementWage}>Increment Wage</button>
    </div>
  );
};

export default Annum;
