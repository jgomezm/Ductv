import React from 'react';
import {Text, View, Button, Alert, StyleSheet, AsyncStorage} from 'react-native';

  const getuserId = async () => {
    let userId = '';
    try {
      userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
      // Error retrieving data
      Alert.alert("here");
      console.log(error.message);
    }
    return userId;
  }


    const getProfId = async () => {
      let profileId = '';
      try {
        profileId = await AsyncStorage.getItem('profileId') || 'none';
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
      return profileId;
    }


export default class TaskClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            header: 'TestClassTask',
            description: '',
            priority: null,
            userId: getuserId(),
            duration: null,
            due: null,
            owner: 'http://durian-django-env.nihngkspzc.us-east-1.elasticbeanstalk.com/profile/2/'

        }
    };

    json_funtion = () => {
        fetch('http://durian-django-env.nihngkspzc.us-east-1.elasticbeanstalk.com/task/')
        .then(response => response.json())
        .then(data => {
            var json_array = data[0];           //get the first obj from django
            var id = json_array.id.toString();  //get the id
            var url = json_array.url;           //get url
            var header = json_array.header;     //get header
            var priority = json_array.priority.toString();  //get priority
            var duration = json_array.duration.toString();  //get duration
            var due = json_array.due.toString();            //get duedate
            var owner = json_array.owner;                   //get owner
        })
        .catch(error => console.log(error));

    }

    json_uploadfun = () => {

    }

    new_funtion = () => {
      Alert.alert(userId);
    }

    render() {

        return(
            /*<View style={styles.container}>
                <Text>Test for React Native + Django</Text>
                <Button title="Go" onPress={this.json_funtion} />
            </View>*/
            <View style={styles.container}>
              <Button title="Go" onPress={this.new_funtion} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});