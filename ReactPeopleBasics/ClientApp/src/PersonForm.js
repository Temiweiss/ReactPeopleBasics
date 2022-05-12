import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age, onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, onClearClick } = this.props;
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <input value={firstName} onChange={onFirstNameChange} className='form-control' placeholder='First Name' />
                        </div>
                        <div className='col-md-2'>
                            <input value={lastName} onChange={onLastNameChange} className='form-control' placeholder='Last Name' />
                        </div>
                        <div className='col-md-2'>
                            <input value={age} onChange={onAgeChange} className='form-control' placeholder='Age' />
                        </div>
                        <div className='col-md-2'>
                            <button onClick={onAddClick} className='btn btn-primary btn-block'>Add Person</button>
                        </div>
                        <div className='col-md-2'>
                            <button onClick={onClearClick} className='btn btn-success btn-block'>Clear Table</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonForm;