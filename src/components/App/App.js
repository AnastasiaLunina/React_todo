import { Component } from 'react';

import Heading from '../Heading/Heading';
import FullList from '../FullList/FullList';
import InputForm from '../InputForm/InputForm';

import './App.css';
import swal from 'sweetalert';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data : [
                { name: 'Learn React', date: '2023-05-04', increase: false, id: 1 },
                { name: 'Learn JS', date: '2022-10-04', increase: true, id: 2 },
                { name: 'To not go crazy', date: '2022-08-04', increase: false, id: 3 },
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, date) => {
        const newItem = {
            name, 
            date,
            increase: false,
            id: this.maxId++
        }

        if (name === '' || date === '') {
            swal("Oh no!", "You did not enter anything!", "error");
        } else {
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        }
    }

    render() {
    
        return (
            <div className="app">
                <Heading />
                <FullList data={ this.state.data }
                onDelete={this.deleteItem}/>
                <InputForm onAdd={this.addItem}/>
            </div>
        )
    }

}

export default App;