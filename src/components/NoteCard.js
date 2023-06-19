import { DeleteOutline } from '@mui/icons-material';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';

const NoteCard = ({ note }) => {
    return (
        <Card elevation={3}>
            <CardHeader action={
                <IconButton>
                    <DeleteOutline />
                </IconButton>
            } title={note.title} subheader={note.category} />
            <CardContent>
                <Typography variant='body1' color="gray">
                    {note.details}
                </Typography>
            </CardContent>

        </Card>
    );
};

export default NoteCard;