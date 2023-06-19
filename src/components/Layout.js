import { Drawer, Typography,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";

import { AddCircleOutlineOutlined,SubjectOutlined } from "@mui/icons-material";

const Layout = ({ children }) => {

    const drawWidth=240
    const menuItems=[
        {
            text:'Notlar',
            icon:<SubjectOutlined color="secondary" />,
            path:'/'
        },
        {
            text:'Yeni Not',
            icon:<AddCircleOutlineOutlined color="secondary" />,
            path:'/create'
        }
    ]

    return (
        <div>
            <div>app bar</div>
            <Drawer  style={{with:{drawWidth}}} variant="permanent" anchor="left">
                <div style={{with:{drawWidth}}}>
                    <Typography variant="h5" style={{ fontSize:'25px'}} >
                        One Piece Notlar
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item)=>(
                        <ListItem button key={item.text}  >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} secondary={item.text} >  </ListItemText>
                        </ListItem>
                    ))}
                   
                </List>
            </Drawer>

            <div style={{ backgroundColor: '#f9f9f9', width: '100%' }} > {children} </div>

        </div>
    );
};

export default Layout;