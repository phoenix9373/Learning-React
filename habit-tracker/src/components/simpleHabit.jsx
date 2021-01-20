import React, { useEffect, useRef, useState } from 'react';
import './simpleHabit.css';

// 함수 컴포넌트는 props나 state가 변경되면, 콜백함수 전체가 반복된다.
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // 초기값 지정, count와 count를 업데이트하는 setCount 반환
  const spanRef = useRef(); // 한 번만 만들고, 메모리에 저장해둔 다음 재사용한다.

  console.log('test');
  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  });

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{this.state.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
