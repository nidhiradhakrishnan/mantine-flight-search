import useStyle from "./style";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  ScrollArea,
  Text,
} from "@mantine/core";
import slide1 from "../Images/slide1.png";
import slide2 from "../Images/slide2.png";

const FlightDeals = () => {
  const { classes } = useStyle();

  return (
    <>
      <Text
      
        fz={47}
        fw={700}
        my={50}
        style={{ textAlign: "center" }}
        className={classes.font}
      >
        Flight Deals
      </Text>
      <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }} my={50} fluid>
        <ScrollArea
          w="100%"
          mx="auto"
          type="never"
          sx={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <Flex
            w={{ base: "max-content", md: "100%" }}
            gap={50}
            justify="center"
            sx={{ flexWrap: { base: "nowrap", sm: "wrap" } }}
          >
            <Flex gap={15} className={classes.borderFlex}>
              <Image src={slide1} width={165} height={150} radius={17} />
              <Flex direction="column" my={20}>
                <Text c={"#0B0A12"} fw={700} fz={16} className={classes.font}>
                  Book & Enjoy
                </Text>
                <Text c={"#707070"} fz={16} className={classes.font}>
                  20% Off on the best
                  <br /> available fare
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column" bg={"#D0D8E5"} className={classes.border}>
              <Text
                c={"#002D74"}
                fz={20}
                fw={700}
                className={classes.font}
                py={20}
                mx={10}
              >
                Get extra 20% discount on all
                <br /> deals
              </Text>

              <Flex justify={"space-between"} mx={10}>
                <Button
                  fw={700}
                  bg={"white"}
                  c={"#0B0A12"}
                  w={97}
                  h={36}
                  fz={14}
                  className={classes.font}
                >
                  LOG125F
                </Button>

                <Text fz={14} c={"#4D4D4D"} className={classes.font}>
                  Valid till : 31 Dec
                </Text>
              </Flex>
            </Flex>
            <Flex gap={15} className={classes.borderFlex}>
              <Image src={slide2} width={165} height={150} radius={17} />
              <Flex direction="column" my={20}>
                <Text fw={700} fz={16} className={classes.font}>
                  Flat
                </Text>
                <Text c={"#707070"} className={classes.font}>
                  <span style={{ fontSize: 31 }}>20% </span>
                  <br />
                  Off on Domestic Flights
                </Text>
              </Flex>
            </Flex>
            <Flex gap={15} className={classes.borderFlex}>
              <Image src={slide1} width={165} height={150} radius={17} />
              <Flex direction="column" my={20}>
                <Text c={"#0B0A12"} fw={700} fz={16} className={classes.font}>
                  Book & Enjoy
                </Text>
                <Text c={"#707070"} fz={16} className={classes.font}>
                  20% Off on the best
                  <br /> available fare
                </Text>
              </Flex>
            </Flex>
            <Flex gap={15} className={classes.borderFlex}>
              <Image src={slide2} width={165} height={150} radius={17} />

              <Flex direction="column" my={20}>
                <Text c={"#0B0A12"} fw={700} fz={16} className={classes.font}>
                  Book & Enjoy
                </Text>

                <Text c={"#707070"} fz={16} className={classes.font}>
                  20% Off on the best
                  <br /> available fare
                </Text>
              </Flex>
            </Flex>{" "}
          </Flex>
        </ScrollArea>
      </Container>
    </>
  );
};
export default FlightDeals;
