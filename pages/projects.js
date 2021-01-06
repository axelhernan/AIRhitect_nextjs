import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import Slider from '../components/Layout/Slider';
import styled from '@emotion/styled';

const projects = () => {
    
    const [openModal, setOpenModal] = useState(false)

    return (
        <Layout whiteLogo={false} actualPage={'projects'} setFullHeight={'100vh'} >
            <Slider />
        </Layout>
    );
}

export default projects;