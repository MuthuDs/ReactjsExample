import React, { Component } from 'react'
import propTypes from 'prop-types'
class Addtodo extends Component{

state={
        title:''
      }
change=(e)=>this.setState({[e.target.name]:e.target.value});
submit=(e)=>
{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''})

}
    render(){
        return (
            <form onSubmit={this.submit}style={{display:'flex'}}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Here..."
                    style={{flex:'10',padding:'5px'}}
                    value={this.state.title}
                    onChange={this.change}
                />
                <input 
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex:'1'}}
                />
            </form>
        )
    }
}

Addtodo.propTypes=
{
    addTodo: propTypes.func.isRequired
}


export default Addtodo;