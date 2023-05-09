import {string} from 'prop-types'


import { SVG } from 'components/Icons/Icons';


const Button = (props) => {
    const {
        type,
        name
}= props
  

    return (
        
        <Button
        type={type}>
            <SVG
                width="15"
                height="15"
                name={name}
            />
        </Button>

    );
};

Button.defaultProps = {
    name: "add"
}

Button.propTypes = {
    type: string.isRequired,
    name: string
};


export { Button }