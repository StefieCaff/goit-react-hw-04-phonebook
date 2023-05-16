import { string, func } from 'prop-types'

import { StyledFilter } from './s-filter';
import { StyledTitle } from 'components/styled-common';
import { StyledFlexColumn } from 'components/styled-common';

const Filter = (props) => {

    const {
        value,
        onFilter
    } = props;

    return (
        <StyledFlexColumn>
            <StyledTitle>Search contacts for: { value }</StyledTitle>
            <StyledFilter
                type="text"
                value={value}
                placeholder="search by name or number"
                onChange={onFilter}
            />
        </StyledFlexColumn>
    );
};

Filter.propTypes = {
    value: string.isRequired,
    onFilter: func.isRequired
}

export {Filter}