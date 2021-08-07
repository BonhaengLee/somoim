import React from 'react';
import styles from './UserInput.module.scss';

const UserInput = (props: {
  inputType: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  return (
    <input
      className={styles.inputBox}
      type={props.inputType}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value || ''}
      onChange={props.onChange}
    />
  );
};

export default UserInput;
