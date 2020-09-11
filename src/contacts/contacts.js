import React, { Component } from "react";
import Cont from "./contact";

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
  };
  changeTitle = (event) => {
    const { value } = event.target;
    this.setState({
      person: value,
    });
  };
  find = () => {
    let word = this.state.person;
    console.log(word);
    this.state.contacts.filter((e) => {
      if (e.lastName.includes(word)) {
        this.setState({
          search: "" + e.firstName + " " + e.lastName + " " + e.phone,
          st: "true",
        });
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
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="response">
          <p className="finded">{this.state.search}</p>
        </div>
      );
    }
  }
}
export default Contacts;
