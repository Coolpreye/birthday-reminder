import React from 'react';

export const BirthDayPersonComponent = ({people}) => {
    
    return (
        <React.Fragment>
            {
                people.map(person => {
                    return(
                        <div key={person.id} className="mt-8 flex">
                            <img src={person.image} alt="person" className="rounded-full w-20 h-20 object-cover" />
                            <div className="ml-4 mt-4">
                                <h3 className="letter-space font-black text-gray-800">{person.name}</h3>
                                <h5 className="letter-space mt-1 text-gray-400 text-sm font-bold">{person.age} years</h5>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
