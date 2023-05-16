import {string, node} from 'prop-types'

export const Message = (props) => {
    const {
        color,
        children
    } = props
    return (
        <div
            style={{backgroundColor: color,}}
        >
        {children}
        </div>
        
    );

};

export { Message };

Message.defaultProps = {
    color: '#C5A120',
}
    
Message.propTypes = {
    color: string,
    children: node
}