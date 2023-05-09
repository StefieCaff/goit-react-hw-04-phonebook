import PropTypes from 'prop-types'

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
            <StyledTitle>Search contacts { value }</StyledTitle>
            <StyledFilter
                type="text"
                value={value}
                placeholder="search by name"
                onChange={onFilter}
            />
        </StyledFlexColumn>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
}

export {Filter}