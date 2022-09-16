import React from "react";
import PropTypes from "prop-types";

class FormAddContact extends React.Component {
    render() {
        const { submitHandler } = this.props;
        return <div>
            
                <form onSubmit={submitHandler}>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <br />
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <br />
                    <button onClick={() => { }}>Add contact</button>
                </form>
            
        </div>
    };
};


FormAddContact.propTypes = {
  submitHandler: PropTypes.func.isRequired
}

export default FormAddContact