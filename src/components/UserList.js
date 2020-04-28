import React, {Component} from 'react';
import {getUsers} from '../action/actions'
import {connect} from 'react-redux';
import UserItem from './UserItem';

class UserList extends Component  {
  componentDidMount() {
    this.props.getUsers()
  }
  render () {
  return (
    <div className="d-flex justify-content " >
      <header className="App-header" style={{backgroundColor:"pink" , display:"flex" , flexWrap:"wrap", justifyContent:"space-around",cursor:"pointer"}}>
      {
          this.props.users.map(el=><UserItem info={el}/>)
        }
      </header>
    </div>
  );
}
}
const mapStateToProps=state=> {
  return {
    users:state.users
  }
}

export default connect(mapStateToProps,{getUsers}) (UserList);
