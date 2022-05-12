import React from 'react';

class PersonRow extends React.Component {

    render() {
        const { firstName, lastName, age } = this.props;

        let classNames = '';
        if (age > 65) {
            classNames += ' bg-danger';
        }
        

        return (
            <tr className={classNames}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
            </tr>
        );


    }
}

export default PersonRow;