import React, { Component } from 'react';
import { Divider, Segment, Progress, Button, Header } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';

const notify = () => toast("Patient sent successfully");

class OtherHospital extends Component {
    render() {
        return (
            <div>
            <div style={{ marginTop: 10 }}/>
            <div style={styles.container}>
                <Header size='large'>Hospitals around Hyde Park</Header>
            </div>

            <Segment>
            <h3>Islington</h3>
            <Progress percent={30} success progress>
                staff patient capacity
             </Progress>
            <Progress percent={50} success progress>
                available beds
             </Progress>
             <div style={styles.container}>
                <Button onClick={notify} basic>send patients</Button>
             </div>
             <Divider section />

            <h3>Kensington</h3>
            <Progress percent={70} warning progress>
                staff patient capacity
             </Progress>
            <Progress percent={80} error progress>
                available beds
             </Progress>
             <div style={styles.container}>
                <Button basic>send patients</Button>
             </div>
             <Divider section />

            <h3>Westminster</h3>
            <Progress percent={75} warning progress>
                staff patient capacity
             </Progress>
            <Progress percent={82} error progress>
                available beds
             </Progress>
             <div style={styles.container}>
                <Button basic>send patients</Button>
             </div>
             <Divider section />

            <h3>Hackney</h3>
            <Progress percent={90} error progress>
                staff patient capacity
             </Progress>
            <Progress percent={95} error progress>
                available beds
             </Progress>
             <div style={styles.container}>
                <Button basic>send patients</Button>
             </div>
             <Divider section />

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
 export default OtherHospital;