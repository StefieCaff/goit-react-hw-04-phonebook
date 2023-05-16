import { string } from 'prop-types';
import sprite from '../../images/icons.svg';
import { StyledFlex } from 'components/styled-common';
import { StyledSVG } from './s-icons-styled';

export const SVG = (props) => {
const {
    width,
    height,
    name
} = props
        
    return (
        <StyledFlex>
            <StyledSVG width={width} height={height}>
                <use href={`${sprite}#${name}`}></use>
            </StyledSVG>
        </StyledFlex>
    )
};

SVG.defaultProps = {
    width: "25",
    height: "25",
    name: "add"
}

SVG.propTypes = {
    width: string,
    height: string,
    name: string
}