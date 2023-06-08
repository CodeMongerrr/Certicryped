import React from 'react'
import { useState } from 'react';
import UniversityPortalRahil from './UniversiyPortalRahil';
import UniversityAuth from './UniversityAuth';
import UniversitySignUpRahil from './UniversitySignUpRahil';

const University = ({connect, ifUniLogin}) => {
const [isLogin, setisLogin] = useState(false)
  return (
    <div>
        {(ifUniLogin) ? (<UniversityPortalRahil/>) : (<UniversitySignUpRahil connect={connect} />)}
    </div>
  )
}

export default University