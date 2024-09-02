import { Container, Flex, Image, Text } from "@mantine/core";
import useStyle from "./style";
import man from "../Images/man.png";
import family from "../Images/family.png";
import bestRateGuarantee from "../Images/bestRateGuarantee.svg";
import noBookingFee from "../Images/noBookingFee.svg";
import securityPayment from "../Images/securityPayment.svg";
import moneyGuarantee from "../Images/moneyGuarantee.svg";
import arrowCurley from "../Images/arrowCurley.svg";

const Services = () => {
  const { classes } = useStyle();

  return (
    <Container my={100} mx={{ base: 20, sm: 30, md: 50, lg: 80 }}  fluid>
      <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 30, lg: 80 }}>
        {/* Left Column */}
        <Flex direction={"column"} mb={{ base: 30, lg: 0 }}>
          <Text
            c={"#0B0A12"}
            fz={{ base: 24, sm: 28, md: 32, lg: 36 }}
            fw={700}
            w={{ base: "100%", sm: "90%", md: 455 }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </Text>
          <Text c={"#747579"} w={{ base: "100%", sm: "90%", md: 355 }} fz={{ base: 16, sm: 18, md: 20 }} mt={20}>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
          </Text>
          <Image
            my={20}
            src={family}
            width={{ base: "100%", sm: 400, md: 450, lg: 481 }}
            height="auto"
            radius={20}
          />
        </Flex>

        {/* Right Column */}
        <Flex direction={"column"} mx={{ base: 0, lg: 20 }}>
          <div style={{ position: "relative" }}>
            <Image
              src={man}
              width={{ base: "100%", sm: 600, md: 700, lg: 830 }}
              height="auto"
              radius={19}
            />
            <div style={{ position: "absolute", top: "50%"}}>
              <Image
                src={arrowCurley}
                my={-140}
                mx={-130}
                width={196}
                height={91}
               
                style={{ position: "absolute", top: "10%" }}
              />
              <Text
                px={20}
                py={20}
                bg={"white"}
                my={120}
                mx={-50}
                c={"#4D4D4D"}
                fz={{ base: 18, sm:'none', md: 22 }}
                align="center"
                className={classes.box}
                style={{ position: "relative"}}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "bolder",
                    color: "#002D74",
                  }}
                >
                  10 M+
                </span>
                <br />
                Total Booking
              </Text>
            </div>
          </div>

          {/* Service Features */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            align="center"
            my={{ base: 20, sm: 30 }}
            gap={{ base: 20, sm: 30, md: 40 }}
          >
            <Flex align="center" gap={{ base: 15, sm: 20 }}>
              <Image src={bestRateGuarantee} width={61} height={61} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 20, sm: 24 }} fw={700}>
                  Best Rate Guarantee
                </Text>
                <Text c={"#747579"} fz={{ base: 14, sm: 16, md: 18 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>

            <Flex align="center" gap={{ base: 15, sm: 20 }} mt={{ base: 20, sm: 0 }}>
              <Image src={noBookingFee} width={61} height={69} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 20, sm: 24 }} fw={700}>
                  No Booking Fee
                </Text>
                <Text c={"#747579"} fz={{ base: 14, sm: 16, md: 18 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction={{ base: "column", sm: "row" }}
            align="center"
            gap={{ base: 20, sm: 30, md: 40 }}
          >
            <Flex align="center" gap={{ base: 15, sm: 20 }}>
              <Image src={securityPayment} width={63} height={55} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 20, sm: 24 }} fw={700}>
                  Security Payment
                </Text>
                <Text c={"#747579"} fz={{ base: 14, sm: 16, md: 18 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
                </Text>
              </Flex>
            </Flex>

            <Flex align="center" gap={{ base: 15, sm: 20 }} mt={{ base: 20, sm: 0 }}>
              <Image src={moneyGuarantee} width={63} height={73} />
              <Flex direction={"column"} mx={20}>
                <Text fz={{ base: 20, sm: 24 }} fw={700}>
                  Money Back Guarantee
                </Text>
                <Text c={"#747579"} fz={{ base: 14, sm: 16, md: 18 }}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua
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
