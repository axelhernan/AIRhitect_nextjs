import React from 'react';
import styled from '@emotion/styled';

export const GridTwo = styled.div`
    margin: auto;

    > * {
        padding: 0 0 2rem;

        @media screen and (min-width:768px){
            padding:0 2rem 2rem 0;    
        }
    }

    @media screen and (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2, 270px);
    }

    @media screen and (min-width:1200px){
        grid-template-columns: repeat(2, 320px);
    }
`;

export const GridThree = styled.div`

    > * {
        padding: 0 0 2rem;

        @media screen and (min-width:768px){
            padding:0 2rem 2rem 0;    
        }
    }

    @media screen and (min-width:768px){
        display: grid;
        grid-template-columns: repeat(3, 250px);
    }

    @media screen and (min-width:1200px){
        grid-template-columns: repeat(3,300px);
    }
`;


export const GridFive = styled.div`    
    width: 80%;
    margin: auto;

    > * {
        padding: 0 0 2rem;
        display:flex;
        align-items: center;
        justify-content:center;
        flex-flow: column;


        @media screen and (min-width:992px){
            padding:0 2rem 2rem 0;

        }
    }

    p{
        text-align:center;
    }

    @media screen and (min-width:768px){
        width:100%;
        display:grid;
        grid-template-columns: repeat(2,300px);
    }


    @media screen and (min-width:1200px){
        grid-template-columns: repeat(3,300px);
    }

    @media screen and (min-width:1440px){
        grid-template-columns: repeat(5,300px);
    }
`;

const Grid = () => {
    return (
        <>
            <GridTwo />
            <GridThree />
            <GridFive />
        </>
    );
}

export default Grid;
