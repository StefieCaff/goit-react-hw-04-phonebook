import PropTypes from 'prop-types';

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
    StyledCallto,
    StyledName
} from './s-contact-list.js';


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
                                    <StyledCallto phone={number}>{number}</StyledCallto>
                                </StyledInfo>
                                
                            </StyledItem>
                        );
                    })}
                </StyledList>
            </StyledListWrapper>
        </StyledFlexColumn>
    );
};

const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};

Callto.propTypes = {
    phone: PropTypes.string.isRequired,
    children: PropTypes.node  
};  
    