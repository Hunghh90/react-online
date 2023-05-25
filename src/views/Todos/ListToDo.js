import React from "react";
import "./ListToDo.scss";
import AddToDo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listToDos: [
            {id: "todo1", title: "Doing homework"},
            {id: "todo2", title: "Learn English"},
            {id: "todo3", title: "Watch video IT"},
        ],
        editToDo: {}
    };
    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Success")
    }
    handleDeleteToDo = (todo) => {
        let currenToDo = this.state.listToDos.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currenToDo
        });
        toast.success("Delete Todo Success")
    }
    handleEditToDo = (todo) => {
        const { listToDos,  editToDo } = this.state;
        const isEmptyObj = Object.keys(editToDo).length === 0;
        if (!isEmptyObj && editToDo.id === todo.id) {
            let listToDosCopy = [...listToDos];
            let objIndex = listToDosCopy.findIndex((item => item.id === todo.id));
            listToDosCopy[objIndex].title = editToDo.title;
            this.setState({
                listToDos: listToDosCopy,
                editToDo: {}
            })
            toast.success("Update ToDo Success")
            return;
        }
        this.setState({
            editToDo: todo
        })
    }
    handleOnchangeEditToDo = (event) => {
        const editToDoCopy = {...this.state.editToDo};
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })
    }
    render() {
        const { listToDos,  editToDo } = this.state;
        const isEmptyObj = Object.keys(editToDo).length === 0;
        return (
            <>
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                        listToDos.map((item,index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj ?
                                        <span>{index+1} - {item.title}</span>
                                        :
                                        <>
                                        {editToDo.id === item.id ?
                                            <span>{index + 1} - <input onChange={(event) => this.handleOnchangeEditToDo(event)} value={editToDo.title}/></span>
                                            :
                                            <span>{index+1} - {item.title}</span>
                                        }
                                        </>
                                    }
                                    <button onClick={() => this.handleDeleteToDo(item)} className="button delete">Delete</button>
                                    <button onClick={() => this.handleEditToDo(item)} className="button edit">
                                        { !isEmptyObj && editToDo.id === item.id ? "Save" : "Edit"}
                                        </button>
                                    
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}
export default ListToDo;