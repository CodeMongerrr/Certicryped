import React from 'react';
import UniversityPortalRahil from './UniversityPortalRahil';
import UniversityAuth from './UniversityAuth';
import UniversityWait from './UniversityWait';

const University = ({ mintCertificate, uploadFile }) => {
  const universityUser = localStorage.getItem('Universityprofile');
  // Parse the universityUser JSON string into an object
  const userObject = universityUser ? JSON.parse(universityUser) : null;

  return (
    <div>
      {!userObject && <UniversityAuth />}
      {userObject && userObject.result.isApproved && (
        <UniversityPortalRahil mintCertificate={mintCertificate} uploadFile={uploadFile} />
      )}
      {userObject && !userObject.result.isApproved && <UniversityWait />}
    </div>
  );
};

export default University;
