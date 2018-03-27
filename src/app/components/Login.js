import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './password-strength-widget.css';
import './login.css';
class RulesList extends React.Component {
  render() {
    return (
      <ul>
        <li className={this.props.hasNumber}>
          At least one number (0-9)
              </li>
        <li className={this.props.hasLetter}>
          At least one letter (a-z)
              </li>
        <li className={this.props.isValidLength}>
          At least 6 characters
              </li>
        <li className={this.props.noSpecialChar}>
          At least 1 special character ( !@#$%^&*}';./,'
              </li>
      </ul>
    )
  }
}





//rules meter component
class RulesMeter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div className="meter-wrapper">
          <div className={this.props.className} style={{ width: this.props.meterWidth + '%' }}></div>
        </div>
      </div>
    )
  }
}

//checkbox component
class CheckBox extends React.Component {
  render() {
    return (
      <label htmlFor="show-password">
        &nbsp;
        &nbsp;
              <input
          id="show-password"
          name="show-password"
          type="checkbox"
          checked={this.props.showPassword}
          onChange={this.props.onClick}
        />
        &nbsp;Show Password
          </label>
    )
  }
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fname: '',
      lname: '',
      username: '',
      password: '',
      passwordConfirm: '',
      popoverOpen: false,
      type: 'password',
      show: false,
      checked: false,
      meterTitle: 'Invalid',
      meterClass: 'danger',
      meterWidth: 25,
      rules: {
        isValidLength: false,
        hasNumber: false,
        hasLetter: false,
        noSpecialChar: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  onCheckBoxClick() {
    var isChecked = !this.state.checked;
    this.setState({
      checked: isChecked,
      type: (isChecked ? "text" : "password")
    });
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  onPasswordChange(e) {
    e.target.classList.add('active');
    this.setState({
      [e.target.name]: e.target.value,
      rules: {
        hasNumber: e.target.value.match(/\d/) ? true : false,
        hasLetter: e.target.value.match(/[A-z]/) ? true : false,
        isValidLength: e.target.value.match(/^.{6,}$/) ? true : false,
        noSpecialChar: e.target.value.match(/.*?[#?!@$%^&*-]/) ? true : false,

      }
    }, function () {
      this.setMeterAttributes(this.state.rules);
    });
    this.showInputError(e.target.name);
  }

  setMeterAttributes(rules) {
    var meterWidth = this.getMeterWidth(rules);
    this.setState({
      meterWidth: meterWidth,
      meterTitle: (100 === meterWidth ? "Valid Password" : "Invalid Password"),
      meterClass: (100 > meterWidth ? "danger" : "")
    });
  }


  getMeterWidth(rules) {
    var property_count = 0, valid_property_count = 0, property;
    for (property in rules) {
      if (rules.hasOwnProperty(property)) {
        property_count = property_count + 1;
        if (rules[property]) {
          valid_property_count = valid_property_count + 1;
        }
      }
    }
    return (valid_property_count / property_count) * 100;
  }

  getSingleRuleStatus(status) {
    if (status) {
      return "valid";
    }
    return "invalid";
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  handleChange(e) {
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value,
    });

    this.showInputError(e.target.name);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should minimum of  6 characters`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render() {
    const content = this.state.show
      ? <div>
        <CheckBox showPassword={this.state.checked} onClick={this.onCheckBoxClick.bind(this)} />
        <br /><br />
        <RulesMeter title={this.state.meterTitle} className={this.state.meterClass} meterWidth={this.state.meterWidth} />
        <RulesList
          isValidLength={this.getSingleRuleStatus(this.state.rules.isValidLength)}
          hasNumber={this.getSingleRuleStatus(this.state.rules.hasNumber)}
          hasLetter={this.getSingleRuleStatus(this.state.rules.hasLetter)}
          noSpecialChar={this.getSingleRuleStatus(this.state.rules.noSpecialChar)}
        />
      </div>
      : null;
    return (
      <form novalidate className="demoForm">
        <h2>Login</h2>
        <div className="panel panel-default">
        </div>
        <div className="form-group">

          <label id="fnameLabel">First Name</label>
          <input className="form-control"
            placeholder="First Name"
            type="text"
            name="fname"
            ref="fname"
            id="fname"
            value={this.state.fname}
            onChange={this.handleChange}
            required />

          <div className="error" id="fnameError" />
        </div>
        <div className="form-group">


          <label id="lnameLabel">Last Name</label>
          <input className="form-control"
            placeholder="Last Name"
            type="text"
            name="lname"
            ref="lname"
            value={this.state.lname}
            onChange={this.handleChange}
            required />
          <div className="error" id="lnameError" />


        </div>
        <div className="form-group">


          <label id="usernameLabel">Email</label>
          <input className="form-control"
            placeholder="Email Name"
            type="email"
            name="username"
            ref="username"
            value={this.state.username}
            onChange={this.handleChange}
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            required />
          <div className="error" id="usernameError" />


        </div>

        <label id="passwordLabel">Password</label>
        <div className="password-strength-widget">
          <input className="form-control"
            placeholder="Password"
            name="password"
            ref="password"
            id="password"
            show={this.state.show}
            onFocus={this.handleClick}
            value={this.state.password}
            onChange={this.onPasswordChange.bind(this)}
            type={this.state.type}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$"
            required />

          <div className="error" id="passwordError" />
          {content}
        </div>
        <br />
        <div className="form-group">


          <label id="passwordConfirmLabel">Confirm Password</label>
          <input className="form-control"
            placeholder="Confirm Password"
            type="password"
            name="passwordConfirm"
            ref="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
            required />
          <div className="error" id="passwordConfirmError" />
          <Popover placement="right" isOpen={this.state.popoverOpen} target="password" toggle={this.toggle}>
            <PopoverHeader>PASSWORD RULES</PopoverHeader>
            <PopoverBody className={this.props.hasNumber}>* 6 characters minimum</PopoverBody>
            <PopoverBody className={this.props.hasLetter}>* Contains at least 1 alphabet</PopoverBody>
            <PopoverBody>* Contains at least 1 number</PopoverBody>
            <PopoverBody>* Can't be "password", "user", "username"</PopoverBody>
          </Popover>

        </div>

        <Button color="danger"
          onClick={this.handleSubmit}>submit</Button>

      </form>
    );
  }
}
export default Login;