import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const AssignJob = ({handleBtnClick, jobs, employees, assignJob}) => {
    const [ cur_job_id, set_cur_job_id ] = useState(null)
    const [ cur_emp_id, set_cur_emp_id ] = useState(null)
    // const [ cur_selected_employee, set_cur_selected_employee ] = useState(1)

    const [ at_selectEmp, setAt_selectEmp ] = useState(false)

    const triggerAssignJob = (i_d) => {
        set_cur_emp_id(i_d)
    }
    return(
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 10 }}>AssignJob</Text>
            <View>
                <View style={{ display: at_selectEmp ? "none":"flex" }}>
                    {
                        jobs && jobs.filter(sinJ => sinJ.isAssigned === false).map((item) => (
                            <TouchableOpacity style={styles.job} key={item.id} onPress={() => {set_cur_job_id(item.id); setAt_selectEmp(true)}}>
                                <Text>{item.make}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ display: at_selectEmp ? "flex":"none" }}>
                    {
                        employees && employees.filter(sin => sin.hasJob === false).map((item, index) => (
                            <TouchableOpacity 
                                    key={item.id} 
                                    style={styles.employee} 
                                    onPress={() => {
                                                        triggerAssignJob(item.id); 
                                                        // set_cur_selected_employee(index + 1)
                                                    }}>
                                <Text style={{ color: "#fff" }}>{item.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <TouchableOpacity style={{
                backgroundColor: "#01050f",
                color: "#fff",
                marginTop: 10,
                padding: 12,
                alignItems: "center",
                fontFamily: "sans-serif",
                borderRadius: 6,
                display: cur_emp_id ? "flex":"none"
            }} onPress={() => {handleBtnClick("reset"); assignJob(cur_job_id, cur_emp_id)}}>
                <Text style={styles.btn_text}>ASSIGN JOB</Text>
            </TouchableOpacity>
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
      job: {
          backgroundColor: "#fff",
          padding: 8,
          marginBottom: 5,        
      },
      employee: {
          backgroundColor: "#01a2e794",
          marginBottom: 6,
          paddingVertical: 4,
          paddingHorizontal: 8,
          borderRadius: 3,
      }
})
