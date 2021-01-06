import React, { useState } from 'react';
import Carousel, { consts } from "react-elastic-carousel";
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Modal from './Modal';

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false, itemPadding: [0, 0, 0, 0] },
  { width: 1024, itemsToShow: 2, pagination: false, itemPadding: [0, 0, 0, 0] },
  { width: 1200, itemsToShow: 3, pagination: false, itemPadding: [0, 0, 0, 0] }
];

const ItemText = styled.span`
  background:var(--white);
  padding:3rem;
  display:block;
  width:90%;
  margin-bottom:5rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: auto;


  span{
    font-size:2.5rem;
    font-family: 'Lato', sans-serif;
    color:var(--purple);
    margin:0;

    strong{
      display:block;
    }
  }
  
  @media screen and (min-width:1024px){
    display:none;
    width:100%;
    margin-bottom:0;    
  }
`;

const ItemSlider = styled.a`
    background:${props => props.backgroundSlider};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; 

    width:100%;
    height:100vh;
    cursor:pointer;
    position:relative;


    @media screen and (min-width:1024px){
      &:hover ${ItemText} {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        position:absolute;
        bottom:0;
        cursor:pointer;
        padding:4rem;
        width:100%;
      }
    }
`;

const contentSlider = [
  { id: 1, image: 'url(/static/images/slider/project-airhitect-01.jpg)', title: 'Project Name', text: 'Vivamus imperdiet hendrerit leo quis fringilla.' },
  { id: 2, image: 'url(/static/images/slider/project-airhitect-02.jpg)', title: 'Project Name', text: 'Vivamus imperdiet hendrerit leo quis fringilla.' },
  { id: 3, image: 'url(/static/images/slider/project-airhitect-03.jpg)', title: 'Project Name', text: 'Vivamus imperdiet hendrerit leo quis fringilla.' },
  { id: 4, image: 'url(/static/images/slider/project-airhitect-01.jpg)', title: 'Project Name', text: 'Vivamus imperdiet hendrerit leo quis fringilla.' }
]

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? '' : ''
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}


const Slider = () => {

  const [openModal, setOpenModal] = useState(false);
  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);


  return (
    <>
      <Carousel
        breakPoints={breakPoints}
        itemPadding={[0]} css={css`position:absolute;top:0;display:flex;justify-content:center;height:100vh;`}
        outerSpacing={0}
        disableArrowsOnEnd={false}
        renderArrow={myArrow}
      >
        {
          contentSlider.map((content) => (
            <ItemSlider key={content.id} backgroundSlider={content.image} openModal={openModal} onClick={showModal}>
              <ItemText>
                <span><strong>{content.title}</strong></span>
                <span>{content.text}</span>
              </ItemText>
            </ItemSlider>
          ))
        }
      </Carousel>
      <Modal openModal={openModal} hideModal={hideModal} myArrow={myArrow}/>
    </>
  );
}

export default Slider;