import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { DataContext } from "../contexts/DataContext"

export const Jobs = ({handleBtnClick, jobs}) => {
    return(
        <View>
            <Text>Jobs</Text>
            <View>
                {
                    jobs && jobs.map((item, index) => (
                        <TouchableOpacity key={index} style = {styles.job_box}>
                            <Text style={{color: "#fff"}}>{item.make}</Text>
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
      job_box: {
          backgroundColor: "#01a2e79c",
          marginBottom: 5,
          padding: 8,
      }
})