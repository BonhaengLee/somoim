import React from 'react';
import styles from './UserInput.module.scss';

// const InputBox = styled.input`
//   font-size: 1.3rem;
//   padding: 0.4em 0.2em;
//   border: none;
//   border-bottom: 2px solid ${(props) => props.theme.mainColor};
//   width: 100%;
//   display: block;
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid ${(props) => props.theme.btnColor};
//   }
// `;

const UserInput = (props: {
  inputType: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  // return (
  //   <InputBox
  //     type={props.inputType}
  //     name={props.name}
  //     placeholder={props.placeholder}
  //     onChange={props.onChange}
  //   />
  // );
  return (
    <input
      className={styles.inputBox}      
      type={props.inputType}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default UserInput;
