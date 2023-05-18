import { node, string, array, func, }from 'prop-types';

import { SVG } from '../Icons/Icons.jsx';
import { StyledButton } from 'components/Button/s-button.js';
import {
    StyledTitle,
    StyledFlexColumn,
    StyledFlex
} from 'components/styled-common.js';
import {
    StyledListWrapper,
    StyledList,
    StyledItem,
    StyledInfo,
    StyledName,
} from './s-contact-list.js';
import "./contact-list.css"

export const ContactList = (props) => {

    const {
        contacts,
        onRemove,
       
    } = props;

    return (
        <StyledFlexColumn>
            <StyledFlex>
                <StyledTitle>Contact List</StyledTitle>
            </StyledFlex>
            <div>
              <span>Delete</span>
                <span> Contact Info</span>
            </div>
            <StyledListWrapper>
                <StyledList>
                    {contacts.map(({ id, name, number }) => {
                        return (
                            <StyledItem key={id}>
                                <StyledButton
                                    type="button"
                                    onClick={() => {
                                        onRemove(id);
                                    }}
                                >
                                    <SVG
                                        width="20"
                                        height="20"
                                        name="remove"
                                    />
                                </StyledButton>
                                <StyledInfo>
                                    <StyledName>{name}</StyledName>
                                    <CallTo phone={number}>{number}</CallTo>
                                </StyledInfo>
                                
                            </StyledItem>
                        );
                    })}
                </StyledList>
            </StyledListWrapper>
        </StyledFlexColumn>
    );
};

const CallTo = ({ phone, children }) => {
  return <a className="call-to" href={`tel:${phone}`}>{children}</a>;
};

ContactList.propTypes = {
    contacts: array.isRequired,
    onRemove: func
};

CallTo.propTypes = {
    phone: string.isRequired,
    children: node  
};  
    