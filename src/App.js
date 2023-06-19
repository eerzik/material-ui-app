import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create';
import Notes from './pages/Notes';
// import { createTheme, ThemeProvider } from '@mui/material'
// import { cyan } from '@mui/material/colors'
import Layout from './components/Layout';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#f39c12'
//     },
//     secondary: cyan,

//   },
//   typography: {
//     fontFamily: 'Big Shoulders Display',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700
//   }
// })

function App() {
  return (
   // <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Notes />} ></Route>
            <Route path='create' element={<Create />} ></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
   // </ThemeProvider>
  );
}

export default App;
