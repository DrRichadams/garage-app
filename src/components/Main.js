import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Main = ({handleBtnClick}) => {
    return(
        <View>
            <Text style={styles.main_title}>Garage menu</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("add_job")}>
                <Text>Add job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("employees")}>
                <Text>Employees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("reports")}>
                <Text>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => handleBtnClick("assign_tasks")}>
                <Text>Assign tasks</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#fff",
        marginTop: 10,
        padding: 12,
        alignItems: "center",
        fontFamily: "sans-serif",
        borderRadius: 6,
      },
      main_title: {
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 16,
          borderLeftColor: "rgb(1,161,231)",
          borderLeftWidth: 5,
          borderStyle: "solid",
          paddingLeft: 12
      }
})
