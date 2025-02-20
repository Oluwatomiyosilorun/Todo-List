import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if (!this.state.title) {
            alert('Enter a todo');
            return;
        }
        this.props.addTodo(this.state.title);
        this.setState({title: ''});    
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" name="title" placeholder="Add Todo ..." 
                style={{flex:'10',padding:'5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="submit" value="submit" className="btn"
                style={{flex:'1'}} />
            </form>
        )
    }
}

export default AddToDo
