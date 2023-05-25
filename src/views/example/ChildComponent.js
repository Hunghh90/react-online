import React from "react";
import "./Demo.scss";
class ChildComponent extends React.Component {
    
    state = ({
        showJobs: false,
    })
    
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleDelJob = (job) => {
        this.props.deleteJob(job);
    }
    
    render() {
        const { jobs } = this.props
        const { showJobs } = this.state
        return (
            <>
                {showJobs ?
                    <div><button className="btn-show" onClick={this.handleShowHide}>Show</button></div>
                    :
                    <>
                    <div className="job-list">
                        {
                            jobs.map((v,k)=> {
                                return (
                                    <div key={v.id}>{v.title} - {v.salary}&nbsp;<span onClick={() => this.handleDelJob(v)}>x</span></div>
                                )
                            })
                        }
                    </div>
                    <div><button onClick={this.handleShowHide}>Hide</button></div>
                    </>
                }
            </>
            
        )
    }
}

export default ChildComponent;