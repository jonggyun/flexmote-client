import React from 'react';

interface Props {
  children: React.ReactChild;
}
function Layout({ children }: Props) {
  return <div>{children}</div>;
}

export default Layout;
