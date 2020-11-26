import React from 'react'

export const ButtonComponent = ({setPeople}) => {
    return (
        <React.Fragment>
            <div 
                className="cursor-pointer letter-space font-bold text-lg mt-6 py-2 text-white rounded-md bg-pink-400 btn text-center w-1/1"
                onClick={() => setPeople([])}
            >
                Clear All
            </div>
        </React.Fragment>
    )
}
