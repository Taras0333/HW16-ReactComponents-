import React, { Component } from "react";
import Cont from "./contact";
import maleLogo from "./images/male.svg";
import femaleLogo from "./images/female.svg";
import anonimus from "./images/anonimus.svg";

class Contacts extends Component {
  state = {
    contacts: [
      {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
      },
      {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
      },
      {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
      },
      {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
      },
      {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
      },
      {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
      },
    ],
    person: "Default",
    st: "false",
    search: "",
    gend: "",
    search2: "",
  };

  setImg = (gender) => {
    if (gender === "male") {
      return maleLogo;
    } else if (gender === "female") {
      return femaleLogo;
    } else {
      return anonimus;
    }
  };
  changeTitle = (event) => {
    const { value } = event.target;
    this.setState({
      person: value,
    });
  };

  find = () => {
    let count = 0;
    let word = this.state.person.toLowerCase();
    this.state.contacts.filter((e) => {
      if (e.lastName.toLowerCase().includes(word)) {
        this.setState({
          search: "" + e.firstName + " " + e.lastName + " " + e.phone,
          gend: e.gender,
          st: "true",
        });
      } else if (e.firstName.toLowerCase().includes(word)) {
        this.setState({
          search: "" + e.firstName + " " + e.lastName + " " + e.phone,
          gend: e.gender,
          st: "true",
        });
      } else if (e.phone.toLowerCase().includes(word)) {
        if (count === 0) {
          count += 1;
          console.log("h");
          this.setState({
            search: "" + e.firstName + " " + e.lastName + " " + e.phone,
            gend: e.gender,
            st: "true",
          });
        } else if (count === 1) {
          this.setState({
            search2: "" + e.firstName + " " + e.lastName + " " + e.phone,
            gend: e.gender,
            st: "true",
          });
        }
      }
    });
  };

  render() {
    if (this.state.st === "false") {
      return (
        <div className="wrapper">
          <input
            className="input"
            placeholder="find person"
            velue={this.state.title}
            onChange={this.changeTitle}
          ></input>
          <button className="btn" onClick={this.find}>
            submit
          </button>
          {this.state.contacts.map((contact) => (
            <Cont
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={this.setImg(contact.gender)}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="response">
          <p className="finded">
            {this.state.search}
            <img
              className="gender-icon"
              src={this.setImg(this.state.gend)}
              alt="img"
            />
          </p>
          <p className="finded2">
            {this.state.search2}
            <img
              className="gender-icon"
              src={this.setImg(this.state.gend)}
              alt="img"
            />
          </p>
        </div>
      );
    }
  }
}
export default Contacts;
