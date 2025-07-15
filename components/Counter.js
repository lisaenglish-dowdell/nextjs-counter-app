import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Counter = ({ label }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-4">
      <h2>{label}</h2>
      <p>Count: {count}</p>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Increase
        </Button>
        <Button variant="secondary" onClick={() => setCount(count - 1)}>
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
