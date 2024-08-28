import { createStyles } from "@mantine/core";
const useStyle = createStyles (()=>({
    font:{
        font: 'var(--unnamed-font-style-normal) normal normal 16px/24px var(--unnamed-font-family-poppins)',
    },
    center:{
    textAlign:'center',
    },
    borderFlex:{
        border: '1px solid #E2E2E2',
        borderRadius: '17px',
    },
    border:{
        border: '1px dashed #002D74',
        borderRadius: '17px',
        
    },

}));
export default useStyle;