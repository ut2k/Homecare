import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  List,
  ListItem,
  Card,
  ButtonGroup,
  Grid,
  ListHeader,
  Icon
} from "semantic-ui-react";

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
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
            onClick={this.close}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header>FirstName LastName</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="large"
        src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
      />
      <Modal.Description>
        <Header></Header>
        <List>
          <List.Header>Background Checked</List.Header>
          <List.Item>Age: 35</List.Item>
          <List.Item>CPR Certified</List.Item>
          <List.Item>Registered Nurse</List.Item>
        </List>
        <p>
          My name is Edwin, and I am an experienced senior caregiver with an
          extensive background as a CNA. Over the past 15 years, I have served
          over 10 clients in the greater Chicago area, providing help through
          medication reminders, grocery shopping and meal prep, and mobility
          assistance. I am very patient, and work well with clients who needs
          extra care, such as seniors with Alzheimer’s.
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
);

export default ModalExampleMultiple;
