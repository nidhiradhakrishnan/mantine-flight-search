import {
  Text,
  Flex,
  Image,
  ScrollArea,
  Box,
  Container,
} from "@mantine/core";
import useStyle from "./style";
import dubai from "../Images/dubai.png";
import abudhabi from "../Images/abudhabi.png";
import sharjah from "../Images/sharjah.png";
import riyad from "../Images/riyad.png";
import { IconStarFilled } from "@tabler/icons-react";

const PopularDestinations = () => {
  const { classes } = useStyle();

  return (
    <>
      <Text fz={47}  fw={700} my={50} style={{ textAlign: "center" }}>
        Popular Destinations
      </Text>
      <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }} my={50} fluid > 
        <ScrollArea w="100%" h={600} type="auto" offsetScrollbars type="never">
          <Box w="max-content" h={550}>
            <Flex gap={10} wrap="nowrap">
              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={dubai} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      10%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Dubai
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={abudhabi} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      20%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Abudhabi
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={sharjah} width={354} />
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Sharjah
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>
              
              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={riyad} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      5%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Riyad
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={dubai} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      10%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Dubai
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={abudhabi} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      20%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Abudhabi
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={sharjah} width={354} />
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Sharjah
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>
              
              <Flex direction={"column"} minWidth={354}>
                <div style={{ position: "relative" }}>
                  <Image src={riyad} width={354} />
                  <Text
                    bg={"#ebebf2"}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    <span style={{ color: "#002D74", fontSize: "14px" }}>
                      5%
                    </span>
                    <br />
                    OFF
                  </Text>
                </div>
                <Flex justify={"space-between"}>
                  <Text c={"#0B0A12"} fw={700} fz={28}>
                    Riyad
                  </Text>
                  <Text c={"#0B0A12"} fz={20} fw={500}>
                    4.5 <IconStarFilled color="#FDB913" size={15} />
                  </Text>
                </Flex>
                <Text c={"#747579"} fz={19}>
                  Lorem ipsum dolor sit amet
                </Text>
              </Flex>

              {/* Repeat similar structure for other destinations */}
              
            </Flex>
          </Box>
        </ScrollArea>
      </Container>
    </>
  );
};

export default PopularDestinations;
