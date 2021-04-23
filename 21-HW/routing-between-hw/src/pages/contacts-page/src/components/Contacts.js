import React, {Component} from "react";
import Person from "./Person";
import Search from "./Search";

class Contacts extends Component {
  
  state = {
    contacts: [{
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666"
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male"
    }],
    filteredContacts: [],
    search: ['']
  }

  addSearchName = data => {
    this.setState({search: data})
   
    const filtered = this.state.contacts
    .filter((contact) =>
      contact.lastName.toLowerCase().startsWith(data.toLowerCase()) ||
      contact.firstName.toLowerCase().startsWith(data.toLowerCase()) ||
      contact.phone.includes(data))  

      this.setState({filteredContacts: filtered})
  }

  render() {

    let filteredContacts = this.state.search[0] !== "" ? this.state.filteredContacts : this.state.contacts
    console.log(this.state.search)
    return (
      <div className="Contacts">
        <Search addSearchName={this.addSearchName} />
        { filteredContacts
          .map((person) => (
            <Person {...person} key={person.index} />
          ))}
      </div>
    );
  }
}

export default Contacts;