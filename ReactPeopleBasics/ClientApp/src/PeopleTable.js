import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        firstName: '',
        lastName: '',
        age: ''
    };

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const { firstName, lastName, age, people } = this.state;
        const person = {
            firstName,
            lastName, age
        };
        const copy = [person, ...people];

        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
        const { people } = this.state;
        this.setState({ people: [] });
    }

    render() {
       return (
            <div className='container mt-8'>
                    <PersonForm
                        onFirstNameChange={this.onFirstNameChange}
                        onLastNameChange={this.onLastNameChange}
                        onAgeChange={this.onAgeChange}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        age={this.state.age}
                        onAddClick={this.onAddClick}
                        onClearClick={this.onClearClick}
                    />
                <table className='table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;