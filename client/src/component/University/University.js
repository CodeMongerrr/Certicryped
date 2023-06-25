import React from 'react'
import UniversityPortalRahil from './UniversityPortalRahil';
import UniversityAuth from './UniversityAuth';

const University = ({mintCertificate, uploadFile}) => {
  const universityUser = localStorage.getItem('Universityprofile');

  return (
    <div>
      {(universityUser) ? (<UniversityPortalRahil mintCertificate={mintCertificate} uploadFile={uploadFile}/>) : (<UniversityAuth/>)}
    </div>
  )
}

export default University
