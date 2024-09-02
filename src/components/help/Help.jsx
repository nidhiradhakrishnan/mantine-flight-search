import { Container, Flex, Image, Text } from "@mantine/core";
import useStyle from "./style";
import HelpImg from "../Images/HelpImg.jpg";
import PaymentTrust from "../Images/PaymentTrust.jpg";
import appStore from "../Images/appStore.jpg";
import googlePlay from "../Images/googlePlay.jpg";

const Help = () => {
  const { classes } = useStyle();
  return (
    <Container fluid py={60} style={{ backgroundColor: "#F5F5F6" }}>
      <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }} fluid>
        <Flex
          direction={{ base: "column", md: "row" }} // Column on base screens, row on md and up
          gap={50}
          align="center"
          wrap="wrap" // Ensures wrapping on smaller screens
        >
          <Flex
            bg="#FFFFFF"
            py={30}
            px={50}
            direction={{ base: "column", sm: "row" }} // Column on base screens, row on small and up
            align={{ base: "center", sm: "flex-start" }}
            className={classes.border}
            style={{ textAlign: "center" }}
          >
            <Image src={HelpImg} width={53} />
            <Flex
              direction="column"
              mx={{ base: 0, sm: 10 }}
              mt={{ base: 20, sm: 0 }}
              align="center" // Center text on small screens
            >
              <Text fz={{ base: 18, sm: 24 }} fw={700}>
                24x7 Help
              </Text>
              <Text fz={{ base: 14, sm: 16 }}>
                Lorem ipsum dolor sit amet, con <br /> sectetur adipiscing elit, sed do
              </Text>
            </Flex>
          </Flex>

          <Flex
            bg="#FFFFFF"
            py={30}
            px={50}
            direction={{ base: "column", sm: "row" }} // Column on base screens, row on small and up
            align={{ base: "center", sm: "flex-start" }}
            className={classes.border}
            style={{ textAlign: "center" }}
          >
            <Image src={PaymentTrust} width={53} />
            <Flex
              direction="column"
              mx={{ base: 0, sm: 10 }}
              mt={{ base: 20, sm: 0 }}
              align="center" // Center text on small screens
            >
              <Text fz={{ base: 18, sm: 24 }} fw={700}>
                Payment Trust
              </Text>
              <Text fz={{ base: 14, sm: 16 }}>
                Lorem ipsum dolor sit amet, con <br /> sectetur adipiscing elit, sed do
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            align="center"
            gap={20}
            style={{ textAlign: "center" }}
          >
            <Text fz={{ base: 18, sm: 24 }} fw={700}>
              Download App
            </Text>
            <Flex
              direction={{ base: "column", sm: "row" }} // Column on base screens, row on small and up
              gap={10}
              align="center"
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
