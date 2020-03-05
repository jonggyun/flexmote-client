import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from 'components/common/Layout';

import SignInContainer from 'containers/auth/SignInContainer';

function SignPage() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <SignInContainer />
    </Layout>
  );
}

export default SignPage;
