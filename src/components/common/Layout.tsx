import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactChild;
}
function Layout({ children }: Props) {
  return (
    <section>
      <Header />
      <div>{children}</div>
    </section>
  );
}

export default Layout;
