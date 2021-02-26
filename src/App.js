import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {

  const customers = [{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'Connor',
    'birthday': '950322',
    'gender': 'Male',
    'job': 'Student'    
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'David',
    'birthday': '950123',
    'gender': 'Male',
    'job': 'Software Developer'    
  },
  { 'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'Anna',
    'birthday': '970230',
    'gender': 'Female',
    'job': 'Nurse'
  }
] 

  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
