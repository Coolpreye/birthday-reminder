import React, { useState } from 'react';
import { BirthDayPersonComponent } from './BirthDayPersonComponent';
import { ButtonComponent } from './ButtonComponent';
import './Main.css';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);


  return (
    <React.Fragment>
      <div className="py-20">
        <div className="p-8 bg-white mx-auto w-4/5 max-w-md rounded-md shadow-2xl">
          {
            people.length !== 0 ? (
              <h1 className="text-gray-600 text-lg ms:text-3xl letter-space">{people.length} birthdays today</h1>
            ) : <h1 className="text-gray-600 text-lg ms:text-3xl letter-space">0 birthdays today</h1>
          }
          <BirthDayPersonComponent people={people} />
          <ButtonComponent setPeople={setPeople} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
