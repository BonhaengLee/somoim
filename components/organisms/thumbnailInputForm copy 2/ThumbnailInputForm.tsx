import axios from 'axios';
import React, { useState } from 'react';
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
    const formData = new FormData();
    formData.append('multipartFile', img);

    try {
      const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/thumbnail`;
      axios
        .post(url, formData, {
          headers: {
            'Content-Type': false,
            authorization: localStorage
              .getItem('AccessToken')
              .replaceAll('"', ''),
          },
        })
        .then((res) => {
          // console.warn(res.data);
          props.handleChange('thumbnail', res.data.Thumbnail_URL);
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

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getThumbnailUrl(imgFile);
    props.nextStep();
  };

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
