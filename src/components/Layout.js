

const Layout = ({children}) => {

    return (
        <div>
           <div>app bar</div>
           <div>side drawer</div>
           <div> {children} </div>
        </div>
    );
};

export default Layout;