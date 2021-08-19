import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import banner from '../../public/assets/images/gather-banner-flower.png';
import styles from './create.module.scss';
import CategoryInputForm from '../../components/organisms/categoryInputForm/CategoryInputForm';
import ContentsInputForm from '../../components/organisms/contentsInputForm';
import TitleInputForm from '../../components/organisms/titleInputForm/TitleInputForm';
import FrequencyInputForm from '../../components/organisms/frequencyInputForm copy/FrequencyInputForm';
import DateInputForm from '../../components/organisms/dateInputForm/DateInputForm';
import FeeInputForm from '../../components/organisms/feeInputForm copy/FeeInputForm';
import AgeInputForm from '../../components/organisms/ageInputForm/AgeInputForm';
import JoinInputForm from '../../components/organisms/joinInputForm/JoinInputForm';
import ThumbnailInputForm from '../../components/organisms/thumbnailInputForm copy 2/ThumbnailInputForm';

const Create = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [createInput, setCreateInput] = useState({
    category: '',
    content: '',
    fee: 0,
    finishAt: '',
    frequency: '',
    maxAge: 0,
    minAge: 0,
    numOfPeople: 0,
    place: '',
    startAt: '',
    thumbnail: '',
    title: '',
  });

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // const [inputCheck, setInputCheck] = useState({
  //   idCheck: true,
  //   emailCheck: true,
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateInput({ ...createInput, [name]: value });
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   if (name === 'id') {
  //     !idCheckRgx(value)
  //       ? setInputCheck({ ...inputCheck, idCheck: false })
  //       : setInputCheck({ ...inputCheck, idCheck: true });
  //   } else if (name === 'email') {
  //     !emailCheckRgx(value)
  //       ? setInputCheck({ ...inputCheck, emailCheck: false })
  //       : setInputCheck({ ...inputCheck, emailCheck: true });
  //   } else if (name === 'password') {
  //     !passwordCheckRgx(value)
  //       ? setInputCheck({ ...inputCheck, passwordCheck: false })
  //       : setInputCheck({ ...inputCheck, passwordCheck: true });
  //   } else if (name === 'nickname') {
  //     !nicknameCheckRgx(value)
  //       ? setInputCheck({ ...inputCheck, nicknameCheck: false })
  //       : setInputCheck({ ...inputCheck, nicknameCheck: true });
  //   }
  //   setCreateInput({ ...createInput, [name]: value });
  // };

  // Id : 영문(소문자,대문자), 숫자만 가능, 특수문자 사용불가 (최소 5글자, 최대 15글자)
  // pw : 영문(소문자, 대문자), 숫자, 특수기호(최소1개 포함해야함) 가능 (최소 8글자, 최대 15글자)
  // nickname : 영문(소문자, 대문자), 한글 가능 (최소 1글자, 최대 15글자)
  // born : 생년월일( ) 숫자만(8글자)
  // email : 이메일 형식만 가능
  const createMeeting = async () => {
    try {
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: createInput.category,
            content: createInput.content,
            fee: createInput.fee,
            finish_at: createInput.finishAt,
            frequency: createInput.frequency,
            max_age: createInput.maxAge,
            min_age: createInput.minAge,
            numOfPeople: createInput.numOfPeople,
            place: createInput.place,
            start_at: createInput.startAt,
            thumbnail: createInput.thumbnail,
            title: createInput.title,
          }),
        }
      );
      const res = await r.json();

      if (res.status === 200) {
        console.log('개설 성공');
        console.log(res.statusText);
        // history.push('/login');
        Router.push('/login');
      } else {
        console.log(res.statusText);
        // alert((await res.json()).message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [disabledUserDt, setDisabledUserDt] = useState(true);
  const [disabledPersonalDt, setDisabledPersonalDt] = useState(true);
  const signUpRequest = () => {
    // if (!disabledUserDt && !disabledPersonalDt) {
    createMeeting();
    // }
  };

  // const validUserDt =
  //   createInput.id !== '' &&
  //   createInput.email !== '' &&
  //   createInput.password !== '' &&
  //   createInput.passwordConfirm !== '' &&
  //   inputCheck.idCheck &&
  //   inputCheck.emailCheck &&
  //   inputCheck.passwordCheck &&
  //   createInput.password === createInput.passwordConfirm;

  // useEffect(() => {
  //   if (validUserDt) {
  //     setDisabledUserDt(false);
  //   } else {
  //     setDisabledUserDt(true);
  //   }
  // }, [
  //   validUserDt,
  //   createInput.id,
  //   createInput.email,
  //   createInput.password,
  //   createInput.passwordConfirm,
  //   inputCheck.idCheck,
  //   inputCheck.emailCheck,
  //   inputCheck.passwordCheck,
  // ]);

  // useEffect(() => {
  //   if (
  //     createInput.nickname !== '' &&
  //     createInput.birthDate !== '' &&
  //     inputCheck.nicknameCheck
  //   ) {
  //     setDisabledPersonalDt(false);
  //   } else {
  //     setDisabledPersonalDt(true);
  //   }
  // }, [createInput.nickname, createInput.birthDate, inputCheck.nicknameCheck]);

  const changeForm = () => {
    switch (step) {
      case 1:
        return (
          <CategoryInputForm
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
            // disabled={disabledUserDt}
          />
        );
      case 2:
        return (
          <TitleInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <FrequencyInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <DateInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 5:
        return (
          <FeeInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 6:
        return (
          <AgeInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 7:
        return (
          <JoinInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 8:
        return (
          <ThumbnailInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChange}
          />
        );
      case 9:
        return <ContentsInputForm />;
      default:
        return <></>; // do nothing
    }
  };

  console.log(step, createInput);

  return <div className={styles.container}>{changeForm()}</div>;
};

export default Create;
