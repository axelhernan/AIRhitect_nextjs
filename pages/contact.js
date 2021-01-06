import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/Layout/Layout';
import IconsMedia from '../components/UI/IconsMedia';
import Buttons, { StyledLink, Styledbutton } from '../components/UI/Buttons';
import Grid, { GridTwo } from '../components/UI/Grid';
import Maps from '../components/UI/Maps';
import Credentials from '../components/UI/Credentials';
import styled from '@emotion/styled';

const ContainerContact = styled.div`
    display:block;
    width: 100%;

    h3{
        width:250px;
        color: var(--white);
    }

    p{
        color: var(--white);
    }

    @media screen and (min-width:992px){
        display:grid;
        grid-template-columns: 1fr .5fr;
    }
`;

const ContactInfo = styled.ul`
    li{
        margin-bottom: 2rem;
        display:flex;

        span{
            display:block;
        }

        img{
            margin-right:2rem;
        }

        p{
            display:inline;
        }
    }
`;

const ContactText = styled.div`
    @media screen and (min-width:768px){
        margin-top:-6rem;
    }
`;

const FormArea = styled.form`
    width:100%;
    display:flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    button{
        margin-left:auto;
    }

    @media screen and (min-width:768px){
        input{
            width:290px;
        }
    }
`;


const mapURL = `https://maps.googleapis.com/maps/api/js?sensor=false&key=${Credentials.mapsKey}`;


const contact = () => {
    return (
        <Layout setBackground='var(--purple)' actualPage={'contact'} whiteLogo={true} >
            <ContainerContact>
                <div css={css`margin: auto; width:75%`}>
                    <h3>Contact us via email, phone or come by into our office!</h3>

                    <GridTwo>
                        <ContactInfo>
                            <li>
                                <img src='/static/images/icons/envelope.png' width='25' height='20' alt='icon-mail-airhitect' />
                                <StyledLink href='mailto:job@airhitect.com' alt='job@airhitect.com'>job@airhitect.com</StyledLink>
                            </li>
                            <li>
                                <img src='/static/images/icons/phone-call.png' width='25' height='24' alt='icon-call-airhitect'  />
                                <p>
                                    <span>+12 34 567 890</span>
                                    +09 87 654 321
                                </p>
                            </li>
                            <li>
                                <img src='/static/images/icons/house.png' width='25' height='23' alt='icon-adress-airhitect'  />
                                <p>
                                    <span>1012 Budapest</span>
                                    Márvány utca 16
                                </p>
                            </li>
                        </ContactInfo>

                        <ContactText>
                            <IconsMedia />
                            <p><strong>We are hiring!</strong></p>
                            <p>We are looking for new talents to our team! If you think you are the right person for AIRhitect send us an email with your CV and portfolio. Don’t forget to write a little about yourself!</p>
                            <StyledLink href='mailto:job@airhitect.com' alt='job@airhitect.com'>job@airhitect.com</StyledLink>
                        </ContactText>

                    </GridTwo>

                    <FormArea onSubmit={e => e.preventDefault}>
                        <input placeholder='Name' type='text' required />
                        <input placeholder='E-mail' type='email' required />
                        <input placeholder='Subjet' type='text' required />
                        <textarea placeholder='Message' type='text' required />
                        <Styledbutton type='submit'>send message</Styledbutton>
                    </FormArea>

                </div>
                <Maps
                    googleMapURL={mapURL}
                    containerElement={<div css={css`position:relative`} />}
                    mapElement={<div className='map' />}
                    loadingElement={<p>Loading</p>}
                />
            </ContainerContact>
        </Layout>
    );
}

export default contact


