import React from 'react'
import UniversityPortal from './UniversityPortal';
import UniversityAuth from './UniversityAuth';

const University = () => {
  const universityUser = localStorage.getItem('Universityprofile');

  return (
    <div>
      {(universityUser) ? (<UniversityPortal/>) : (<UniversityAuth/>)}
    </div>
  )
}

export default University
