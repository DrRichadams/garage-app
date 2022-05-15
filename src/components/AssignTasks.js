import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const AssignTasks = ({handleBtnClick, employees, jobs}) => {
    const [ current_job_id, set_Current_job_id ] = React.useState(null)
    let cur_tasks = current_job_id && jobs.find(item => item.id === current_job_id)

    const [ task_views, set_task_views ] = React.useState({ job_listing: true, task_listing: false, employee_listing: false, })
    const unassigned_employees = employees.filter(item => item.task.hasTask === false);

    const shiftView = (typ) => {
        if(typ === "job_listing") set_task_views({job_listing: true, task_listing: false, employee_listing: false,})
        if(typ === "task_listing") set_task_views({job_listing: false, task_listing: true, employee_listing: false,})
        if(typ === "employee_listing") set_task_views({job_listing: false, task_listing: false, employee_listing: true,})
    }

    return(
        <View>
            <Text style={styles.assign_main_title}>AssignTasks</Text>

            {
                task_views.job_listing ? <View>
                    <Text style={styles.select_job}>Select Job</Text>
                    <View>
                        {
                            jobs && jobs.map((item, index) => (
                                <TouchableOpacity key={item.id} style={styles.job_box} onPress={() => {set_Current_job_id(item.id); shiftView("task_listing")}}>
                                    <Text>{item.make}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View> 
                : task_views.task_listing ? <View>
                    <Text>Tasks for | {cur_tasks && cur_tasks.make}</Text>
                    <View>
                        {
                            cur_tasks && cur_tasks.tasks.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.task_btn} onPress={() => { shiftView("employee_listing") }}>
                                    <Text>{item.task_name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View> 
                : task_views.employee_listing ? <View>
                    <Text>Available employees</Text>
                    <View>
                        {
                            unassigned_employees && unassigned_employees.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.employee_btn}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>  : <View><Text>Nothing to display</Text></View>
            }

            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("reset")}>
                <Text style={styles.btn_text}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: "orangered",
        color: "#fff",
        marginTop: 10,
        padding: 12,
        alignItems: "center",
        fontFamily: "sans-serif",
        borderRadius: 6,
      },
      btn_text: {
          color: "#fff",
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
      assign_main_title: {
          fontWeight: "bold",
          fontSize: 20
      },
      job_box: {
        backgroundColor: "#01a2e79c",
        marginBottom: 5,
        padding: 8,
    },
    select_job: {
        marginTop: 20,
        marginBottom: 8,
        textTransform: "uppercase"
    },
    employee_btn: {
        backgroundColor: "#01a2e79c",
        padding: 6,
        marginBottom: 5,
        borderRadius: 4
    },
    task_btn: {
        backgroundColor: "#01a2e79c",
        marginBottom: 4,
        padding: 8,
    },
})