import React, { ReactChildren } from 'react';

const MainLayout = ({ children }: { children: ReactChildren }): JSX.Element => {
  return <div className="MainLayout">{children}</div>;
};

export default MainLayout;
