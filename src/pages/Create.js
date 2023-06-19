import React from 'react';
import {  Container,Button, Typography } from '@mui/material';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
const Create = () => {
    return (
        //Container sağdan soldan boşuklar oluştu
        <Container>
            <Button color="primary" variant='outlined' startIcon={<AnnouncementOutlinedIcon/>} >Yeni Kayıt</Button>
         <AnnouncementOutlinedIcon color='secondary'  fontSize='large' ></AnnouncementOutlinedIcon>
         <Typography color='secondary' > Yeni Kayıt </Typography>
        </Container>
    );
};

export default Create;