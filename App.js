import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Menu } from './components/Menu';
import { AddJob } from './components/AddJob';
import { Reports } from './components/Reports';
import { AssignJob } from './components/AssignJob';

export default function App() {
  const [ userType, setUserType ] = useState({
      login: true,
      admin: false,
      regular: false
  })
  const [ regularID, setRegularID ] = useState(0)
  
  const [ adminView, setAdminView ] = useState({ add_job: false, assign_job: false, reports: false })
  const [ jobs, setJobs ] = useState([
    {
      id: (Math.random() * Math.random()),
      make: "Nissan",
      location: "offsite",
      tasks: [
        { id: (Math.random() * Math.random()), task_name: "Brakes", isDone: false },
      ],
      report: "",
      isAssigned: false,
      assignedTo: "",
    },
  ])

  const [ employees, setEmployees ] = useState([
    { id: 1, name: "Azia",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 2, name: "George",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 3, name: "James",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 4, name: "Matthew",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 5, name: "Thomas",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 6, name: "Moses",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 7, name: "Tasha",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 8, name: "Laura",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 9, name: "Patie",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 10, name: "Sharon",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 11, name: "Sabastian",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 12, name: "Anna",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
    { id: 13, name: "Tomy",hasJob: false, job: { job_name: "", job_id: null, isDone: false, report: "" } },
  ])

  const [ cur_task_name, set_cur_task_name ] = React.useState("")

  const assignJob = (job_id, emp_id) => {
    console.log(job_id, emp_id)
    let chosenJob = jobs.find(item => item.id = job_id)
    let chosenEmployee = employees.find(item => item.id === emp_id)
    let assignJobassignJob = employees.forEach(employee => {
      if(employee.id == emp_id) {
        employee.hasJob = true
        employee.job.job_name = chosenJob.make
      }
    })

    let tempJobs = jobs.forEach(job => {
      if(job.id == job_id) {
        job.isAssigned = true
        job.assignedTo = chosenEmployee.name
      }
    })
    console.log("My tep employees", tempJobs)
}

  const handleBtnClick = (vw) => {
    if(vw === "add_job") setAdminView({ add_job: true, assign_job: false, reports: false })
    if(vw === "assign_job") setAdminView({ add_job: false, assign_job: true, reports: false })
    if(vw === "reports") setAdminView({ add_job: false, assign_job: false, reports: true })
    if(vw === "reset") setAdminView({ add_job: false, assign_job: false, reports: false })
  }

  const add_job_func = (jb) => {
     setJobs([
      ...jobs,
      {...jb}
     ])
    console.log("App data", jobs)
  }

    let cur_employee
    try{
      cur_employee = employees.find(item => item.id === regularID)
    } catch(e){console.log(e)}
    console.log("Found it", cur_employee)

    const checkJoDone = (ID_1, ID_2) => {
        let tempjob_data = jobs.forEach(item_job => {
          if(item_job.id === ID_1) {
            item_job.tasks.forEach(item_task => {
              if(item_task.id === ID_2) {
                item_task.isDone = true
                item_job.report = "All tasks are completed successfully."
              }
            })
          }
        })
        console.log("Finished", tempjob_data)
    }

  return (          
      <View style={styles.container}>
        <StatusBar />

        <View style={{ display: userType.admin ? "flex":"none", padding: 8 }}>
          {
            adminView.add_job ? <AddJob handleBtnClick = {handleBtnClick} add_job_func={add_job_func}/>
            : adminView.reports ? <Reports handleBtnClick = {handleBtnClick} /> 
            : adminView.assign_job ? <AssignJob handleBtnClick = {handleBtnClick} jobs={jobs} employees={employees} assignJob={assignJob} />
            : <Menu handleBtnClick = {handleBtnClick}/>
          }
          
          
          

          <Text style={{ fontWeight: "bold" }}>All jobs</Text>
          <View>
            {
              jobs && jobs.map((job, jindex) => <Text key={jindex} style={{ color: "rgb(1,161,231)", paddingLeft: 10 }}>{job.make} -------- Assigned to {job.assignedTo}</Text>)
            }
          </View>
        </View>

        <View style={{ display: userType.regular && regularID < 1 ? "flex":"none", padding: 8 }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Select your name here</Text>
              <View style={{ marginTop: 20 }}>
                {
                  employees && employees.map((item, index) => (
                    <TouchableOpacity key={index} style={{ backgroundColor: "#01050f", marginBottom: 5, padding: 8, borderRadius: 5 }} onPress={() => setRegularID(item.id)}>
                      <Text style={{ color: "#fff" }}>{item.name}</Text>
                    </TouchableOpacity>
                  ))
                }
              </View>
            </View>
        </View>

        <View style={{ display: userType.regular && regularID > 1 ? "flex":"none", padding: 8 }}>
            <Text>User</Text>
            <View>
              {
                // jobs[0].tasks.map((item, index) => (
                //   <View key={index}>
                //     <Text>{item.make}</Text>
                //   </View>
                // ))
                
                jobs && jobs.map((item, index) => (
                  <View>
                      <Text style={{ fontWeight: "bold" }}>Available tasks for the job | {item.make}</Text>
                      <View style={{ marginTop: 30 }}>
                        {
                          item.tasks.map((sin, Sind) => (
                            <View style={{ backgroundColor: "#01a2e754", padding: 6, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>{sin.task_name}</Text>
                                <TouchableOpacity 
                                      style={{ width: 20, height: 20, borderColor: "#01050f", borderStyle: "solid", borderWidth: 2 }}
                                      onPress={() => {checkJoDone(item.id, sin.id)}}
                                      >
                                </TouchableOpacity>
                            </View>
                          ))
                        }
                      </View>
                  </View>
                ))
              }
            </View>
        </View>

        <View style={{ display: userType.login ? "flex":"none", padding: 8 }}>
            <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 17 }}>Welcome to Valentines Garage</Text>
            <Text style={{ alignSelf: "center" }}>Make a valid selection below</Text>
            <View style={styles.user_type_btn_container}>
              <TouchableOpacity style={styles.user_type_btn} onPress={() => setUserType({login: false, admin: true, regular: false}) }>
                <Text>Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.user_type_btn} onPress={() => setUserType({login: false, admin: false, regular: true}) }>
                <Text>Employee</Text>
              </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity 
            style={{ display: userType.login ? "none":"flex",backgroundColor: "red", paddingVertical: 8, borderRadius: 6, paddingHorizontal: 16, justifyContent: "center", alignItems: "center", alignSelf: "center" }}
            onPress={() => {setUserType({login: true, admin: false, regular: false}); setRegularID(0)} }>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    // marginTop: 50
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "rgb(1,161,231)",
    textTransform: "uppercase"
  },
  input: {
    backgroundColor: "#ffff",
    padding: 12,
    // outline: "none",
  },
  user_type_btn_container: {
    justifyContent: "center",
    marginTop: 100,
  },
  user_type_btn: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 5,
    padding: 8,
  }
  
});
