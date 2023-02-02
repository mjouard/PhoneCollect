import { Alert } from "@mui/material";
import React, { Component } from "react";
import { login } from "../../API/UserAPI";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      sucessMessage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  exec_login(){
    const user = {"email": this.state.email, "password": this.state.password}
    login(user).then(res => {
        if (res.message){
            this.setState({errorMessage: res.message})
        }
        else{
            this.setState({errorMessage: "", successMessage: "Connexion réussie"})
            localStorage.setItem("phone_collect_user", JSON.stringify(res))
            console.log(res)
            this.props.handleCloseLogin()
        }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    //console.log(this.state);
    this.exec_login()
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Adresse E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Entrez votre email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Entrez votre mot de passe"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.errorMessage ? <Alert severity="error">{this.state.errorMessage}</Alert> : null }
          {this.state.successMessage ? <Alert severity="success">{this.state.successMessage}</Alert> : null }

          <div className="formField">
            <button className="formFieldButton">Connexion</button>{" "}
            <p className="formFieldLink" onClick={this.props.openSignup}>
              Créer un compte
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
