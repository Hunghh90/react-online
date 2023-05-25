import React from "react";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.title || !this.state.salary) {
            alert("Nhap thong tin day du")
            return;
        }
        
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000 ),
            title: this.state.title,
            salary: this.state.salary,
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
            <form>
                    <label>Job's Title:</label><br/>
                    <input onChange={this.handleChangeTitle} type="text" value={this.state.title}/><br/>
                    <label>Salary:</label><br/>
                    <input onChange={this.handleChangeSalary} type="text" value={this.state.salary}/><br/><br/>
                    <input onClick={this.handleSubmit} type="submit" value="submit"/>
                </form>
            </>
        )
    }
}
export default AddComponent;