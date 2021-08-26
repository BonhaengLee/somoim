import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import banner from '../../public/assets/images/gather-banner-flower.png';
import styles from './create.module.scss';
import CategoryInputForm from '../../components/main/categoryInputForm/CategoryInputForm';
import ContentsInputForm from '../../components/main/contentsInputForm';
import TitleInputForm from '../../components/main/titleInputForm/TitleInputForm';
import FrequencyInputForm from '../../components/main/frequencyInputForm/FrequencyInputForm';
import DateInputForm from '../../components/main/dateInputForm/DateInputForm';
import FeeInputForm from '../../components/main/feeInputForm/FeeInputForm';
import AgeInputForm from '../../components/main/ageInputForm/AgeInputForm';
import JoinInputForm from '../../components/main/joinInputForm/JoinInputForm';
import ThumbnailInputForm from '../../components/main/thumbnailInputForm/ThumbnailInputForm';

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
    if (name === 'category') {
      const val =
        (value === '운동' && 'CG_01') ||
        (value === '공부' && 'CG_02') ||
        (value === '생활습관' && 'CG_03') ||
        (value === '취미' && 'CG_04') ||
        (value === '감정관리' && 'CG_05') ||
        (value === '돈관리' && 'CG_06') ||
        (value === '외국어' && 'CG_07');
      setCreateInput({ ...createInput, [name]: val });
    } else {
      setCreateInput({ ...createInput, [name]: value });
    }
  };

  const handleChangeOption = (name, value) => {
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
    // try {
    //   const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board`;
    //   axios
    //     .post(
    //       url,
    //       JSON.stringify({
    //         category: createInput.category,
    //         content: createInput.content,
    //         fee: createInput.fee,
    //         finish_at: createInput.finishAt,
    //         frequency: createInput.frequency,
    //         max_age: createInput.maxAge,
    //         min_age: createInput.minAge,
    //         numOfPeople: createInput.numOfPeople,
    //         place: createInput.place,
    //         start_at: createInput.startAt,
    //         thumbnail: createInput.thumbnail,
    //         title: createInput.title,
    //       }),
    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           authorization: localStorage
    //             .getItem('AccessToken')
    //             .replaceAll('"', ''),
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       // console.warn(res.data);
    //       console.dir(res);
    //       // props.handleChange('thumbnail', res.data.Thumbnail_URL);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage
              .getItem('AccessToken')
              .replaceAll('"', ''),
          },
          body: JSON.stringify({
            category: createInput.category,
            content: createInput.content,
            fee: Number(createInput.fee),
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
      } else {
        console.log(res.statusText);
        // alert((await res.json()).message);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(createInput, 'fee', Number(createInput.fee));
  };

  const [disabledUserDt, setDisabledUserDt] = useState(true);
  const [disabledPersonalDt, setDisabledPersonalDt] = useState(true);
  // const signUpRequest = () => {
  //   // if (!disabledUserDt && !disabledPersonalDt) {
  //   createMeeting();
  //   // }
  // };

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
          // <ThumbnailInputForm
          //   prevStep={prevStep}
          //   nextStep={nextStep}
          //   values={createInput}
          //   handleChange={handleChangeOption}
          // />
          // <ContentsInputForm
          //   createMeeting={createMeeting}
          //   values={createInput}
          //   handleChange={handleChangeOption}
          // />
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
            handleChange={handleChangeOption}
          />
        );
      case 7:
        return (
          <JoinInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChangeOption}
            onChange={handleChange}
          />
        );
      case 8:
        return (
          <ThumbnailInputForm
            prevStep={prevStep}
            nextStep={nextStep}
            values={createInput}
            handleChange={handleChangeOption}
          />
        );
      case 9:
        return (
          <ContentsInputForm
            createMeeting={createMeeting}
            values={createInput}
            handleChange={handleChangeOption}
          />
        );
      default:
        return <></>; // do nothing
    }
  };

  console.log(step, createInput);

  return <div className={styles.container}>{changeForm()}</div>;
};

export default Create;
