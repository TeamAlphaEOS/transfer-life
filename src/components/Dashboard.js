import React, { Component } from "react";
import {
  Divider,
  Segment,
  Progress,
  Button,
  Header,
  Modal
} from "semantic-ui-react";
import OtherHospital from "./OtherHospital";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ marginTop: 120 }}>
        <div style={styles.container}>
          <Header size="large">Current status of EOS Hyde Park Hospital</Header>
        </div>
        <Segment>
          <Progress success percent={60} active progress>
            staff patient capacity
          </Progress>
          <div style={styles.container}>
            <Modal closeIcon trigger={<Button basic>request staff</Button>}>
              <Modal.Content image>
                <Modal.Description>
                  <OtherHospital />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
          <Divider section />
          <Progress success percent={50} active progress>
            Active
          </Progress>
          <div style={styles.container}>
            <Modal closeIcon trigger={<Button basic>request staff</Button>}>
              <Modal.Content image>
                <Modal.Description>
                  <OtherHospital />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
          <Divider section />
          <Progress error percent={10} success progress>
            emergency staff available on demand
          </Progress>
          <div style={styles.container}>
            <Modal closeIcon trigger={<Button basic>request staff</Button>}>
              <Modal.Content image>
                <Modal.Description>
                  <OtherHospital />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
          <Divider section />
          <Progress warning percent={40} active progress>
            medical devices in use
          </Progress>
          <div style={styles.container}>
            <Modal closeIcon trigger={<Button basic>request staff</Button>}>
              <Modal.Content image>
                <Modal.Description>
                  <OtherHospital />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        </Segment>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
};
export default Dashboard;
