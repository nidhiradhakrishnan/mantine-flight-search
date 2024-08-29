import { Container, Flex, Image, Text } from "@mantine/core";
import useStyle from "./style";
import HelpImg from "../Images/HelpImg.jpg";
import PaymentTrust from "../Images/PaymentTrust.jpg";
import appStore from "../Images/appStore.jpg";
import googlePlay from "../Images/googlePlay.jpg";

const Help = () => {
  const { classes } = useStyle();
  return (
    <Container bg={"#F5F5F6"} fluid py={60}>
      <Container
        mx={{ lg: 100, md: 50, sm: 20, xs: 10 }}
        fluid
      >
        <Flex
          gap={50}
          direction={{ base: "column", sm: "row" }} 
          align={"center"} 
        >
          <Flex
            bg={"#FFFFFF"}
            py={30}
            px={50}
            direction={{ base: "column", sm: "row" }} 
            align={{ base: "center", sm: "flex-start" }}
            className={classes.border}
            style={{ textAlign: "center" }} 
          >
            <Image src={HelpImg} width={53} />
            <Flex
              direction={"column"}
              mx={{ base: 0, sm: 10 }} 
              mt={{ base: 20, sm: 0 }} 
            >
              <Text fz={24} fw={700}>
                24x7 Help
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, con <br /> sectetur adipiscing elit,
                sed do
              </Text>
            </Flex>
          </Flex>
          <Flex
            bg={"#FFFFFF"}
            py={30}
            px={50}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", sm: "flex-start" }}
            className={classes.border}
            style={{ textAlign: "center" }}
          >
            <Image src={PaymentTrust} width={53} />
            <Flex
              direction={"column"}
              mx={{ base: 0, sm: 10 }}
              mt={{ base: 20, sm: 0 }}
            >
              <Text fz={24} fw={700}>
                Payment Trust
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, con <br /> sectetur adipiscing elit,
                sed do
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            gap={20}
            align={{ base: "center", sm: "flex-start" }} // Centers items on small screens
            style={{ textAlign: "center" }}
          >
            <Text fz={24} fw={700}>
              Download App
            </Text>
            <Flex
              gap={10}
              direction={{ base: "column", sm: "row" }} // Stacks buttons vertically on small screens
              align={"center"} // Centers the buttons
            >
              <Image src={appStore} width={164} height={51} />
              <Image src={googlePlay} width={164} height={51} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default Help;
