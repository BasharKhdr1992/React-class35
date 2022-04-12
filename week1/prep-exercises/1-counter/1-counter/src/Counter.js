import { useState, useEffect } from 'react';

const Count = ({ count }) => {
  return <h1>{count}</h1>;
};

const Button = ({ inc, dec, val }) => {
  return (
    <div>
      <button onClick={() => inc(val)}>Add {val}!</button>&nbsp;&nbsp;
      <button onClick={() => dec(val)}>Subtract {val}!</button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  const feedback = count > 10 ? `It's higher than 10` : `keep counting...`;

  return (
    <>
      <p>{feedback}</p>
      <Count count={count} />
      <Button
        val={1}
        inc={(val) => setCount((prevCount) => prevCount + val)}
        dec={(val) => {
          setCount((prevCount) => Math.max(prevCount - val, 0));
        }}
      />
      <br />
      <Button
        val={2}
        inc={(val) => setCount((prevCount) => prevCount + val)}
        dec={(val) => {
          setCount((prevCount) => Math.max(prevCount - val, 0));
        }}
      />
    </>
  );
};

export default Counter;
