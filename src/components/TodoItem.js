import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //styling with function
    // getStyle = () =>{
    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration:'line-through'
    //         }
    //     }else{
    //         return{
    //             textDecoration:'none'
    //         }
    //     }
    // } or

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed?'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                    onChange={this.props.markComplete.bind(this,id)}
                    />{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle ={
    background: '#ff0000',
    color:'white',
    border:'none',
    borderRadius:'50%',
    padding: '5px 9px',
    cursor:'pointer',
    float:'right'
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
