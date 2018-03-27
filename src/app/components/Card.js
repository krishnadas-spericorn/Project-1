import React, { Component } from 'react';
import {Row, Col, Thumbnail, Panel,PanelGroup,Grid } from 'react-bootstrap';
import { Button, Icon, Step,Image,Segment,Divider,Label} from 'semantic-ui-react';
import B from "./B";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      clicks: 0
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

    render() {
    return (
        <div>
            <br/>
            <Button onClick={this.IncrementItem}>Add to cart</Button>
            <B text= { this.state.clicks }/>
            
        <Segment>
          <Divider horizontal >Mobile Phones</Divider>
        </Segment>
        <Grid className="App-i">
          <Row >
            <Col xs={6} md={4} >
              <Thumbnail src="/1.jpg" alt="242x200">
                <Label as='a' color='blue' ribbon>New</Label>
                <h3>Apple</h3>
                <p>Apple iPhone 6S 16GB - GSM Unlocked - Rose Gold New Release </p>
                <PanelGroup accordion id="accordion-uncontrolled-example" >
                  <Button primary >Add to cart</Button>
                  <Panel eventKey="1">
                    <Panel.Heading>
                      <Panel.Title toggle><Button bsStyle="primary" >More Details</Button></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Body: Aluminum frame, Gorilla Glass 5 back and front; IP65/68; 153 x 72 x 11.1mm, 198g.
                        Screen: 5.7-inch, 18:9, FHD+ IPS LCD, HDR, 424 PPI</Panel.Body>
                    <br />
                    <Label as='a'>$10.00</Label>
                  </Panel>
                </PanelGroup>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>

              <Thumbnail src="/2.jpg" alt="242x200">
                <Label as='a' color='blue' ribbon>New</Label>
                <h3>Honor</h3>
                <p>Honor 7X - 18:9 screen ratio, 5.93" full-view display. Dual-lens camera. </p>
                <p>

                  <PanelGroup accordion id="accordion-uncontrolled-example" >
                    <Button primary >Add to cart</Button>
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle><Button bsStyle="primary" >More Details</Button></Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Front Camera: 5MP, 1/5" Exmor RS for mobile, 23mm wide angle lens, 90-degree FOV, f/2.2; 1080p video
                            Chipset: Qualcomm Snapdragon 845, Kryo 385 (8x custom Cortex-A75 @ up to 2.8GHz), Adreno 630GPU</Panel.Body>
                      <br />
                      <Label as='a'>$14.00</Label>
                    </Panel>
                  </PanelGroup>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/3.jpg" alt="242x200" >
                <Label as='a' color='blue' ribbon>New</Label>
                <h3>Motorola</h3>
                <p>Moto G PLUS (5th Generation) - 64 GB - Unlocked - Lunar Gray - Prime Exclusive</p>
                <p>
                  <Button primary >Add to cart</Button>
                  <Panel id="collapsible-panel-example-2" >
                    <Panel.Heading>
                      <Panel.Title toggle>
                        <Button bsStyle="primary" >More Details</Button>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        Rear Camera: 19MP, 1/2.3" Sony IMX400 camera, f/2.0 lens, predictive hybrid laser/phase detection/contrast AF, burst AF, IR sensor for white balance, LED flash, dedicated hardware shutter key, BIONZ for mobile image-processing engine; ISO 12,800
                          </Panel.Body>
                    </Panel.Collapse>
                    <br />
                    <Label as='a'>$15.00</Label>
                  </Panel>

                </p>

              </Thumbnail>

            </Col>
          </Row>
        </Grid>
        <Segment>
          <Image src={"/2.jpg"} size='small' floated='left' />
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
            choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
          <Image src={"/3.jpg"} size='small' floated='right' />
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint
            solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim
            vivendum maiestatis in.
    </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum
            aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
            everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum
            aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
            everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
        </Segment>





        <Step.Group>
          <Step>
            <Icon name='truck' />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step disabled>
            <Icon name='info' />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>


      </div>

    );
  }
}

export default Card;