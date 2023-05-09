import styled from "styled-components";

const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fffefa;
    padding: 20px 10px;
    border-radius: 1px;
    border: .5px solid #C5A120;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, 
        rgba(0, 0, 0, 0.07) 0px 2px 4px, 
        rgba(0, 0, 0, 0.07) 0px 4px 8px, 
        rgba(0, 0, 0, 0.07) 0px 8px 16px, 
        rgba(0, 0, 0, 0.07) 0px 16px 32px, 
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const StyledHeader = styled.h1`
    margin-top: 20px;
    font-size: 24px;
    padding-left: 10px;
`;

const StyledTitle = styled.h3`
    font-size: 16px;
    margin: 0px 0px 20px 0px;
    border-bottom: 1px solid #C5A120;
    padding-left: 10px;
`;

const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: flex-start;
`;

const StyledContainer = styled.div`    
    max-width: 280px;
    width: 280px;
    margin: 0 auto;
    padding: 0 10px;

    @media screen and (min-width:768px) {
       max-width: 768px;
    }

    @media screen and (min-width: 1200px) {
       max-width: 1200px;
    }
`;

const StyledSection = styled.section`
    padding-top: .5px;
    padding-bottom: .5px;
}


`;

export {
    StyledFlexColumn,
    StyledHeader,
    StyledTitle,
    StyledFlex,
    StyledContainer,
    StyledSection
} 