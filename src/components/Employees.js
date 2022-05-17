import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { DataContext } from "../contexts/DataContext"

export const Employees = ({handleBtnClick}) => {
    return(
        <View>
            <Text>Employees</Text>
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
      main_title: {
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 16,
          borderLeftColor: "rgb(1,161,231)",
          borderLeftWidth: 5,
          borderStyle: "solid",
          paddingLeft: 12
      },
      btn_text: {
        color: "#fff",
    },
})