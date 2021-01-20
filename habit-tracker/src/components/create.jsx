import React, { Component } from 'react';

class Create extends Component {
  handleCreate = (e) => {
    console.log(e);
    console.log(e.type);
    const input = document.querySelector('.create-input');
    if (e.key === 'Enter' && (input || false)) {
      this.props.handleCreate(input.value);
      input.value = ''; // 초기화.
    } else if (e.type === 'click') {
      this.props.handleCreate(input.value);
      input.value = ''; // 초기화.
    }
  };
  render() {
    return (
      <div className="create">
        <input
          onKeyPress={this.handleCreate}
          className="create-input"
          type="text"
          placeholder="Habit"
        />
        <button onClick={this.handleCreate} className="create-submit">
          Add
        </button>
      </div>
    );
  }
}

export default Create;
