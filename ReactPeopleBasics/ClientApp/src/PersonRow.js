import React from 'react';

class PersonRow extends React.Component {

    render() {
        const { people } = this.props;
    
        return (
            people.map((p, i) => {
                return (
                    <tr key={i} className={p.age > 65 ? 'table-danger' : ''}>
                        <td>{p.firstName}</td>
                        <td>{p.lastName}</td>
                        <td>{p.age}</td>
                    </tr>
                    )
            })
           
        );


    }
}

export default PersonRow;