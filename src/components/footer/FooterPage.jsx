import { Flex, Image, Text, Container, Center } from "@mantine/core";
import file from "../Images/file.png";
import paypal from "../Images/paypal.svg";
import visa from "../Images/visa.svg";
import mastercard from "../Images/mastercard.svg";
import expresscard from "../Images/expresscard.svg";
import facebook from "../Images/facebook.svg";
import twitter from "../Images/twitter.svg";
import instagram from "../Images/instagram.svg";
import linkedin from "../Images/linkedin.svg";
import phone from "../Images/phone.svg";
import mail from "../Images/mail.svg";

const FooterPage = () => {
  return (
    <Container bg={"black"} py={70} fluid>
      <Container mx="auto" px={{ lg: 100, md: 50, sm: 20, xs: 10 }} fluid>
        <Flex direction={{ base: "column", md: "row" }} gap={50} align="center" justify={'space-between'}>
          <Flex
            direction={"column"}
            py={50}
            align={{ base: "center", md: "flex-start" }}
            justify={"flex-end"}
          >
            <Text fz={20} fw={700} c={"#FFFFFF"}>
              Payment & Security
            </Text>
            <Flex gap={15} justify={{ base: "center", md: "flex-start" }}>
              <Image src={paypal} height={34} />
              <Image src={visa} width={54} height={34} />
              <Image src={mastercard} width={54} height={34} />
              <Image src={expresscard} width={54} height={34} />
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            w={{ base: "100%", md: 504 }}
            justify="center"
            align="center"
            style={{ textAlign: "center" }}
          >
            <Image src={file} width={193} height={64} />
            <Text fz={19} c={"#8D8D8D"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut.
            </Text>
            <Flex gap={10} justify="center" align="center">
              <Image src={phone} width={16} height={16} />
              <Text c={"#8D8D8D"}>+1234568963</Text>
              <Text c={"#8D8D8D"}>|</Text>
              <Image src={mail} width={16} height={12} />
              <Text c={"#8D8D8D"}>example@gmail.com</Text>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            py={50}
            align={{ base: "center", md: "flex-end" }}
            justify={"flex-end"}
          >
            <Text fz={20} fw={700} c={"#FFFFFF"}>
              Follow us on
            </Text>
            <Flex gap={25} justify={{ base: "center", md: "flex-end" }}>
              <Image src={facebook} height={20} width={11} />
              <Image src={twitter} width={25} height={20} />
              <Image src={instagram} width={20} height={20} />
              <Image src={linkedin} width={20} height={20} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <hr style={{ width: "90%", margin: "0 auto" }} />
      <Flex
        mt={20}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mx={{ lg: 100, md: 50, sm: 20, xs: 10 }}
      >
        <Text c={"#8D8D8D"}>Copyrights ©2023 Pyramids Travel & Tourism</Text>
        <Flex
          mt={{ base: 10, md: 0 }}
          gap={10}
          align="center"
          justify={{ base: "center", md: "flex-end" }}
        >
          <Text c={"#8D8D8D"}>Privacy policy</Text>
          <Text c={"#8D8D8D"}>|</Text>
          <Text c={"#8D8D8D"}>Terms and conditions</Text>
          <Text c={"#8D8D8D"}>|</Text>
          <Text c={"#8D8D8D"}>Refund policy</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default FooterPage;
