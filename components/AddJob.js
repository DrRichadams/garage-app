import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { TextInput } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export const AddJob = ({handleBtnClick, add_job_func}) => {
    const [ loc_offsite, setLoc_offsite ] = React.useState(false)
    const [ job, setJob ] = React.useState({
        id: Math.random(),
        make: "",
        location: "", //offsite - onsite
        tasks: [],
        report: "",
        isAssigned: false,
    })

    const [ tempTask, setTempTask ] = React.useState("")
    const set_task = () => {
        tempTask && setJob({
            ...job, tasks: [
                ...job.tasks, { task_name: tempTask, status: "pending", assigned_employee: "", report: "" },
            ]
        })

        setTempTask("")
    }

    const setMake = (mk) => {
        mk && setJob({
            ...job, make: mk
        })
    }

    React.useEffect(() => {
        setJob({
            ...job, location: loc_offsite ? "offsite":"onsite"
        })
    }, [loc_offsite])

    const submitJob = () => {
        if( job.make && job.tasks.length ) {
            add_job_func(job)
            handleBtnClick("reset")
            console.log("From addjob", job)
        } else {
            console.log("Failed")
        }
    }

    return(
        
        <View>
            <Text style={styles.main_title}>Adding a Job</Text>
            <Text style={styles.text_input_title}>What is the make of the car</Text>
            <TextInput style={styles.text_input} onChangeText = { text => setMake(text)} />

            <Text style={styles.add_tasks_title}>Add Tasks</Text>
            <View>
                {
                    job.tasks && job.tasks.map((item, index) => (
                        <Text key={index}>{item.task_name}</Text>
                    ))
                }
            </View>
            <View style={styles.task_in_box}>
                <TextInput style={styles.text_input2} onChangeText = {(text) => setTempTask(text)} value={tempTask} />
                <TouchableOpacity style={styles.addBtn} onPress={() => set_task()}><AntDesign name="plus" size={20} color="#fff" /></TouchableOpacity>
            </View>

            <TouchableOpacity
             style={{ flexDirection: "row", alignItems: "center", marginTop: 18 }} onPress={() => {
                setLoc_offsite(!loc_offsite)
                console.log(job)
            }}>
                {/* <View style={styles.location_box}></View> */}
                <View style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "#01050f",
                    marginRight: 12,
                    padding: 5,
                    backgroundColor: loc_offsite ? "#01050f":"transparent"
                }}></View>
                <Text>Is the job offsite ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={() => submitJob()}>
                <Text style={styles.btn_text}>ADD JOB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("reset")}>
                <Text style={styles.btn_text}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    add_tasks_title: {
        marginTop: 20,
        marginBottom: 12,
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: "orangered",
        color: "#fff",
        marginTop: 10,
        padding: 12,
        alignItems: "center",
        fontFamily: "sans-serif",
        borderRadius: 6,
      },
    btn2: {
        backgroundColor: "rgb(1,161,231)",
        color: "#fff",
        marginTop: 30,
        padding: 12,
        alignItems: "center",
        fontFamily: "sans-serif",
        borderRadius: 6,
      },
      btn_text: {
          color: "#fff",
      },
      task_in_box: {
          flexDirection: "row",
      },
      addBtn: {
          backgroundColor: "rgb(1,161,231)",
          padding: 8,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 8,
          width: 60
      },
      main_title: {
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 16,
          borderLeftColor: "rgb(1,161,231)",
          borderLeftWidth: 5,
          borderStyle: "solid",
          paddingLeft: 12
      },
      text_input: {
          backgroundColor: "#01050f9a",
          color: "#fff",
          padding: 8,
      },
      text_input2: {
          backgroundColor: "#01050f9a",
          color: "#fff",
          padding: 8,
          flex: 1
      },
      text_input_title: {
          marginTop: 25,
          marginBottom: 16,
      },
      location_box: {
          width: 20,
          height: 20,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#01050f",
          marginRight: 12
      }
})
