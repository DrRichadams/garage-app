import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const AssignTasks = ({handleBtnClick, employees, jobs}) => {
    return(
        <View>
            <Text style={styles.assign_main_title}>AssignTasks</Text>
            <Text style={styles.select_job}>Select Job</Text>
            <View>
                {
                    jobs && jobs.map((item, index) => (
                        <TouchableOpacity key={item.id} style={styles.job_box}>
                            <Text>{item.make}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
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
})