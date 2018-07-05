var React = require('react');
var Screen = require('./Screen');
var Button = require('./Button');


class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            question: '',
            answer: ''
        }

        this.aHandler = this.aHandler.bind(this)
    }

    updateQuestion(val) {
        this.setState(() => {
            return {
                question: this.state.question += val
            }
        }) 
    }

    resetQuestion() {
        this.setState(() => {
            return {
                question: '',
                answer: ''
            }
        })
    }

    updateAnswer() {
        var result = eval(this.state.question)
        this.setState(() => {
            return {
                answer: result
            }
        })
    }

    aHandler(e) {
        var val = e.target.value,
            type = e.target.getAttribute('data-type');

        if (type !== 'actions') {
            this.updateQuestion(val);
        }
        else {
            if(val == 'cls') {
                this.resetQuestion()
            }
            else if (val === "=") {
                this.updateAnswer()
            }
        }  
    }

    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            e.stopPropagation();
            console.log(e.keyCode)
            if ((e.keyCode > 95) && (e.keyCode < 112)) {
                this.updateQuestion(e.key)
            }
            else if (e.keyCode === 13) {
                this.updateAnswer()
            }
            else if (e.keyCode === 46) {
                this.resetQuestion()
            }
        })
    }


    render() {
        var inputs = [1,2,3,4,5,6,7,8,9,0],
            operate = ['+', '-', '*', '/'],
            actions = ['cls', '='];

        return (
            <div className="frame">
                <Screen question={this.state.question} answer={this.state.answer} />
                <div className="buttonWrap">
                    <div className="btnInputs">
                        {inputs.map((i)=> {
                            return (
                                <Button key={i} handler={this.aHandler} type="input" label={i} />
                            )
                        })}
                        {actions.map((i)=> {
                            return (
                                <Button key={i} type="actions" handler={this.aHandler} label={i} />
                            )
                        })}
                    </div>
                    <div className="btnOperate">
                        {operate.map((i)=> {
                            return (
                                <Button key={i} type="operate" handler={this.aHandler} label={i} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = App;