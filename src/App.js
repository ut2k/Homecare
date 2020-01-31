import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import logo from './logo.svg';
import './App.css';
import { Grid, Icon, Modal, Image, Header, Button, Segment, List, Card, GridRow } from 'semantic-ui-react';

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
  const NestedModal = () =>{
    const [popup, setPopup] = useState(false);

    return(
      <Modal
        open={popup}
        onOpen={()=> setPopup(true)}
        onClose={()=> setPopup(false)}
        size="medium"
        trigger={<Button color="green">Book</Button>}
      >
        <Modal.Content>
          <Image
            centered
            wrapped
            size="large"
            src="https://imageog.flaticon.com/icons/png/512/1004/1004765.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          />

          <Modal.Description>
            <Grid centered padded="20">
              <Header>
                Success! A confirmation page will be sent to your email
              </Header>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon="check"
            color="green"
            content="All Done"
            onClick={()=> setPopup(false)}
          />
        </Modal.Actions>
      </Modal>
    )
  };
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
                        <Modal trigger={<Button secondary> <strong>Background Check</strong></Button>} textAlign="center">
                          <Modal.Header>{inventory.Name}</Modal.Header>
                          <Modal.Content image>
                            <Image
                              wrapped
                              size="large"
                              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                            />
                            <Modal.Description>
                              <Header></Header>
                              <List>
                                <List.Header><Header as="h4">BackGround Check: </Header>{(inventory.BackgroundChecked == "Y") ? "BackGround Checked" : "Background Not Checked"}</List.Header>
                                <List.Item><Header as="h4">Age: </Header>{inventory.Age}</List.Item>
                                <List.Item>CPR Certified</List.Item>
                                <List.Item>License: {(inventory.NursingLicense == "Y") ? "Licensed Nurse" : "Unlicensed Nurse"}</List.Item>
                                <List.Item><Header as="h4">Gender: </Header>{inventory.Gender}</List.Item>
                                <List.Item><Header as="h4">Hourly Rate: </Header>{inventory.HourlyRate}</List.Item>
                              </List>
                              <p>
                                My name is {inventory.Name}, and I am an experienced senior caregiver with an
                                extensive background as a CNA. Over the past {inventory.YearsExperience} years, I have served
                                over 10 clients in the greater Chicago area, providing help through
                                medication reminders, grocery shopping and meal prep, and mobility
                                assistance. I am very patient, and work well with clients who needs
                                extra care, such as seniors with Alzheimer’s.</p>
                            </Modal.Description>
                          </Modal.Content>
                          <Modal.Actions>
                          <NestedModal />
                          </Modal.Actions>
                        </Modal>

                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>See More</Button>
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
                src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
              />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </div>
  );
}

export default App;
