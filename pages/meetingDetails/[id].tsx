import React, { useState } from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import NavLayout from '../layout/NavLayout';
import styles from './meetingDetails.module.scss';
import translateCategory from '../../services/translateCategory';
import parseCreatedAt from '../../services/parseCreatedAt';

const fetchMeetingFromAPI = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return res.json();
};

const MeetingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useQuery(
    ['meet', id],
    () => id && fetchMeetingFromAPI(String(id)),
    {
      staleTime: 100,
    }
  );

  console.log(data, id);
  console.log(status);

  return (
    <>
      {status === 'loading' && <div> ... loading </div>}
      {status === 'success' && (
        <>
          <section className={styles.thumbnailContainer}>
            <div className={styles.thumbnailImgSection}>
              {data?.thumbnail && (
                <img
                  className={styles.thumbnailImg}
                  src={data.thumbnail} //"https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg"
                  alt="thumbnail"
                />
              )}
              <div className={styles.flag_wrapper} />
            </div>

            <div className={styles.thumbnailDescSection}>
              <h2 className={styles.header2}>{data?.title}</h2>
              <h3 className={styles.header3}>
                <div className={styles.category}>
                  <img
                    src="https://img.icons8.com/material/24/000000/opened-folder--v1.png"
                    alt=""
                  />
                  <p>{data && translateCategory(data?.category)}</p>
                </div>
                <div>
                  <section>
                    <img
                      src="https://img.icons8.com/plumpy/24/000000/person-male--v1.png"
                      alt=""
                    />
                    <p>{data?.author}</p>
                  </section>
                  <section>
                    <img
                      src="https://img.icons8.com/ios/50/000000/inscription.png"
                      alt=""
                    />
                    <p>{data && parseCreatedAt(data?.created_at)}</p>
                  </section>
                </div>
              </h3>

              {/* * : 간단 모임 소개 추가시 description & 태그 정보 추가시 interests */}
              {/* <p className={styles.description}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div className={styles.interests}>
                <span className={styles.interests_item}>Technology</span>
                <span className={styles.interests_item}>Management</span>
                <span className={styles.interests_item}>Leadership</span>
              </div> */}
            </div>
          </section>

          <section className={styles.contentSection}>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content,
              }}
            />
          </section>

          <div className={styles.info}>
            <ul className={styles.ulCustom}>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/color-glass/48/000000/money.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>참가비용 : {data?.fee}</p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/dusk/64/000000/meeting.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모임빈도 : {data?.frequency}</p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/office/16/000000/place-marker--v2.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모임장소 : {data?.place}</p>
              </li>

              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/office/16/000000/date-span.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>
                  기간 : {data?.start_at} ~ {data?.finish_at}
                </p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/doodle/48/000000/age-timeline.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>
                  나이 : {data?.min_age} ~ {data?.max_age}
                </p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://img.icons8.com/color/48/000000/conference-call.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모집인원 : {data?.numOfPeople}</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
MeetingDetails.Layout = NavLayout;

export default MeetingDetails;
