import React, { PureComponent } from 'react';

// 내부에서 어떤 로직을 처리하기보다
// 단순히 외부에서 받은 데이터를 '보여주는 컴포넌트'로 작성
// 가장 작은 단위의 컴포넌트 - 취미를 보여주기만 하는 역할.
class Habit extends PureComponent {
  // 라이프 사이클 컴포넌트 활용
  componentDidMount() {
    // 마운트되면 호출
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    // 지우기 전에 호출
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }
  // 내려받은 함수 호출하는 콜업 함수 작성.
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  // 렌더 함수 작성
  render() {
    const { name, count } = this.props.habit;
    console.log(`habit : ${name}`);

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>

        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
