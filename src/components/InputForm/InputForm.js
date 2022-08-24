import { Component } from 'react';

import './InputForm.css';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.date);
        this.setState({
            name: '',
            date: ''
        })
    }

    render() {
        const { name, date } = this.state;
        return(
            <div className="app-add-form">
                <h3>Add item and deadline to your list</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Please type here"
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="date"
                        className="form-control new-post-label"
                        placeholder="How urgent is that?"
                        name="date" 
                        value={date}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default InputForm;