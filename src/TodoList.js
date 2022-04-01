import React from 'react';
import { connect } from 'react-redux';


class TodoList extends React.Component {
  
  handleChange = (e) => this.props.dispatch({
    type: 'HANDLE_CHANGE',
    title: e.target.value
  })
  addItem = (e) => this.props.dispatch({
    type: 'ADD_ITEM'

  })
  render(){
    console.log(this.props)
    return(
      <>
        <div className = 'mainPage'>
          <h1>todos</h1>
          <input 
            type = 'text'
            placeholder = 'what needs to be done?'
            value={this.props.title}
            onBlur = {this.handleChange}
          />
          <button onClick = {this.addItem}>Enter Item</button>
          <ul>
            {this.props.items.map((item, id) => 
              <li key = {id}>
                {item.title}
              </li>
            )}
          </ul>
        </div>
      </>
    );
  }
}
const mapStoreToProps = (store) => ({ items: store });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: function() {
//       dispatch ({type: 'ADD_ITEM'})
//     }
//   }
// }

export default connect(mapStoreToProps)(TodoList);