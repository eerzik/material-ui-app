import React from 'react';
import { Typography, Container, Button, ButtonGroup } from '@mui/material';

const Create = () => {
    return (
        //Container sağdan soldan boşuklar oluştu
        <Container>
            {/* //ButtonGroup içerisindeki butonlara da özellikleri geçer */}
            {/* <ButtonGroup color='primary' variant='outlined' >
            <Button  >Oluştur</Button>
            <Button  >Oluştur</Button>
            <Button  >Oluştur</Button>
            </ButtonGroup> */}

{/* //disableElevation gölgelendirme ortadan kalkıyor. */}

            <Button variant='contained' color='primary' disableElevation onClick={()=>{console.log('Tıklandı')}} >Oluştur</Button>
        </Container>
    );
};

export default Create;