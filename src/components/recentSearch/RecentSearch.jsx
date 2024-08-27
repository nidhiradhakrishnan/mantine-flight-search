import { Container, Flex, Grid } from "@mantine/core";
import { Text } from "@mantine/core";
import useStyle from "./style";
const RecentSearch = () => {
        const { classes } = useStyle();
        return (
    <Container mx={{ lg: 100, md: 50, sm: 50, xs: 50 }} my={30} fluid>
      <Flex mx={{ lg: 100, md: 50, sm: 50, xs: 50 }} gap={30} >
        <Flex>
          <Text fz={28} fw={700}>
            Recent
            <br /> Searches
          </Text>
        </Flex>
        <Flex direction="column" gap={20}>
      <Flex  direction="row" wrap="wrap" gap={50} >
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
        <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
      </Flex>
      <Flex direction="row" gap={50}  >
      <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
      <Text  bg={'#F5F5F6'} color="#7B7878" px={10} py={4} fz={14} className={classes.text}>Lorem ipsum X</Text>
      <Text bg={'#D0D8E5'} color="#002D74" px={10} py={4}  fz={14} className={classes.text}>clear all</Text>
      </Flex>
    </Flex>
      </Flex>
    </Container>
  );
};
export default RecentSearch;
