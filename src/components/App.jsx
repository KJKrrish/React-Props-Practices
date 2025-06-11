import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.pinimg.com/564x/c3/b5/90/c3b59033d89f277157c348b87d406b6f.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
