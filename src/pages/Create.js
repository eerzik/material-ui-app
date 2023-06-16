import React from 'react';
import {Typography,Container} from '@mui/material';

const Create = () => {
    return (
        //Container sağdan soldan boşuklar oluştu
        <Container>
            {/* //noWrap alt satıra geçirmiyor ... nokta ile gösteriyor. */}
            {/* //gutterBottom margin bottom veriyor. */}
            <Typography variant='subtitle2' gutterBottom  >
                Ut veniam minim tempor dolore dolor consectetur.
                Ex laboris ullamco aliquip aute adipisicing aute non deserunt
                Lorem est et. Sint sunt officia laboris sunt dolore excepteur fugiat.
                Labore in occaecat id consectetur enim sunt officia cupidatat.
                Labore amet proident ipsum id laborum do et laboris aliquip fugiat est.
                In officia reprehenderit ut sit dolor. Duis labore eu est culpa tempor sint dolore eiusmod voluptate ipsum.
            </Typography>
        </Container>
    );
};

export default Create;