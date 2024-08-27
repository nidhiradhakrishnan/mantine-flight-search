import useStyles from "./style";
import  bg from "../Images/bg.png"
import { BackgroundImage,Center,Text,Image ,Button, Container, Box} from "@mantine/core";
import homeLine from "../Images/homeLine.png";
import Header from "../header/Header";
import FlightTable from "../flightTable/FlightTable";

const BackGround = ()=>{

const {classes}=useStyles();

    return(
     <div style={{position:'relative'}} >  
        <BackgroundImage src={bg}  >
            <div style={{position:'absolute'}}>
            <Header />
            </div>
            
            <Center><Text fz={55} mt={180} className={classes.text} c={'#002D74'} fw={700}>Explore the World:<br /> Book Your Next Flight with Us</Text></Center>
            <Center> <Image src={homeLine} alt="Logo" width={340} height={20} /></Center>
            <Text className={classes.text} color="white" fz={19}>We bring you not only a stay option, but an experience in your budget to<br /> enjoy the luxury.</Text>
            <Center><Button my={20} w={192} h={58} fz={15} className={classes.discoverNow}>Discover Now</Button></Center>
            <FlightTable/>
        </BackgroundImage>
        </div> 
    );

};

export default BackGround;

