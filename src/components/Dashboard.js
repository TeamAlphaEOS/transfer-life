import React, { Component } from 'react';
import { Divider, Segment, Progress, Button, Header, Modal } from 'semantic-ui-react'
import OtherHospital from './OtherHospital';

class Dashboard extends Component {
    render() {
        return (
            <div style={{ marginTop: 70 }}>
            <div style={styles.container}>
                <Header size='large'>Current status of EOS Hyde Park Hospital</Header>
            </div>
            <Segment>
            <Progress percent={60} active progress>
                staff patient capacity
             </Progress>
             <div style={styles.container}>
                <Button basic>request staff</Button>
             </div>
            <Divider section />
            <Progress percent={60} active>
                Active
             </Progress>
             <div style={styles.container}>            
                <Modal closeIcon trigger={<Button basic>send patients</Button>}>
                    <Modal.Content image>
                    <Modal.Description>
                        <OtherHospital />
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
             </div>
             <Divider section />
            <Progress percent={10} success progress>
                emergency staff available on demand
             </Progress>
             <div style={styles.container}>
                <Button basic>request staff</Button>
             </div>
             <Divider section />
            <Progress percent={60} active progress>
                medical devices in use
             </Progress>
             <div style={styles.container}>
                <Button basic>request devices</Button>
             </div>
          </Segment> 
          </div>
        );
    }
 }

 const styles = {
     container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
     }
 }
 export default Dashboard;