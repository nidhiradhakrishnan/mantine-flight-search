import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
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
    color: "#002D74",
    textDecoration: 'none',
    whiteSpace:'nowrap',
    fontSize:'20px',
  },
}));

export default useStyles;
