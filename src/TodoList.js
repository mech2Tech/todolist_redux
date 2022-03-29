import React from 'react';
import { connect } from 'react-redux';



class TodoList extends React.Component {
  render(){
    console.log(this.props.items)
    return(
      <>
        <form className = 'inputBox'>
          <input type = 'text'
            defaultValue = {this.props.title}
            placeholder = 'What needs to be done ?'
            onChange = {this.props.addnewItem} 
            onKeyDown ={this.props.handleKeyPress}
            />
        </form>
        <ul className = "todoListItem">
          {this.props.items.map((item, index) => (
            <li key = {index}>
              <input type = 'checkBox' 
                checked = {item.done} 
                onChange = {() => {this.props.todoChanged(item.id);}}
              />
              <span> {item.title} </span>
              <button className = 'deleteButton'>Delete</button>
            </li>
          ))}
        </ul>
        <button> All </button>
        <button> Active </button>
        <button> Completed </button>
        <button> Clear Completed </button>
      </>
    );
  }
}

const mapStore = (store) => ({ items: store.items, title: store.newItem });
const mapAction = (dispatch) => {
  return {
    addnewItem: () => dispatch ({ type: 'ADD_ITEM'}),
    todoChanged: () => dispatch ({type: 'TODO_CHANGED'})
  }
}
export default connect(mapStore, mapAction)(TodoList);

/*let items = [];
class ToDoList extends Component {
  constructor (props){
    super (props);
    this.state = { items, item: "", done: false }
  }
  handleKeyPress = (e) => {
    const { items } = this.state;
    if (e.key === 'Enter') {
      const value = e.target.value;
      const newTodo = {
        id: items.length + 1,
        title: value,
        done: false
      }
      items.push(newTodo);
      this.setState({ items: items, item: "" })
      e.preventDefault();
    }
  };
  handleCheck = (e) => {
    const items = [...this.state.items];
    items.forEach(item => (item.done = e.target.checked));
    this.setState({ items })
  }
  updateItem = (e) => {
    this.setState({ item: e.target.value })
  }
  deleteItem = (ind) => {
    const items = [...this.state.items];
    items.splice(ind, 1)
    this.setState({items:items})
  }
  showAll  = () => {
    this.setState({ items })
  }
  showActive = () => {
    const newItems = items.filter(item => !item.done).map(item => item)
    this.setState({ items: newItems })
  }
  showComplete = () => {
    const newItems = items.filter(item => item.done ).map(item => item)
    this.setState({ items:newItems })
  }
  clearCompleted = () => {
    const newItems = items.filter(item => item.done==false).map(item => item)
    this.setState({ items: newItems })
  }
  todoChanged = (e, id) => {
    for (let item of items) {
      if (item.id === id) {
        item.done = e.target.checked;
      }
    }
    this.setState({ items })
  }
  countActiveItems = () => {
    return this.state.items.filter(item => !item.done).length
  }
  
  render () {
    return (
        <div className= "mainPage">
          <h1> todos </h1>
          <table className = "mainTable">
            <thead>
                <tr>
                  <td> 
                    <input
                      type = "checkBox"
                      onClick = {this.handleCheck}
                      className = "checkBox"
                    /> 
                  </td>
                  <td colSpan = "2"> 
                    <input 
                      type = "text" 
                      placeholder = "Add new todo item" 
                      value = {this.state.item} 
                      onChange = {this.updateItem} 
                      className = "inputBox"
                      onKeyDown = {this.handleKeyPress}
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, ind) => (
                    <tr key = {ind} className= "todoItemRow">
                      <td> 
                        <input
                          type = "checkBox" 
                          checked = {item.done}
                          onChange = {(e) => {this.todoChanged(e, item.id);}}
                          className = "checkBox" 
                        />
                      </td>
                      { item.done == true ?  
                        <td className = "todoListItem" style={{textDecoration: "line-through"}}> 
                          {item.title}{""} 
                        </td> : 
                        <td className = "todoListItem" > 
                          {item.title}{""} 
                        </td> 
                      }
                      <td>
                        <button className = "deleteButton" onClick = { () => {this.deleteItem(ind);}}>
                          x 
                        </button>
                      </td>
                    </tr>
                  )) 
                }
                  <tr>
                    <td className="activeItemsCounter">
                      {this.countActiveItems()} {this.state.items.filter(item => !item.done).length < 2 ? 
                        "item left" : "items left" }
                    </td>
                    <td> 
                      <button className="all_Active_Complete_Buttons" onClick = {() => {this.showAll();}}> 
                        All 
                      </button>
                      <button className="all_Active_Complete_Buttons" onClick = {() => {this.showActive();}}> 
                        Active 
                      </button>
                      <button className="all_Active_Complete_Buttons" onClick = {() => {this.showComplete();}}> 
                        Complete 
                      </button>
                    </td>
                    <td> 
                      {this.state.items.filter(item => item.done).length ? (
                        <button className = "clearCompleted" onClick = {() => {this.clearCompleted();}}> 
                          Clear Completed
                        </button>
                      ) : null}
                    </td>
                  </tr>
              </tbody>
          </table>
          <br/><br/><br/><br/><br/>
          <div className="footer">
            Double click to edit a todo <br/>
            Created by Sajni Shah <br/>
            Part of ToDoMVC assignment
          </div>
        </div>
    )
}}

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;*/