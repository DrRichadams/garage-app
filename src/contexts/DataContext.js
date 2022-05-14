import React, { createContext } from "react"

export const DataContext = createContext()

class DataContextProvider extends React.Component {
    state = {
        jobs: [
            { 
                id: Math.random(),
                make: "Nissan",
                location: "onsite", //offsite
                tasks: [
                    { task_name: "Wheel alignment", status: "pending", assigned_employee: "", report: "" },
                    { task_name :"Brakes diagnostics", status: "pending", assigned_employee: "", report: "" },
                    { task_name: "Spray painting", status: "pending", assigned_employee: "", report: "" },
                ]
            }
        ],
        employees: [
            {
                id: Math.random(),
                name: "Romeo",
                task: {
                    job: "",
                    task_name: "",
                    status: "",
                }
            },
        ],
        
        views: {
            add_job: false,
            employees: false,
            reports: false,
            assign_tasks: false,
        }
    }


    changeView(view) {
        switch(view) {
            case "reset":
                this.setState({
                    ...this.state,
                    add_job: false,
                    employees: false,
                    reports: false,
                    assign_tasks: false
                })
            break;
            case "add_job":
                this.setState({
                    ...this.state,
                    add_job: true,
                    employees: false,
                    reports: false,
                    assign_tasks: false
                })
            break;
            case "employees":
                this.setState({
                    ...this.state,
                    add_job: false,
                    employees: true,
                    reports: false,
                    assign_tasks: false
                })
            break;
            case "reports":
                this.setState({
                    ...this.state,
                    add_job: false,
                    employees: false,
                    reports: true,
                    assign_tasks: false
                })
            break;
            case "assign_tasks":
                this.setState({
                    ...this.state,
                    add_job: false,
                    employees: false,
                    reports: false,
                    assign_tasks: true
                })
            break;
            default:
                this.setState({
                    ...this.state,
                    add_job: false,
                    employees: false,
                    reports: false,
                    assign_tasks: false
                })
            break;
        }
    }

    render() {
        return(
            <DataContext.Provider value={{mydata: this.state, changeView: this.changeView}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataContextProvider;