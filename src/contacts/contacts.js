import React, { Component } from "react";
import Cont from "./contact";
import maleLogo from "./images/male.svg";
import femaleLogo from "./images/female.svg";
import anonimus from "./images/anonimus.svg";
const info = [
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
];

class Contacts extends Component {
  state = {
    contacts: [...info],
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

  find = (e) => {
    this.setState({
      contacts: [
        ...info.filter((el) => {
          return (
            el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.phone.includes(e.target.value)
          );
        }),
      ],
    });
  };

  render() {
    return (
      <div className="wrapper">
        <input
          className="input"
          placeholder="find person"
          onChange={this.find}
        ></input>

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
  }
}
export default Contacts;
