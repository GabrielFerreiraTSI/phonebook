import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.tel}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
