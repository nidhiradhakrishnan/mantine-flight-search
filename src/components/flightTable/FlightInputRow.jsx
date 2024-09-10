import { Flex, Card, Text, TextInput, Image } from "@mantine/core";
import { DateInput } from "@mantine/dates";

const FlightInputRow = ({ from, to, date, onFromChange, onToChange, onDateChange, flightTakeoffIcon, flightLandIcon, calendarIcon, classes }) => {
  return (
    <Flex gap={20} w="100%" wrap={{ base: "wrap", sm: "nowrap" }}>
      <Card radius={21} bg="#E2E2E2" w="100%">
        <Flex justify="space-between">
          <Text className={classes.text}>From</Text>
          <Image src={flightTakeoffIcon} alt="from logo" width={20} height={20} />
        </Flex>
        <TextInput placeholder="Enter Departure Airport or City" classNames={{ input: classes.input }} w="100%" value={from} onChange={onFromChange} />
      </Card>

      <Card radius={21} bg="#E2E2E2" w="100%">
        <Flex justify="space-between">
          <Text className={classes.text}>To</Text>
          <Image src={flightLandIcon} alt="to logo" width={20} height={20} />
        </Flex>
        <TextInput placeholder="Enter Destination Airport or City" classNames={{ input: classes.input }} w="100%" value={to} onChange={onToChange} />
      </Card>

      <Card radius={21} bg="#E2E2E2" w="100%">
        <Flex justify="space-between">
          <Text className={classes.text}>Departure Date</Text>
          <Image src={calendarIcon} alt="calendar logo" width={20} height={20} />
        </Flex>
        <DateInput value={date} onChange={onDateChange} classNames={{ input: classes.input }} placeholder="Select Date" />
      </Card>
    </Flex>
  );
};

export default FlightInputRow;
