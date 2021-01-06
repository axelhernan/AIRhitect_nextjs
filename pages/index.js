import React from 'react';
import Layout from '../components/Layout/Layout';
import ContentCenter from '../components/Layout/ContentCenter';
import styled from '@emotion/styled';

const HomeTitle = styled.div`
    color: var(--purple);
    width:100%;
    letter-spacing: 0.5rem;
    text-align:center;

    strong{
      &::after, &::before {
        content: '';
        display:block;
        border-bottom: solid 2px var(--purple);
        width:250px;
        margin:auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      @media screen and (min-width:992px){
        display: flex;
        align-items: center;
        justify-content:center;
        flex-wrap: nowrap;
        flex: 0 1 auto;

        &::after, &::before {
          width:10%;
          margin: 0 1rem;
        } 
      }
    }
`;

export default function Home() {
  return (
    <>
      <Layout setBackground='url(/static/images/home/home-airhitect-image.jpg) center center / cover no-repeat' whiteLogo={false} setFullHeight={'100vh'} >
        <ContentCenter>
          <HomeTitle>
            <h1>
              <strong>dedicated to the future</strong>
            </h1>
            <h1 className='noneMobile'>
              web template
            </h1>
          </HomeTitle>
        </ContentCenter>
      </Layout>
    </>
  )
}