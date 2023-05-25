import React from "react";
import { ToastContainer, toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleButton = () => {
        if(!this.state.title) {
            toast.error("Missing");
            return;
        }
        const todo = {
            id: Math.floor(Math.random() * 10001),
            title: this.state.title
        }
        this.props.addNewToDo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        const { title } = this.state
        return (
            <>
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleInput(event)}/>
                <button onClick={()=> this.handleButton()} type="button" className="button">Add</button>
            </div>
            </>
        )
    }
}
export default AddToDo;