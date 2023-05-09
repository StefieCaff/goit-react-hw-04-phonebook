
import { useState } from "react";
import { useLocalStorage } from "./LocalStorage/local-storage.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { ContactForm } from './ContactForm/ContactForm.jsx'
import { ContactList } from './ContactList/ContactList.jsx'
import { Filter } from './Filter/Filter.jsx'
/* Styled Components*/
import {
  StyledContainer,
  StyledHeader,
  StyledSection
} from "./styled-common.js";

/*App*/


export const App = () => {
// define states add local storage hook to save contacts to local environment
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

// add a contact that is not a duplicate based on name normalized to lowercase  
  const handleAddContact = data => {
    const normalizedContact = data.name.toLowerCase();
    const normalizedList = contacts.map(({ name }) => name.toLowerCase());
  
  !normalizedList.includes(normalizedContact)  
    ? setContacts([...contacts, data])
    : Notify.info(` Eeep, ${data.name} is already a contact.`)
  };

// get filter value  
  const handleFilterInput = (e) => {
    setFilter(e.target.value);
  };

// normalize filter and look for matching name in contacts  
  const searchContact = () => {
    const normalizedFilter = filter.toLowerCase();

    const search = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    
    if (normalizedFilter !== "" && search.length === 0) {
      Notify.info("Eeep, sorry, that search is not found");
    };

    return search;
  };
    
// look through contacts by id and deletes it
  const handleRemove = (id) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    )
    Notify.success('Success! Contact deleted.')
  };

/*markup*/
  return (
    <>
      <StyledContainer className='container'>
        <StyledHeader>Phone Book</StyledHeader>
      </StyledContainer>
      <StyledSection>
      <StyledContainer>
      
          <ContactForm onAdd={handleAddContact} />
        </StyledContainer>
      </StyledSection>
      {contacts.length > 0 && (
      <>
        <StyledSection>
          <StyledContainer>
            <Filter
              value={filter}
              onFilter ={handleFilterInput}
            />
          </StyledContainer>
        </StyledSection>
        <StyledSection>
          <StyledContainer>
            <ContactList
              contacts={searchContact()}
              onRemove ={handleRemove}
            />
          </StyledContainer>
        </StyledSection>
        </>
      )}
    </>
  );
};
