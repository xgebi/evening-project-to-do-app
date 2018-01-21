import React, { Component } from 'react';
import './task-component.css';

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      editing: false,
    };
  }

  /**
   * Enters editing mode
   */
  startEdit() {
    this.setState({
      editing: true,
    }, () => {
      this.input.focus();
    });
  }

  /**
   * Saves task
   */
  saveEdit() {
    this.props.onEdit(this.props.index, this.state.tempTask);
    this.setState({
      editing: false,
    });
  }

  /**
   * Leaves editing mode
   */
  cancelEdit() {
    this.setState({
      editing: false,
    });
  }

  /**
   * Deletes task
   */
  deleteTask() {
    this.props.onDelete(this.props.index);
  }

  /**
   * Saves temporary value until user chooses to save edit
   * 
   * @param {object} ev onBlur event 
   */
  saveTempTask(ev) {
    this.setState({
      tempTask: ev.target.value
    })
  }

  /**
   * When editing mode is NOT on, this function displays plain text, otherwise an input
   */
  showTextOrInput() {
    if (!this.state.editing) {
      return (
        <p>
          {this.props.task}
        </p>
      );
    } else {
      return (
        <input type="text" defaultValue={this.props.task} ref={(el) => this.input = el} onBlur={this.saveTempTask.bind(this)} />
      );
    }
  }

  /**
   * Shows buttons depending on editing/reading mode
   */
  showButtons() {
    if (!this.state.editing) {
      return (
        <section className="buttons">
          <button className="edit-button" onClick={this.startEdit.bind(this)}>
            Edit
          </button>
          <button className="delete-button" onClick={this.deleteTask.bind(this)}>
            Delete
          </button>
        </section>
      );
    } else {
      return (
        <section className="buttons">
          <button className="save-button" onClick={this.saveEdit.bind(this)}>
            Save
          </button>
          <button className="cancel-button" onClick={this.cancelEdit.bind(this)}>
            Cancel
          </button>
        </section>
      );
    }
  }

  render() {
    return (
      <div className="task">
        {this.showTextOrInput()}
        {this.showButtons()}
      </div>
    );
  }
}

export default TaskComponent;