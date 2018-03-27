import React, { Component } from 'react';
import {Container } from 'reactstrap';
import {Row, Well} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Search, Icon,  Segment, List,  Menu, Label,Grid,Popup } from 'semantic-ui-react';
import Home from './app/components/Home';
import About from './app/components/About';
import Products from './app/components/Products';
import Login from './app/components/Login';
import Cart from './app/components/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false,clicks: 0,show: true };
    this.IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    this.DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  }
  render() {
    return (
      <div className="App-bg">
        <header className="App-head">
        
          <Row>
            <h1>
              <img alt="txt" height="50px" width="50px" src={require('./logo.jpg')} />
              <Label> Sitecom</Label>
            </h1>
            <div className="ml-auto">
            <Popup
    trigger={<Menu compact>
      <Menu.Item as='a'>
        <Icon name='cart' /> 
        <Label  color='teal'  floating>{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</Label>
      </Menu.Item>
      </Menu>}
    flowing
    hoverable
  
    position='bottom center'
  >
  
    <Grid divided columns='equal'>
      <Grid.Column>
        <Popup
          trigger={<Segment.Group horizontal><Segment  content='Item'  /><Segment  content='ID'  />
          </Segment.Group>
          }
          content='The story ends. You wake up in your bed and believe whatever you want to believe.'
          position='top center'
          size='tiny'
        />
      </Grid.Column>
      
    </Grid>
  </Popup>
            </div>
            <div className="ml-auto">
            <Search width="20px" placeholder="Search" ></Search>
            </div>
          </Row>
        </header>
        <Button onClick={this.IncrementItem}>Add to cart</Button>
        <Button onClick={this.IncrementItem}>Add to cart</Button>
        <Container >
          <br />
          <Router>
            <div>
              <Segment.Group horizontal>
                <Segment textAlign='center' color='blue'><Link to={'/'}> <Button>Home</Button></Link> </Segment>
                <Segment textAlign='center' color='blue'><Link to={'/Products'}><Button>Products</Button></Link> </Segment>
                <Segment textAlign='center' color='blue'><Link to={'/Cart'}><Button>Cart</Button></Link> </Segment>
                <Segment textAlign='center' color='blue'><Link to={'/About'}><Button>Sign Up</Button></Link> </Segment>
                <Segment textAlign='center' color='blue'><Link to={'/Login'}> <Button >Login</Button></Link> </Segment>
              </Segment.Group>
                <div>
                <Route exact path="/" component={Home} />
                <Route path="/Products" component={Products} />
                <Route path="/About" component={About} />
                <Route path="/Cart" component={Cart} />
                <Route path="/Login" component={Login} />
                <Route path="/sample" render={(props) => <Login {...props} isAuthed={true} />} />
                </div>
            </div>
          </Router>
          <br/>
       
          <div>
            <Well bsSize="large">
              <List>
                <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Semantic UI</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                  </List.Content>
                </List.Item>
              </List>
            </Well>
          </div>
          <br />
        </Container>
      </div>
    );
  }
}
export default App;