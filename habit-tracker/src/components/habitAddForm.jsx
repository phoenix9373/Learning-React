import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  console.log('habitAddForm');
  const formRef = React.createRef(); // form 에서 나오는 것을 초기화.
  const inputRef = React.createRef(); // Ref Obj 생성

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name); // 이름이 있다면 함수 실행.
    formRef.current.reset(); // 방법 2: 정석
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
