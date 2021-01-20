import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  // 데이터를 변경하는 작업은 데이터를 보유한 컴포넌트에서 해야한다.

  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    console.log('habits');
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
            // <props name>={<전달할 data>}
          ))}
        </ul>
        <button onClick={this.props.onReset} className="btn">
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
