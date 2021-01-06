import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Carousel, { consts } from "react-elastic-carousel";
import Button,{CloseModal} from '../UI/Buttons'

const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false, itemPadding: [0, 0, 0, 0] }
  ];

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display:${({ openModal }) => openModal ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index:100;
`;


const ContainerCarousel = styled.div `
    position:relative;
    height:300px;

    @media screen and (min-width:992px){
        height:100%;
    }
`;

const ContentModal = styled.div`
    overflow:scroll;   
    background: var(--white);
    border-radius: 10px;
    box-shadow: 5px 4px 16px 3px rgba(0,0,0,0.27);
    width:80%;
    height:90vh;
    position:relative;

    @media screen and (min-width:992px){
        display: grid;
        width: calc(100% - 200px);
    }

    @media screen and (min-width:992px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width:1500px){
        grid-template-columns: 1fr .4fr;
    }

`;

const ContentSlideModal = styled.div`
    background:${props => props.imageModalSlider};
    background-size: cover;
    background-position: bottom;

    width:100%;
    height:300px;
    cursor:pointer;

    @media screen and (min-width:992px){
        background-position: center center;
        background-repeat: no-repeat; 
        height: 100vh;
    }
`;

const sliderModal = [
    { id: 1, image: 'url(/static/images/slider/project-airhitect-01.jpg)' },
    { id: 2, image: 'url(/static/images/slider/project-airhitect-02.jpg)' },
    { id: 3, image: 'url(/static/images/slider/project-airhitect-03.jpg)' },
    { id: 4, image: 'url(/static/images/slider/project-airhitect-01.jpg)' }
  ]

const Modal = ({ openModal, hideModal,myArrow }) => {

    return (
        <Overlay openModal={openModal}>
            <ContentModal>
                <ContainerCarousel>
                    <Carousel
                        breakPoints={breakPoints}
                        itemPadding={[0]} css={css`position:absolute;top:0;display:flex;justify-content:center;height:100%`}
                        outerSpacing={0}
                        disableArrowsOnEnd={false}
                        renderArrow={myArrow}
                    >
                        {sliderModal.map((slide) =>(
                            <ContentSlideModal key={slide.id} imageModalSlider={slide.image} />
                        ))}
                    </Carousel>
                </ContainerCarousel>
                <div css={css`padding:4rem;`}>
                    <h3>Project name</h3>
                    <p>
                        Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur.
Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper.</p>                    
                </div>
                <CloseModal onClick={hideModal} ><span /><span /> <span /></CloseModal>
            </ContentModal>
        </Overlay>
    );
}

export default Modal;