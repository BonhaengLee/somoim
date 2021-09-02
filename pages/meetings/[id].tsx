// import { createClient } from 'contentful';
import React, { useState } from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { queryClient } from '../../lib/ReactQueryProvider';

// const fetchMeetingListFromAPI = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${'CG_01'}/${1}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: localStorage.getItem('AccessToken').replaceAll('"', ''),
//       },
//     }
//   );
//   return res.json();
// };

const fetchMeetingFromAPI = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('AccessToken').replaceAll('"', ''),
      },
    }
  );
  return res.json();
};

// export async function getStaticPaths() {
//   const res = await queryClient.prefetchQuery(
//     'meetingList',
//     fetchMeetingListFromAPI,
//     {
//       staleTime: 10000,
//     }
//   );
//   console.log(res);

//   const paths = [{ id: '1' }, { id: '2' }].map((item) => ({
//     params: { slug: item.id },
//   }));

//   return {
//     paths,
//     // 만약 fallback: false 일 경우 paths 에 정의해주지 않은 다른 모든 경로는 404 page 로 이동
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   await queryClient.prefetchQuery(
//     ['meeting', params.id],
//     () => fetchMeetingFromAPI(params.id.toString()),
//     {
//       staleTime: 10000,
//     }
//   );
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
//   if (!items.length) {
//     return {
//       redirect: {
//         destination: '/',
//         // permanent : 현재 리소스의 정보가 다른 URL로 옮겨진 경우 true, 일시적인 페이지나 페이지 이동은 false
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { recipe: items[0] },
//     // 변경 후 새로고침 처음에는 반영되지 않음, 다음 번에 반영됨
//     revalidate: 1,
//   };
// };

const MeetingDetails = ({ params }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useQuery(
    ['meet', id],
    () => id && fetchMeetingFromAPI(String(id)),
    {
      staleTime: 10000,
    }
  );
  // if (status) return <>...loading</>;

  console.log(data, id);

  //   const { title } = recipe;

  // Use the useRouter hook
  // Grab our ID parameter

  return (
    <>
      {status === 'success' && (
        <div>
          <div className="banner">
            {/* <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        /> */}
            {/* <div>user id: {data}</div>
        <h2>{data} </h2> */}
          </div>

          <div className="info">
            {/* <p>Take about {cookingTime} mins to cook. </p>
        <h3>Ingredients:</h3>

        {ingredients.map((ing) => (
          <span key={ing}>{ing}</span>
        ))} */}
          </div>

          <div className="method">
            <h3>Method:</h3>
            {/* <div>{documentToReactComponents(method)}</div> */}
          </div>

          {/* <style jsx>
        {`
          h2,
          h3 {
            text-transform: uppercase;
          }
          .banner h2 {
            margin: 0;
            background: #fff;
            display: inline-block;
            padding: 20px;
            position: relative;
            top: -60px;
            left: -10px;
            transform: rotateZ(-1deg);
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          }
          .info p {
            margin: 0;
          }
          // info가 적용된 span 태그 뒤에 ', '를 넣음
          .info span::after {
            content: ', ';
          }
          // info가 적용된 span 태그들 중 last-child 뒤에 '.'를 넣음
          .info span:last-child::after {
            content: '.';
          }
        `}
      </style> */}
        </div>
      )}
    </>
  );
};

export default MeetingDetails;
