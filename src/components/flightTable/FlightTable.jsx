import {
  Card,
  Text,
  Flex,
  Tabs,
  TextInput,
  Select,
  Button,
  Image,
} from "@mantine/core";
import useStyles from "./style";
import { useState } from "react";
import flight_takeoff from "../Images/flight_takeoff.png";
import flight_land from "../Images/flight_land.png";
import calender from "../Images/calender.png";
import component from "../Images/component.png";
const FlightTable = () => {
  const { classes } = useStyles();
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };
  return (
    <>
      <Card my={35} mx={200} className={classes.card} withBorder w="80%">
        <Flex
          justify="space-between"
          align="center"
          direction="column"
          w="100%"
          h="100%"
        >
          <Tabs
            variant="pills"
            color="dark"
            defaultValue="Oneway"
            my={30}
            w="100%"
          >
            <Flex gap={19} w="100%">
              <Tabs.List w="100%">
                <Tabs.Tab value="Oneway">One way</Tabs.Tab>
                <Tabs.Tab value="RoundTrip">Round Trip</Tabs.Tab>
                <Tabs.Tab value="Multicity">Multicity</Tabs.Tab>
              </Tabs.List>
              <Select ml="auto" placeholder="Select Class"  classNames={{ input: classes.select }} data={[]} w="100%" />
              <Select classNames={{ input: classes.select}}
                placeholder="2 Adults 1 Child 1 Infant"
                data={[]}
                w="100%"
              />
            </Flex>

            <Tabs.Panel value="Oneway" pt="xl">
              <Flex gap={20} w="100%">
                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>From</Text>
                    <Image
                      src={flight_takeoff}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Departure Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Select Date"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>
              </Flex>
              <Image
              className={classes.image}
              bg={"white"}
              withBorder
              mt={-55}
              mx={419}
              src={component}
              style={{
                position: "absolute",
              }}
              width={35}
              height={30}
            />
            </Tabs.Panel>

            
            <Tabs.Panel value="RoundTrip" pt="xl">
              <Flex gap={20} w="100%">
                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>From</Text>
                    <Image
                      src={flight_takeoff}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Departure Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Select Date"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>
              </Flex>
              <Image
              className={classes.image}
              bg={"white"}
              withBorder
              mt={-55}
              mx={419}
              src={component}
              style={{
                position: "absolute",
              }}
              width={35}
              height={30}
            />
              <Flex gap={20} w="100%" my={8}>
                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>From</Text>
                    <Image
                      src={flight_takeoff}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Departure Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Select Date"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>
              </Flex>
              <Image
              className={classes.image}
              bg={"white"}
              withBorder
              mt={-55}
              mx={419}
              src={component}
              style={{
                position: "absolute",
              }}
              width={35}
              height={30}
            />
            </Tabs.Panel>
            
            <Tabs.Panel value="Multicity" pt="xl">
              {rows.map((row) => (
                <Flex key={row.id} gap={20} my={20} w="100%">
                 <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>From</Text>
                    <Image
                      src={flight_takeoff}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Departure Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>

                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>


                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="from logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Select Date"
                    classNames={{ input: classes.input }}
                    w="100%"
                  />
                </Card>
                  <Button color="yellow" onClick={addRow}>
                    +
                  </Button>
                </Flex>
              ))}
              <Image
              className={classes.image}
              bg={"white"}
              withBorder
             mt={-220}
              mx={400}
              src={component}
              style={{
                position: "absolute",
              }}
              width={35}
              height={30}
            />
            </Tabs.Panel>
          </Tabs>
        </Flex>
      </Card>
    </>
  );
};
export default FlightTable;
