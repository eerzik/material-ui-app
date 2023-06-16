import React from 'react';
import {  Container,Button } from '@mui/material';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
const Create = () => {
    return (
        //Container sağdan soldan boşuklar oluştu
        <Container>
            <Button variant='outlined' startIcon={<AnnouncementOutlinedIcon/>} >Yeni Kayıt</Button>
         <AnnouncementOutlinedIcon  fontSize='large' ></AnnouncementOutlinedIcon>
        </Container>
    );
};

export default Create;