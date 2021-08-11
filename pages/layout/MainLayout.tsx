import React from 'react';

const MainLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <div className="MainLayout">{children}</div>;
};

export default MainLayout;
