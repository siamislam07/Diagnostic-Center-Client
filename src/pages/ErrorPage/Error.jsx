import { useLottie } from 'lottie-react';
import error from '../../assets/Home/animations/error.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const options = {
        animationData: error,
        loop: true,
    };

    const { View } = useLottie(options);

    const containerStyle = {
        backgroundColor: '#E0E3EC',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem', // Equivalent to gap-4 in Tailwind
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
    };

    const paragraphStyle = {
        backgroundColor: 'transparent',
    };

    const buttonStyle = {
        borderRadius: '0.5rem', // Equivalent to rounded-lg in Tailwind
        fontSize: '1.5rem',
    };

    return (
        <div style={containerStyle}>
            <p style={paragraphStyle}>{View}</p>
            <Link to="/">
                <button style={buttonStyle}>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
