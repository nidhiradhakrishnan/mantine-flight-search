import { createStyles } from "@mantine/core";
const useStyle = createStyles((theme) => ({
   border: {
      borderRadius: '20px',
   },
   image: {
      textAlign: "center",
      backgroundColor: "#F5F5F6",
      padding: '60px 0',
      // Responsive adjustments
      [theme.fn.smallerThan('sm')]: { // Adjust for tablet screens
         flexDirection: 'column',
         alignItems: 'center',
      },
   }
   }));
export default useStyle;