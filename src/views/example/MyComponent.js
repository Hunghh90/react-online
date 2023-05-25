import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        jobs: [
            { id: 1, title: "job1", salary: 500 },
            { id: 2, title: "job2", salary: 600 },
            { id: 3, title: "job3", salary: 700 }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            jobs: [...this.state.jobs,job]
        })
    }

   deleteJob = (job) => {
        let currenJobs = this.state.jobs.filter(item=> item.id !== job.id);
        this.setState({
            jobs: currenJobs
        })
   }
    
    render() {
        return (
            <>
            <AddComponent addNewJob={this.addNewJob}/>
                
                <ChildComponent jobs={this.state.jobs} deleteJob={this.deleteJob}/>
                
            </>
        )
    }
}

export default MyComponent;