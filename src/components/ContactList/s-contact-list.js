import styled from 'styled-components';

const StyledListWrapper = styled.div`
   display: Flex;
   align-items: center;
`;

const StyledList = styled.div`
   list-style: none;
   display: flex;
   flex-direction: column;
   // padding: 0 10px;
`;

const StyledItem = styled.div`
   background-color: #e0e0d9c5;
   display: Flex;
   align-items: center;
   width: 230px;
   margin: 5px auto;
   padding: 10px 25px 10px 5px;
   border-bottom: .1px solid #f8e396;
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const StyledInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 14px;
   border-left: 1px solid #C5A120;
   margin-left: 10px;
   padding-left: 10px;
   max-width: 180px;
   min-height: 43px;
`;

const StyledName = styled.p` {
    margin-bottom: 5px;
}`

export {
   StyledListWrapper,
   StyledList,
   StyledItem,
   StyledInfo,
   StyledName
};