var React = require('react');

const Button = (props)=> {
    return (
        <button value={props.label} data-type={props.type} className={(props.type === 'action') ? 'button action' : 'button input'} onClick={props.handler}>{props.label}</button>
    )
}

module.exports = Button;