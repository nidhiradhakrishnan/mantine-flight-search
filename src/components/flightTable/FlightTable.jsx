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
import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import flight_takeoff from "../Images/flight_takeoff.png";
import flight_land from "../Images/flight_land.png";
import calender from "../Images/calender.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import component from "../Images/component.png";
import { DateInput } from "@mantine/dates";

const FlightTable = () => {
  const { classes } = useStyles();
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    const newId = rows.length + 1;
    setRows([...rows, { id: newId }]);
    // Add new entry to the form state for the new row
    form.setFieldValue(`fromMulti_${newId}`, "");
    form.setFieldValue(`toMulti_${newId}`, "");
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    // Remove row values from form state when row is deleted
    form.removeField(`fromMulti_${id}`);
    form.removeField(`toMulti_${id}`);
  };
  const [value, setValue] = useState(null);
  const [submittedValues, setSubmittedValues] = useState([]);
  const [activeTab, setActiveTab] = useState("Oneway"); // activeTab state for the currently selected tab

  const form = useForm({
    initialValues: {
      from: "",
      to: "",
      // Dynamically create form fields for Multicity
      fromMulti_1: "",
      toMulti_1: "",
    },
  });
  // Initialize the form with useForm for the first row
  const form1 = useForm({
    initialValues: {
      from: "",
      to: "",
    },
  });

  // Initialize the form with useForm for the second row
  const form2 = useForm({
    initialValues: {
      from: "",
      to: "",
    },
  });

  const handleSubmit = () => {
    const newSubmission = [...submittedValues, form.values];
    localStorage.setItem("flightSearch", JSON.stringify(newSubmission));
    setSubmittedValues(newSubmission); // Update the state with new array of submissions
  };

  const handleSubmitRoundTrip = () => {
    const row1 = { ...form1.values };
    const row2 = { ...form2.values };

    const newSubmission = [...submittedValues, row1, row2];
    localStorage.setItem("flightSearch", JSON.stringify(newSubmission));
    setSubmittedValues(newSubmission); // Update the state with new array of submissions
  };
  useEffect(() => {
    const savedValues = localStorage.getItem("flightSearch");
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues);
      if (Array.isArray(parsedValues)) {
        setSubmittedValues(parsedValues);
        form.setValues(parsedValues.slice(-1)[0]);
      }
    }
  }, []);

  return (
    <>
      <Card my={35} mx="auto" className={classes.card} withBorder w="80%">
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
            value={activeTab}
            onTabChange={setActiveTab}
            my={30}
            w="100%"
          >
            <Flex gap={19} w="100%">
              <Tabs.List w="100%">
                <Tabs.Tab value="Oneway">One way</Tabs.Tab>
                <Tabs.Tab value="RoundTrip">Round Trip</Tabs.Tab>
                <Tabs.Tab value="Multicity">Multicity</Tabs.Tab>
              </Tabs.List>
              <Select
                w={{ base: "100%", sm: "auto" }}
                ml="auto"
                placeholder="Select Class"
                classNames={{ input: classes.select }}
                data={[]}
              />
              <Select
                w={{ base: "100%", sm: "auto" }}
                classNames={{ input: classes.select }}
                placeholder="2 Adults 1 Child 1 Infant"
                data={[]}
              />
            </Flex>

            <Tabs.Panel
              wrap={{ base: "wrap", sm: "nowrap" }}
              value="Oneway"
              pt="xl"
            >
              <Flex gap={20} w="100%" wrap={{ base: "wrap", sm: "nowrap" }}>
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
                    {...form.getInputProps("from")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="to logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                    {...form.getInputProps("to")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="calendar logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <DateInput
                    value={value}
                    onChange={setValue}
                    classNames={{ input: classes.input }}
                    placeholder="Select Date"
                  />
                </Card>
              </Flex>
            </Tabs.Panel>

            <Tabs.Panel
              wrap={{ base: "wrap", sm: "nowrap" }}
              value="RoundTrip"
              pt="xl"
            >
              {/* First row */}
              <Flex gap={20} w="100%" wrap={{ base: "wrap", sm: "nowrap" }}>
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
                    {...form1.getInputProps("from")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="to logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                    {...form1.getInputProps("to")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="calendar logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <DateInput
                    classNames={{ input: classes.input }}
                    placeholder="Select Date"
                  />
                </Card>
              </Flex>

              {/* Second row */}
              <Flex
                gap={20}
                w="100%"
                wrap={{ base: "wrap", sm: "nowrap" }}
                mt={20}
              >
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
                    {...form2.getInputProps("from")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>To</Text>
                    <Image
                      src={flight_land}
                      alt="to logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <TextInput
                    placeholder="Enter Destination Airport or City"
                    classNames={{ input: classes.input }}
                    w="100%"
                    {...form2.getInputProps("to")}
                  />
                </Card>

                <Card radius={21} bg="#E2E2E2" w="100%">
                  <Flex justify="space-between">
                    <Text className={classes.text}>Departure Date</Text>
                    <Image
                      src={calender}
                      alt="calendar logo"
                      width={20}
                      height={20}
                    />
                  </Flex>
                  <DateInput
                    classNames={{ input: classes.input }}
                    placeholder="Select Date"
                  />
                </Card>
              </Flex>
            </Tabs.Panel>

            <Tabs.Panel
              wrap={{ base: "wrap", sm: "nowrap" }}
              value="Multicity"
              pt="xl"
            >
              {rows.map((row, index) => (
                <Flex
                  key={row.id}
                  gap={20}
                  my={20}
                  w="100%"
                  wrap={{ base: "wrap", sm: "nowrap" }}
                >
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
                      // Dynamically bind form input props based on row ID
                      {...form.getInputProps(`fromMulti_${row.id}`)}
                    />
                  </Card>

                  <Card radius={21} bg="#E2E2E2" w="100%">
                    <Flex justify="space-between">
                      <Text className={classes.text}>To</Text>
                      <Image
                        src={flight_land}
                        alt="to logo"
                        width={20}
                        height={20}
                      />
                    </Flex>

                    <TextInput
                      placeholder="Enter Destination Airport or City"
                      classNames={{ input: classes.input }}
                      w="100%"
                      // Dynamically bind form input props based on row ID
                      {...form.getInputProps(`toMulti_${row.id}`)}
                    />
                  </Card>

                  <Card radius={21} bg="#E2E2E2" w="100%">
                    <Flex justify="space-between">
                      <Text className={classes.text}>Departure Date</Text>
                      <Image
                        src={calender}
                        alt="calendar logo"
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

                  {index === rows.length - 1 ? (
                    <Button color="green" onClick={addRow}>
                      +
                    </Button>
                  ) : (
                    <Button color="red" onClick={() => removeRow(row.id)}>
                      -
                    </Button>
                  )}
                </Flex>
              ))}
            </Tabs.Panel>
    
          </Tabs>
        </Flex>
        
      </Card>

      <Flex pb={20} justify="flex-end" mr={170}>
        {activeTab === "Oneway" && (
          <Button
            h={65}
            my={-60}
            w={200}
            className={classes.button}
            bg={"#FDB913"}
            fz={20}
            onClick={handleSubmit}
          >
            Find ticket <IconArrowNarrowRight stroke={2.5} />
          </Button>
        )}

        {activeTab === "RoundTrip" && (
          <Button
            h={65}
            my={-60}
            w={200}
            className={classes.button}
            bg={"#FDB913"}
            fz={20}
            onClick={handleSubmitRoundTrip}
          >
            Find ticket <IconArrowNarrowRight stroke={2.5} />
          </Button>
        )}

{activeTab === "Multicity" && (
  <Button
    h={65}
    my={-60}
    w={200}
    className={classes.button}
    bg={"#FDB913"}
    fz={20}
    onClick={handleSubmit} // Save data when button is clicked
  >
    Find ticket <IconArrowNarrowRight stroke={2.5} />
  </Button>
)}

      </Flex>
    </>
  );
};

export default FlightTable;
