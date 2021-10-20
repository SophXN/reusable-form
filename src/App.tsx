import React, { useState } from 'react';
import { MyForm } from './MyForm';
import { MyTable } from './MyTable';
import { generate } from 'shortid';

const App = () => {
  const [rows, setRows] = useState([{
    id: '45',
    firstName: 'bob',
    lastName: 'notbobs',
    email: 'bob@bobmail.com'
  }]);

  return (
   <div style={{ textAlign: "center" }}>
     <MyForm onSubmit={(data) => {
       setRows(currentRows => [
        {
          id: generate(),
          ...data
        },
        ...currentRows
         ])
     }}/>
     <MyTable rows={rows}/>
   </div>
  );
}

export default App;
