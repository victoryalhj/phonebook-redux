import React from 'react'
import SearchBox from "./SearchBox"
import ContactItem from "./ContactItem"
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state)=>state.contactList);
 
  return (
    <div>
      <div className="search">Search
      <SearchBox />
      </div>
      {contactList.map((item) => (
        <ContactItem item={item}/>
      ))}
    </div>
  );
};

export default ContactList