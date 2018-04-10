import React, { Component } from 'react';
import TodoComponent from './TodoComponent'
import { Well, Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'



class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <TodoComponent/>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
