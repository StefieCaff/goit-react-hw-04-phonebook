import { func } from 'prop-types'
import { useState } from "react"
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

/* styled components*/
import { SVG } from 'components/Icons/Icons'; 
import { StyledButton } from 'components/Button/s-button.js';
import { StyledForm, StyledInput } from './s-contact-form';
import { StyledFlexColumn, StyledFlex } from 'components/styled-common';
import { StyledTitle } from 'components/styled-common';




export const ContactForm = ({ onAdd }) => {
    const [contactData, setContactData] = useState({ contactName: '', contactTel: '' });

    // click event handlers input changes and for submit
    const handleChangeInput = e => {
        const { name, value } = e.target;
       

        setContactData(prev => {
            return { ...prev, [name]: value,}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = ({ id: nanoid(6), name: contactData.contactName, number: contactData.contactTel });
        onAdd(data);
        Notify.success(`Got it, ${contactData.contactName} has been added to your phone book.`)
        formReset();
    }
    
// helper functions  
    const formReset = () => {
        setContactData({ contactName: '', contactTel: '' })
    };

    // const isNameValid = (name) => {
    // const re = /^[a-zA-Zа-яА-Я]+( ?([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    // return re.test(name);
    // };
    
    // const isTelValid = (number) => {
    // const re = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
       
    // return re.test(number);
    // };

    return (
        
        <StyledFlexColumn>
            <StyledTitle>Add a contact</StyledTitle>
            <StyledFlex>
                <StyledForm onSubmit={handleSubmit}>
                    
                    <StyledButton
                        style={{padding:5}}
                        type="submit"
                        aria-label="add a contact"
                    >
                        <SVG
                            width="25"
                            height="25"
                            name="add"
                        />
                    </StyledButton>
                    <StyledFlex> 
                        <label id="name">   
                            <StyledInput
                               type="text"
                                name="contactName"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name must contain minimum 1, maximum 30 characters. In this case characters include Upper and lowercase letters, apostrophe with following letter, and a max of two spaces between characters. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                placeholder="contact name"
                                required
                                autoFocus={true}
                                onChange={handleChangeInput}
                                value={contactData.contactName} 
                                maxLength="30"
                            />
                        </label>
                        <label id="tel">
                            <StyledInput
                                type="tel"
                                name="contactTel"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be at least 6 digits max 19 digits. In this case digits include single spaces between numbers, dashes, parentheses and number can start with +"
                                required
                                placeholder="contact telephone"
                                onChange={handleChangeInput}
                                value={contactData.contactTel}
                                maxLength="19"
                            />
                        </label>
                    </StyledFlex>
                </StyledForm>
            </StyledFlex>
        </StyledFlexColumn>
    );
};

ContactForm.propTypes = {
  onAdd: func.isRequired,
};