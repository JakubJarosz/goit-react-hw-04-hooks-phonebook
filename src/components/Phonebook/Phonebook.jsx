import React, { useState, useEffect } from "react"
import { nanoid } from 'nanoid';
import FormAddContact from "../FormAddContact/FormAddContact";
import SearchFilter from "../SearchFilter/SearchFilter";

const Phonebook = () => {
    const [contacts, setContacts] = useState(undefined || []);
    const [filter, setFilter] = useState('');



    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const inputName = form.elements.name.value;
        const inputNumber = form.elements.number.value;
        if (contacts.filter((el) => el.name === inputName).length > 0) {
            return alert(`${inputName} is already in contacts`)
        } else {
            setContacts(prevState => [...prevState, { id: nanoid(), name: inputName, number: inputNumber, }])
        }
    }

    const removeContactsFromState = (id) => {
        const newContactsList = contacts.filter((el) => el.id !== id);
        setContacts(newContactsList);
    }


    const renderContacts = (filterValue, contactsArray) => {
        if (!filterValue) return contactsArray.map((contact) => {
            return <li key={contact.id}>
                <span>{contact.name} :{contact.number}</span>
                <button onClick={() => {
                    removeContactsFromState(contact.id)
                }} >Delete</button>
            </li>
        })
        return contactsArray.filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => {
            return <li key={contact.id}>
                <span>{contact.name} :{contact.number}</span>
                <button onClick={() => {
                    removeContactsFromState(contact.id)
                }}>Delete</button>
            </li>
        })
    }

    const filterContacts = (event) => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        window.localStorage.setItem("userInfo", JSON.stringify(contacts))
        const stateFromLocalStorage = JSON.parse(window.localStorage.getItem('userInfo'));
        if (!stateFromLocalStorage) {
            setContacts(stateFromLocalStorage.contacts)
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("userInfo", JSON.stringify(contacts));
        console.log(localStorage)
    }, [contacts])

    return (
        <div>
            <h1>PhoneBook</h1>
            <FormAddContact submitHandler={handleFormSubmit} />

            <h2>Contacts</h2>
            <SearchFilter onFilterChange={filterContacts} />
            <ul>
                {renderContacts(filter, contacts)}
            </ul>
        </div>
    );
};

export default Phonebook







