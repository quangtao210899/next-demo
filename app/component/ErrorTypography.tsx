import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
interface ErrorTypographyProps {
    text: string | null;
    color?: string;
}

const ErrorTypography: React.FC<ErrorTypographyProps> = ({ text, color }) => {
    const textColor = color || "#E37878";
    return (
        <Typography
            sx={{
                ml: 2,
                color: text ? textColor : "",
                fontFamily: 'Inter',
                fontSize: "14px"
            }}
        >
            {text} &nbsp;
        </Typography>
    );
}

ErrorTypography.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default ErrorTypography;