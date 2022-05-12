﻿import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PeopleTable from './PeopleTable';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

ReactDom.render(<PeopleTable />, document.getElementById('root'));