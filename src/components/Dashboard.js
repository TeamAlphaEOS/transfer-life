import React, { Component } from 'react';
import { Divider, Segment, Progresss } from 'semantic-ui-react'

class Dashboard extends Component {
    render() {
        return (
            <Segment>
            <Progress percent={60} active>
                Active
             </Progress>
            <Divider section />
            <Progress percent={60} active>
                Active
             </Progress>
          </Segment> 
        );
    }
 }
 export default Dashboard;