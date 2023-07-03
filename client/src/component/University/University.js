import React from 'react'
import UniversityPortalRahil from './UniversityPortalRahil';
import UniversityAuth from './UniversityAuth';

const University = ({mintCertificate, uploadFile, get_ids_of_owner}) => {
  const universityUser = localStorage.getItem('Universityprofile');

  return (
    <div>
      {(universityUser) ? (<UniversityPortalRahil get_ids_of_owner={get_ids_of_owner} mintCertificate={mintCertificate} uploadFile={uploadFile}/>) : (<UniversityAuth/>)}
    </div>
  )
}

export default University
