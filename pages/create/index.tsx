import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import banner from '../../public/assets/images/gather-banner-flower.png';
import styles from './create.module.scss';
import QuillEditor from '../../components/atoms/quillEditor/QuillEditor';
// import CategoryInputForm from '../../components/organisms/categoryInputForm/CategoryInputForm';
import ContentsInputForm from '../../components/organisms/contentsInputForm';

const Create = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [createInput, setCreateInput] = useState({
    category: '',
    content: '',
    fee: 0,
    finish_at: '',
    frequency: '',
    max_age: 0,
    min_age: 0,
    numOfPeople: 0,
    place: '',
    start_at: '',
    thumbnail: '',
    title: '',
  });

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const changeForm = () => {
    switch (step) {
      case 1:
        return (
          <CategoryInputForm
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
            disabled={disabledUserDt}
          />
        );
      case 2:
        return <ContentsInputForm />;
      case 3:
        return <ContentsInputForm />;
      case 4:
        return <ContentsInputForm />;
      case 5:
        return <ContentsInputForm />;
      case 6:
        return <ContentsInputForm />;
      case 7:
        return <ContentsInputForm />;
      case 8:
        return <ContentsInputForm />;
      case 9:
        return <ContentsInputForm />;
      default:
        return <></>; // do nothing
    }
  };

  return <div className={styles.container}>{changeForm()}</div>;
};

export default Create;
