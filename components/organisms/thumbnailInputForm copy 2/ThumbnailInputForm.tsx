import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../atoms/button/Button';
import CardTitle from '../../atoms/cardTitle/CardTitle';
import styles from './ThumbnailInputForm.module.scss';

const ThumbnailInputForm = (props: {
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
  handleChange: (name: string, value: string) => void;
  // disabled: boolean;
}): JSX.Element => {
  const Previous = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.prevStep();
  };

  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [imgFile, setImgFile] = useState(null); // 파일

  const getThumbnailUrl = async (img: any) => {
    const formData = { multipartFile: img };
    // const formData = { files: imgBase64 };
    console.log(formData);

    try {
      const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/thumbnail`;
      axios
        .post(url, formData, {
          headers: {
            'Content-Type': false,
            authorization: localStorage.getItem('AccessToken') as string,
          },
        })
        .then((res) => {
          // then print response status
          console.warn(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeFile = (event) => {
    const reader = new FileReader();
    // const fd = new FormData();
    // fd.append('file', file);
    // Object.values(imgFile).forEach((file: any) => fd.append('file', file));

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        // const fd = new FormData();
        // fd.append('file', base64.toString());
        // getThumbnailUrl(fd); // * : base64로 썸네일 url 업로드 요청
      }
    };
    if (event.target.files[0]) {
      // reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      // setImgFile(event.target.files[0]); // 파일 상태 업데이트
      // * :  파일을 배열로 보내줘야 하는가?
      reader.readAsDataURL(event.target.files); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files); // 파일 상태 업데이트
    }
  };

  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getThumbnailUrl(imgBase64);
    props.nextStep();
  };

  const onClickHandler = (event) => {
    const formData = new FormData();
    formData.append(
      'uploadImages',
      this.state.selectedFiles,
      this.state.selectedFiles.name
    );
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: localStorage.getItem('AccessToken') as string,
      },
    };
    axios.post('uploadAPI', formData, config);
  };

    <button onClick={this.onClickHandler}>저장하기</button>;

  console.log(imgFile, imgBase64);

  return (
      <div className={`${styles.bodyInner} ${styles.ThumbnailInputWrapper}`}>
      <div className={styles.ThumbnailInputFlexContainer}>
          <div className={styles.ThumbnailInputContainer}>
          <article className={styles.ThumbnailInputCard}>
              <section className={styles.ThumbnailInputHeader}>
              <CardTitle label="모임 대표 이미지를 등록하세요" />
            </section>
              <section className={styles.ThumbnailInputBody}>
              {imgBase64 ? (
                  <img
                  src={imgBase64}
                  style={{
                      width: '300px',
                      height: '300px',
                    }}
                  alt=""
                />
                ) : (
                <div
                    style={{
                    backgroundColor: '#efefef',
                    width: '360px',
                    height: '350px',
                  }}
                  />
                )}
              <div>
                  <input
                  type="file"
                  name="imgFile"
                  id="imgFile"
                  onChange={handleChangeFile}
                />
                </div>
            </section>
              <section className={styles.ThumbnailInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
            </article>
        </div>
        </div>
    </div>
  );
};

export default ThumbnailInputForm;
