import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {Icon} from 'semantic-ui-react';
import './Form.css';

class About extends Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          email: '',
          password: '',
          cpassword: '',
          FirstName: '',
          LastName: '',
          formErrors: {email: '', password: '',FirstName:'',LastName:'',cpassword: ''},
          emailValid: false,
          passwordValid: false,
          cpasswordValid: false,
          FirstNameValid: false,
          LastNameValid: false,
          LastNameValid2: false,
          formValid: false,
          popoverOpen: false,
          show:false
        }
      }
      toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({show:true,[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
       
        let emailValid = this.state.emailValid;
        let FirstNameValid = this.state.FirstNameValid;
        let LastNameValid = this.state.LastNameValid;
        let LastNameValid2 = this.state.LastNameValid2;
        let passwordValid = this.state.passwordValid;
        let cpasswordValid = this.state.cpasswordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
            case 'FirstName':
            FirstNameValid = !value.length === 0 
            fieldValidationErrors.FirstName = FirstNameValid ? '' : ' is a required field';
            break;
            case 'LastName':
            LastNameValid = !value.match(/^(?=.*?[a-z]).{1,}$/i);
            
            fieldValidationErrors.LastName = LastNameValid ? '' : ' is a required field';

            break;
            case 'LastName':
          
            LastNameValid2 = !value.match(/^(?=.*?[a-z]).{1,}$/i);
      
            fieldValidationErrors.LastName = LastNameValid2 ? '' : ' is a required field';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            passwordValid = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i);
            fieldValidationErrors.password = passwordValid ? '': ' is invalid';
            break;
            case 'cpassword':
            cpasswordValid = value.length >= 6;
            cpasswordValid = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i);
            fieldValidationErrors.cpassword = cpasswordValid ? '': ' is invalid';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        cpasswordValid: cpasswordValid,
                        FirstNameValid: FirstNameValid,
                        LastNameValid: LastNameValid,
                        LastNameValid2 : LastNameValid2
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid 
          && this.state.FirstNameValid && this.state.LastNameValid && this.state.cpasswordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      confirmClass(refName) {
        const password = refName.indexOf('password') !== -1;
        const isPasswordConfirm = refName === 'cpassword';
        if (isPasswordConfirm) {
          if (this.refs.password.value !== this.refs.cpassword.value) {
            this.refs.cpassword.setCustomValidity('Passwords do not match');
          } else {
            this.refs.cpassword.setCustomValidity('');
          }
        }
      }
      
      render () {
        return (
          <form className="demoForm">
            <h2>Sign up</h2>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} > <Icon name='right arrow' handleUserInput={this.handleUserInput}  /></FormErrors>
              {this.state.show}
              <Icon name='right arrow' />
              
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.FirstName)}`}>
              <label htmlFor="text">First Name</label>
              <input type="FirstName" required className="form-control" name="FirstName"
                placeholder="First Name"
                value={this.state.FirstName}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.LastName)}`}>
              <label htmlFor="text">Last Name</label>
              <input type="LastName" required className="form-control" name="LastName"
                placeholder="Last Name"
                value={this.state.LastName}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <label htmlFor="email">Email address</label>
              <input type="email" required className="form-control" name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <label htmlFor="password">Password</label>
                    <Popover placement="right" isOpen={this.state.popoverOpen} target="password" toggle={this.toggle}>
                        <PopoverHeader>PASSWORD RULES</PopoverHeader>
                        <PopoverBody>8 characters minimum</PopoverBody>
                        <PopoverBody>Contains at least 1 alphabet</PopoverBody>
                        <PopoverBody>Contains at least 1 number</PopoverBody>
                        <PopoverBody>Can't be "password", "user", "username"</PopoverBody>
                    </Popover>
                <input type="password" className="form-control" name="password"
                  placeholder="Password"
                  id="password"
                  ref="password"
                  onClick={this.toggle}
                  value={this.state.password}
                  onChange={this.handleUserInput}  /> 
             
            </div>
            <div className={`form-group ${this.confirmClass(this.state.formErrors.password)}`}>
              <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="cpassword"
                  placeholder="Confirm Password"
                  id="cpassword"
                  ref="cpassword"
                  value={this.state.cpassword}
                  onChange={this.handleUserInput}  /> 
             
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
          </form>
        )
      }
    }
export default About;