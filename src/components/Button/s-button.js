import styled from 'styled-components';

const StyledButton = styled.button`
    fill: #C5A120;
    margin-right: 10px;
    background-color: #fffefa;
    border: transparent;
    border: 1px solid #f8e396;
    border-radius: 50%;
    padding: 1px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: background-color .9s, border .9s;
    
        &:hover {
            background-color: #e0e0d9c5;
            border: 1px solid #C5A120;
        }
`;

export { StyledButton }