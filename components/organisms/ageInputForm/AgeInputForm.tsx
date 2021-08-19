import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import CardTitle from '../../atoms/cardTitle/CardTitle';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './AgeInputForm.module.scss';

const ages = [
  // { id: 1, age: 20 },
  // { id: 2, age: 21 },
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  // { id: 3, age: 22 },
  // { id: 4, age: 23 },
  // { id: 5, age: 24 },
  // { id: 6, age: 25 },
  // { id: 7, age: 26 },
  // { id: 8, age: 27 },
  // { id: 9, age: 28 },
  // { id: 10, age: 29 },
  // { id: 11, age: 30 },
  // { id: 12, age: 31 },
  // { id: 13, age: 32 },
  // { id: 14, age: 33 },
  // { id: 15, age: 34 },
  // { id: 16, age: 35 },
  // { id: 17, age: 36 },
  // { id: 18, age: 37 },
  // { id: 19, age: 38 },
  // { id: 20, age: 39 },
  // { id: 21, age: 40 },
  // { id: 22, age: 41 },
  // { id: 23, age: 42 },
  // { id: 24, age: 43 },
  // { id: 25, age: 44 },
  // { id: 26, age: 45 },
  // { id: 27, age: 46 },
  // { id: 28, age: 47 },
  // { id: 29, age: 48 },
  // { id: 30, age: 49 },
  // { id: 31, age: 50 },
];

const AgeInputForm = (props: {
  prevStep: () => void;
  nextStep: () => void;
  values: {
    category: string;
    content: string;
    fee: number;
    finishAt: string; // finish_at
    frequency: string;
    maxAge: number; //
    minAge: number; //
    numOfPeople: number;
    place: string;
    startAt: string; //
    thumbnail: string;
    title: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // disabled: boolean;
}): JSX.Element => {
  const Previous = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.prevStep();
  };
  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.nextStep();
  };

  // @ : menu1
  const [isOpen_1, setIsOpen_1] = useState(false);
  const [selectedOption_1, setSelectedOption_1] = useState(null);

  const toggling_1 = () => setIsOpen_1(!isOpen_1);

  const onOptionClicked_1 = (value: any) => () => {
    setSelectedOption_1(value);
    setIsOpen_1(false);
    console.log(selectedOption_1);
    // setModelForm({
    //   ...modelForm,
    //   gender: value,
    // });
  };

  // @ : menu2
  const [isOpen_2, setIsOpen_2] = useState(false);
  const [selectedOption_2, setSelectedOption_2] = useState(null);

  const toggling_2 = () => setIsOpen_2(!isOpen_2);

  const onOptionClicked_2 = (value: any) => () => {
    setSelectedOption_2(value);
    setIsOpen_2(false);
    console.log(selectedOption_2);
    // setModelForm({
    //   ...modelForm,
    //   gender: value,
    // });
  };

  return (
    <div className={`${styles.bodyInner} ${styles.AgeInputWrapper}`}>
      <div className={styles.AgeInputFlexContainer}>
        <div className={styles.AgeInputContainer}>
          <article className={styles.AgeInputCard}>
            <section className={styles.AgeInputBody}>
              <div className={styles.AgeInputBox}>
                <article>
                  <h2>최소 나이를 설정하세요</h2>
                  <div className={styles.DropDownContainer}>
                    <div className={styles.DropDownHeader} onClick={toggling_1}>
                      <div>
                        <p>{selectedOption_1 || '최소 나이'}</p>
                        <div />
                      </div>
                    </div>
                    {isOpen_1 && (
                      <div className={styles.DropDownListContainer}>
                        <ul className={styles.DropDownList}>
                          {ages.map((option) => (
                            <li
                              className={styles.ListItem}
                              onClick={onOptionClicked_1(option)}
                              key={Math.random()}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
                <article>
                  <h2>최대 나이를 설정하세요</h2>
                  <div className={styles.DropDownContainer}>
                    <div className={styles.DropDownHeader} onClick={toggling_2}>
                      <div>
                        <p>{selectedOption_2 || '최대 나이'}</p>
                        <div />
                      </div>
                    </div>
                    {isOpen_2 && (
                      <div className={styles.DropDownListContainer}>
                        <ul className={styles.DropDownList}>
                          {ages.map((option) => (
                            <li
                              className={styles.ListItem}
                              onClick={onOptionClicked_2(option)}
                              key={Math.random()}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </section>
            <section className={styles.AgeInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AgeInputForm;
