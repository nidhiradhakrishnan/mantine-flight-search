import { createStyles } from "@mantine/core";
const useStyle = createStyles (()=>({
card:{
    borderRadius: '23px' ,
},
 tabRadius:{ 
    borderRadius: '10px' },
input:{
    borderRadius: '10px',
    height:'57px',
    alignContent:'center'

},
  
text:{
    color:'#4D4D4D',
    fontSize:'18px',
    font:'var(--unnamed-font-style-normal) normal normal var(--unnamed-font-size-18)/var(--unnamed-line-spacing-31) var(--unnamed-font-family-poppins)',
},
image:{
borderRadius:'50%',
},
select: {
    backgroundColor:'#E2E2E2',

    '&::placeholder': {
      color: '#4D4D4D',
    },
},
button:{
color:'#002D74',
borderRadius:'13px',
},

}));
export default useStyle;