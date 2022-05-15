import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Main } from './src/components/Main';
import { AddJob } from './src/components/AddJob';
import { Employees } from './src/components/Employees';
import { Reports } from './src/components/Reports';
import { AssignTasks } from './src/components/AssignTasks';
import { Jobs } from './src/components/Jobs';

export default function App() {

  const [  my_data, set_my_data ] = React.useState({
      jobs: [],
    employees: [
        {
            id: Math.random(),
            name: "Romeo",
            task: {
                job: "",
                task_name: "",
                status: "",
            },
        },
    ],
  })

  const add_job_func = (jb) => {
    set_my_data({
      ...my_data,
      jobs: [
        ...my_data.jobs,
        {...jb}
      ]
    })
    console.log("App data", my_data.jobs)
  }

  // const { add_job, employees, reports, assign_tasks } = some_data.mydata.views;

  const [ viewsData, setViewsData ] = React.useState({ add_job: false, employees: false, reports: false, assign_tasks: false, jobs: false })

  const resetViews = () => { setViewsData({ add_job: false, employees: false, reports: false, assign_tasks: false, }) }

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
      case "jobs":
        resetViews();
        setViewsData({...viewsData, jobs: true});
      break;
    }
  }
  return (          
      <View style={styles.container}>
        <Text style={styles.paragraph}> Valentine's Garage </Text>
        {
          viewsData.add_job ? <AddJob handleBtnClick={handleBtnClick} add_job_func={add_job_func} />
          : viewsData.employees ? <Employees handleBtnClick={handleBtnClick} />
          : viewsData.reports ? <Reports handleBtnClick={handleBtnClick} />
          : viewsData.assign_tasks ? <AssignTasks handleBtnClick={handleBtnClick} />
          :viewsData.jobs ? <Jobs handleBtnClick={handleBtnClick} jobs = {my_data.jobs} />
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
