import { Alert, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import Info from '../Info/Info';

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled('input')(
    ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

const Home = () => {

    const [roll, setRoll] = useState(null);
    const [info, setInfo] = useState({});
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("http://localhost:5700/1Y1S")
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])

    const handleQueryResult = () => {

        setResult(null);
        setAlert(false);
        setError('');
        setLoading(true);

        {
            info.map(data => {
                if (data.roll === roll) {
                    setAlert(false);
                    setError('');
                    setResult(data);
                    setLoading(false);
                }
            })
        }

        if (!result) {
            setAlert(true);
            setError('Please type correct ID');
            setLoading(false);
        }

    }

    return (

        <div>
            <div className='my-5'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CustomInput
                        onChange={e => setRoll(e.target.value)}
                        aria-label="Demo input"
                        placeholder="Type Your ID (e.g. 19-0-52-801-046)"
                    />
                    <Button
                        onClick={handleQueryResult}
                        variant="contained"
                        style={{ marginLeft: '5px' }}
                        className='px-4'
                    >
                        Submit
                    </Button>
                </div>
            </div>

            <Container maxWidth="md" className='mb-5'>

                {loading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>}
                {alert && !result && <Alert variant="outlined" severity="error">
                    {error}
                </Alert>}

                {
                    result && <Info
                        result={result}
                    >

                    </Info>

                }
            </Container>
        </div>

    );
};

export default Home;