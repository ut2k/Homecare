import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import logo from './logo.svg';
import './App.css';
import { Grid, Icon, Image, Header, Button, Segment, List, Card } from 'semantic-ui-react';

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

  const GridExampleDividedNumber = () => (
    <div>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>5 Years of Experience</Card.Meta>
              <Card.Description>
                <strong>Non-Smoker</strong>
                <Button> <strong>Background Check</strong></Button>
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
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>5 Years of Experience</Card.Meta>
              <Card.Description>
                <strong>Non-Smoker</strong>
                <Button> <strong>Background Check</strong></Button>
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
        <Grid.Column>
          <Image
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div className="App">
      <GridExampleDividedNumber />
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Suitable Caretakers Near You</Header.Content>
        </Header>
        <br />
      </div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>5 Years of Experience</Card.Meta>
            <Card.Description>
              <strong>Non-Smoker</strong>
              <Button> <strong>Background Check</strong></Button>
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
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
        </Button>
              <Button basic color='red'>
                Decline
        </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
            />
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
      </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
        </Button>
              <Button basic color='red'>
                Decline
        </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

    </div>
  </div>
  )
  console.log(inventory);
  return (
    <Grid container spacing={1} justify="center" alignItems="center">
          {val.map(inventory =>
            <h1>{inventory.Name}</h1>
          )}
        </Grid>
  );
}

export default App;
