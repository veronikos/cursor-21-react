import React from 'react'

const Person = ({firstName, lastName, phone, gender}) => {

    let genderIcon = 'anon';
    const genderDecider = !gender ? genderIcon : genderIcon = gender;

    return (
        <div className="Person">
            <p className={genderDecider}>
            </p>
                <p className="Name">{firstName} {lastName}</p>
            <div className="phone">{phone}</div>
        </div>
    );
  }
  
  export default Person;