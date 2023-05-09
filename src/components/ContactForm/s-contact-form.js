import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

const StyledInput = styled.input`
    background-color: #e0e0d9c5;
    border-top: none;
    border-left: none;
    border-right: .1px solid #f8e396;
    border-bottom: .5px solid #f8e396 ;
    border-radius: 10px;
    padding: 10px 15px 10px 10px;
    color: #54543dc5;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    width: 175px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #54543dc5;
        opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #54543dc5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #54543dc5;
    }
    &:first-child {
        margin-bottom: 10px;
    }
`;

export { StyledForm, StyledInput };