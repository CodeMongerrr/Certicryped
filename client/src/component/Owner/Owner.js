import React from 'react'
import OwnerPortal from './OwnerPortal';
import OwnerAuth from './OwnerAuth';

const Owner = ({approve, revoke}) => {
  const OwnerUser = localStorage.getItem('OwnerProfile');
  console.log("displaying Owner User");
  console.log(OwnerUser);
  return (
    <div>
      {(OwnerUser) ? (<OwnerPortal approve={approve} revoke={revoke}/>) : (<OwnerAuth/>)}
    </div>
  )
}

export default Owner;
