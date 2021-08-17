import React from 'react';

const DefaultLayout = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <div>{children}</div>;
};

export default DefaultLayout;
