import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle=() => 
    {
        return { 
            background:'#f0f0f0',
            padding:'10px',
            borderBottom:'1px #ccc dotted' ,
            textDecoration :this.props.todo.completed ?'line-through':'none'}
    }

   
    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>{' '}
                    {title}{' '}
                    {id}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,this.props.todo.id)}>X</button>
                </p>
            </div>
        )
    }
}

//propTypes
Todoitem.propTypes=
{
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired,
}

const btnStyle={
    backgroundColor:'red',
    color:'white',
    borderRadius:'50%',
    border:'none',
    padding:'3px 5px',
    float:'right'
}

export default Todoitem
