import { createStyles } from "@mantine/core";
 
const useStyles = createStyles((theme) => ({
  agentPortal: {
    backgroundColor: '#002D74',
    color: 'white',
    border: '1px solid transparent',
    borderRadius: '9px',
    padding: '8px 16px',
  },
  login:{
    backgroundColor: '#FDB913',
    color: 'black',
    borderRadius: '9px',
    border: '1px solid #70707000',
  },
  navLink: {
    
  },
  headerWrapper: {
    marginTop: '29px', // Adjust header position 20px from the top
    borderRadius: '23px',
  },
  container: {
    [theme.fn.smallerThan('md')]: {
      padding: theme.spacing.md,
    },
  },
  navDesktop: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  navLink: {
    color: "#002D74",
    textDecoration: 'none',
    whiteSpace:'nowrap',
    '&:hover': {
      backgroundColor: 'white',
      color: '#FDB913',
      cursor: 'pointer',
    },
  },
  // card: {
  //   width: '100%',
  //   maxWidth: '1450px', // Default width
  //   margin: '0 auto',
  //   [`@media (max-width: ${theme.breakpoints.md}px)`]: {
  //     maxWidth: '1550px',
  //   },
  //   [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
  //     maxWidth: '20px',
  //   },
  //   [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
  //     maxWidth: '10px',
  //   },
  // },
}));
 
export default useStyles;
 
 