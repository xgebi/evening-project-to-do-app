import React, { Component } from 'react';
import './App.css';

import CreateButtonComponent from './button-components/create-button-component.js';
import TaskComponent from './task-component/task-component.js';

class App extends Component {
  /**
   * Constructor sets item to empty string and initializes an empty array for items
   */
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: [],
    };

  }

  /**
   * inputOnBlur captures current value of input
   * 
   * @param {object} ev event onBlur
   */
  inputOnBlur(ev) {    
    this.setState({
      item: ev.target.value
    });    
  }

  /**
   * createItem 
   */
  createItem() {    
    if (this.state.item.length > 0) {
      this.inputTask.value = "";
      this.inputTask.focus();
      this.setState((prevState) => {
        let items = prevState.items;
        items.push(String(this.state.item));

        return {
          item: "",
          items: items,
        }
      });
    }
  }

  /**
   * Displays items from state
   */
  displayItems() {
    let tasks = [];
    this.state.items.forEach((task, i) => {
      tasks.push(
        <TaskComponent 
          key={i}
          index={i}
          task={task} 
          onEdit={this.editItem.bind(this)} 
          onDelete={this.deleteItem.bind(this)} 
        />
      );
    });
    if (tasks.length === 0) {
      tasks.push(
        <p key={1}>
          No tasks
        </p>
      );
    }
    return tasks;
  }

  /**
   * Removes task from the items array
   * 
   * @param {int} index 
   */
  deleteItem(index) {
    this.setState((prevState) => {
      let items = prevState.items;
      items.splice(index, 1);
      
      return {
        items: items,
      }
    });
  }

  /**
   * Changes certain item in items array
   * 
   * @param {int} index 
   * @param {str} task 
   */
  editItem(index, task) {
    if (index >= 0 && index < this.state.items.length) {
      this.setState((prevState) => {
        let items = prevState.items;
        items[index] = task;

        return {
          items: items,
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
        </header>
        <main className="main">
          <section className="new-item">
            <input type="text" ref={el => this.inputTask = el} onBlur={this.inputOnBlur.bind(this)} />
            <CreateButtonComponent onClick={this.createItem.bind(this)} />
          </section>
          <section className="list-of-items">
            {this.displayItems()}
          </section>
        </main>
        <footer>
          This App was made by Sarah Gebauer
        </footer>
      </div>
    );
  }
}

export default App;
