import { Container, Flex, Image, Text } from "@mantine/core";
import useStyle from "./style";
import man from "../Images/man.png";
import family from "../Images/family.png";
import bestRateGuarantee from "../Images/bestRateGuarantee.svg";
import noBookingFee from "../Images/noBookingFee.svg";
import securityPayment from "../Images/securityPayment.svg";
import moneyGuarantee from "../Images/moneyGuarantee.svg";

const Services = () => {
  const { classes } = useStyle();

  return (
    <Container my={100} mx={{ base: 20, sm: 50, md: 80, lg: 100 }} fluid>
      <Flex
        direction={{ base: "column", lg: "row" }} gap={80}
        
      >
        <Flex direction={"column"} mb={{ base: 30, lg: 0 }}>
          <Text
            c={"#0B0A12"}
            fz={{ base: 32, sm: 36, md: 40, lg: 45 }}
            fw={700}
          >
            Sed ut perspiciatis unde omnis
            iste natus error
            sit voluptatem
          </Text>
          <Text c={"#747579"} fz={{ base: 18, sm: 20, lg: 22 }} mt={20}>
            Lorem ipsum dolor sit amet,
            consectetur elit, sed do eiusmod 
            tempor dolore magna aliqua
          </Text>
          <Image
            my={20}
            src={family}
            width={{ base: "100%", sm: 400, md: 450, lg: 481 }}
            height="auto"
            radius={20}
          />
        </Flex>
        <Flex direction={"column"} mx={{ base: 0, lg: 20 }}>
          <Image
            src={man}
            width={{ base: "100%", sm: 700, lg: 830 }}
            height="auto"
            radius={19}
          />
          <Flex
            direction={{ base: "column", sm: "row" }}
            align="center"
            my={{ base: 30, sm: 50 }}
            gap={{ base: 30, sm: 20, md: 30 }}
          >
            <Flex align="center">
              <Image src={bestRateGuarantee} width={61} height={61} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 24, sm: 28 }} fw={700}>
                  Best Rate Guarantee
                </Text>
                <Text c={"#747579"} fz={{ base: 16, sm: 19 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>

            <Flex align="center" mt={{ base: 30, sm: 0 }}>
              <Image src={noBookingFee} width={61} height={69} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 24, sm: 28 }} fw={700}>
                  No Booking Fee
                </Text>
                <Text c={"#747579"} fz={{ base: 16, sm: 19 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction={{ base: "column", sm: "row" }}
            align="center"
            gap={{ base: 30, sm: 20, md: 30 }}
          >
            <Flex align="center">
              <Image src={securityPayment} width={63} height={55} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 24, sm: 28 }} fw={700}>
                  Security Payment
                </Text>
                <Text c={"#747579"} fz={{ base: 16, sm: 19 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>

            <Flex align="center" mt={{ base: 30, sm: 0 }}>
              <Image src={moneyGuarantee} width={63} height={73} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 24, sm: 28 }} fw={700}>
                  Money Back Guarantee
                </Text>
                <Text c={"#747579"} fz={{ base: 16, sm: 19 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Services;
