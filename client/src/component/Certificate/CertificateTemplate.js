import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  certificateTemplate: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#007bff',
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    width: '150px',
  },
  info: {
    fontSize: '16px',
    marginBottom: theme.spacing(1),
  },
}));

const CertificateTemplate = ({ name, date, achievement }) => {
  const classes = useStyles();

  return (
    <div className={classes.certificateTemplate}>
      {/* <img src={logo} alt="Logo" className={classes.logo} /> */}
      <Typography variant="h2" className={classes.heading}>
        Certificate of Achievement
      </Typography>
      <Typography variant="body1" className={classes.info}>
        Name: {name}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        Date: {date}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        Achievement: {achievement}
      </Typography>
      {/* Add more customizable elements as needed */}
    </div>
  );
};

export default CertificateTemplate;
