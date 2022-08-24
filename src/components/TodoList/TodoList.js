import { Component } from 'react';

import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    onStar = () => {
        this.setState(({ star }) => ({
            star: !star
        }))
    }

    render() {
        const { name, date, onDelete } = this.props;
        const { increase, star } = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames += ' increase';
        }
        if (star) {
            classNames += ' like';
        }

        return (
            <div className='todo-container'>
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={date}/>
                <div className='buttons-icons d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-check-circle"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
            </div>
        )
    }

}

export default TodoList;