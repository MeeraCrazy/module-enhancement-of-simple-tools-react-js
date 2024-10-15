// Write your code here

import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    this.setState({editing: false}) // Exit edit mode
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              className="save-input"
              onChange={this.handleChange}
            />
            <button
              onClick={this.handleSave}
              type="button"
              className="save-button"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <div>
              <button
                onClick={this.handleEdit}
                type="button"
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
