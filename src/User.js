import React from 'react';
import { connect } from 'react-redux';
import { createUser } from './store';

class User extends React.Component {
  
  constructor(){
    super()
    this.state = {
      name: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.formChange = this.formChange.bind(this);
  }


  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSave(event){
    const { createUser } = this.props

    event.preventDefault()

      createUser({
        name: this.state.name
      })
    }

    formChange(event){
      this.setState({
        name: event.target.value
      })
    }
  


  render(){

    return (
      <div>
        <hr />
        <br />
        <div>
        <form onSubmit={this.onSave}>
          First Name:
          <input type='text' name='name' value={this.state.name} onChange={this.onChange} />
          <br />
          <button>Submit Changes</button>
        </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => { dispatch(createUser(user)) }
  };
};


export default connect(null, mapDispatchToProps)(User)