import React from 'react';
import styles from './CustomRadioButton.module.scss';

interface ILabels {
  name: string;
}

const CustomRadioButton = (props: {
  eName: string;
  labels: ILabels[];
}): JSX.Element => {
  return (
    <>
      <div className={styles.colorSelectorContainer}>
        {props.labels.map((l) => (
          <div
            key={l.name}
            style={{ lineHeight: '20px', marginBottom: '30px' }}
          >
            <input
              className="radioButton"
              id={l.name}
              type="radio"
              name={props.eName}
              value={l.name}
            />
            <label className="radioLabel" htmlFor={l.name} />
            {l.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomRadioButton;
