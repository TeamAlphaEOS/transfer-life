import React, { Component } from 'react';
import { Divider, Segment, Progress, Button, Header } from 'semantic-ui-react'

class Dashboard extends Component {
    render() {
        return (
            <div>
            <div style={[styles.container, { bottom: 10 }]}>
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
                <Button basic>send patients</Button>
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