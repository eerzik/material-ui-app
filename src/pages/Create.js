import React from 'react';
import { Container, TextField } from '@mui/material';

export default function Create() {
    return (
        <Container>
            <form>
            <TextField id="outlined-basic" label="Not Giriniz" color='primary' fullWidth required type='number' multiline maxRows={4} minRows={2}  variant="standard" />
            </form>
        </Container>
    )
}

