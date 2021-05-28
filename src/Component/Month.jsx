import useWage from './hooks/useWage';

const Month = ({ name, years }) => {
  const {
    wage,
    extraHours,
    missedHours,
    incrementWage,
    decrementWage,
    incrementHours,
    decrementHours,
  } = useWage(years);

  return (
    <div>
      <h1>In One Month</h1>
      <p>{name}</p>
      <p>Monthly wage: {wage}</p>
      <label>
        Hours missed per month
        <input
          value={missedHours}
          onChange={(e) => {
            decrementHours(e);
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
            incrementHours(e);
          }}
        ></input>
      </label>
      <button onClick={incrementWage}>Increment Wage</button>
    </div>
  );
};

export default Month;
