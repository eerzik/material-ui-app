import { Drawer, Typography } from "@mui/material";

const Layout = ({ children }) => {

    const drawWidth=240

    return (
        <div>
            <div>app bar</div>
            <Drawer  style={{with:{drawWidth}}} variant="permanent" anchor="left">
                <div style={{with:{drawWidth}}}>
                    <Typography variant="h5" style={{ fontSize:'25px'}} >
                        One Piece Notlar
                    </Typography>
                </div>
            </Drawer>

            <div style={{ backgroundColor: '#f9f9f9', width: '100%' }} > {children} </div>

        </div>
    );
};

export default Layout;