var React = require('react');

const ScreenRow = (props) => {
    return (
        <div className="screenRow">
            <input type="text" readOnly value={props.value} />
        </div>
    )
}

const Screen = (props) => {
    return (
        <div className="screenWrap">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.answer} />
        </div>
    )
}

module.exports = Screen;