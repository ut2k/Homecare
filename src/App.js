import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import logo from './logo.svg';
import './App.css';
import { Grid, Icon, Image, Header, Button, Segment, List, Card, GridRow } from 'semantic-ui-react';

const firebaseConfig = {
  apiKey: "AIzaSyCC1XbBmXqTY1IbpfQv6UxwcYrChXgKNng",
  authDomain: "homecare-94de1.firebaseapp.com",
  databaseURL: "https://homecare-94de1.firebaseio.com",
  projectId: "homecare-94de1",
  storageBucket: "homecare-94de1.appspot.com",
  messagingSenderId: "102753030995",
  appId: "1:102753030995:web:436128daeb001fbee2c7a6",
  measurementId: "G-7VTXMWJRER"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

function App() {
  const [inventory, setInventory] = useState({});
  const val = Object.values(inventory);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setInventory(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  return (
    <div>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Suitable Caretakers Near You</Header.Content>
      </Header>
      <br />
      <Grid textAlign="center" container spacing={1} justify="center" alignItems="center">

        {val.map(inventory =>
          <Grid.Row>
            <Grid.Column width={9}>
              <Card fluid="true">
                <Card.Content>

                  <Card.Header>{inventory.Name}</Card.Header>
                  <Card.Meta>{inventory.YearsExperience} Years of Experience</Card.Meta>

                  <Card.Description>
                    <Grid>
                      <Grid.Column width={3}>
                        <strong>{(inventory.Smoker == "N") ? "Non-Smoker" : "Smoker"}</strong>
                      </Grid.Column>
                      <Grid.Row width={9} textAlign="left">
                        <Button.Group>
                          {inventory.Days.map(thing => <Button>{thing}</Button>)}
                        </Button.Group>
                      </Grid.Row>
                      <Grid.Row>
                      <Button style={{textAlign: "center"}}> <strong>Background Check</strong></Button>
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      See More
                </Button>
                    <Button basic color='red'>
                      Decline
                </Button>
                  </div>
                </Card.Content>

              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image
                floated='right'
                size='medium'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </div>
  );
}

export default App;
