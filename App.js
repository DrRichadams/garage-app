import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Main } from './src/components/Main';
import { AddJob } from './src/components/AddJob';
import { Employees } from './src/components/Employees';
import { Reports } from './src/components/Reports';
import { AssignTasks } from './src/components/AssignTasks';

export default function App() {

  // const { add_job, employees, reports, assign_tasks } = some_data.mydata.views;

  const [ viewsData, setViewsData ] = React.useState({
    add_job: false,
    employees: false,
    reports: false,
    assign_tasks: false,
  })

  const resetViews = () => {
    setViewsData({
      add_job: false,
      employees: false,
      reports: false,
      assign_tasks: false,
    })
  }

  const handleBtnClick = (ev) => {
    switch(ev) {
      case "reset":
        resetViews();
      break;
      case "add_job":
        resetViews();
        setViewsData({...viewsData, add_job: true});
      break;
      case "employees":
        resetViews();
        setViewsData({...viewsData, employees: true});
      break;
      case "reports":
        resetViews();
        setViewsData({...viewsData, reports: true});
      break;
      case "assign_tasks":
        resetViews();
        setViewsData({...viewsData, assign_tasks: true});
      break;
    }
  }
  return (          
      <View style={styles.container}>
        <Text style={styles.paragraph}> Valentine's Garage </Text>
        {
          viewsData.add_job ? <AddJob handleBtnClick={handleBtnClick} />
          : viewsData.employees ? <Employees handleBtnClick={handleBtnClick} />
          : viewsData.reports ? <Reports handleBtnClick={handleBtnClick} />
          : viewsData.assign_tasks ? <AssignTasks handleBtnClick={handleBtnClick} />
          : <Main handleBtnClick={handleBtnClick} />
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
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
  
});
