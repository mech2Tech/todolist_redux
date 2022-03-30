import React from 'react';
import { connect } from 'react-redux';
class TodoList extends React.Component {
  render(){
    console.log(this.props.items)
    return(
      <>
        <div className = 'mainPage'>
          <h1>todos</h1>
          <ul className = "todoListItem">
            {this.props.items.map((item, index) => (
              <li key = {index}>
                <span> {item.title} </span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
const mapStore = (store) => ({ items: store.items, title: store.newItem });
export default connect(mapStore)(TodoList);