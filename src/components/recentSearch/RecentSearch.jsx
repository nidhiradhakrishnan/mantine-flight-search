import { useState } from "react";
import { Container, Flex, Text, CloseButton } from "@mantine/core";
import useStyle from "./style";

const RecentSearch = () => {
  const { classes } = useStyle();

  const [recentSearches, setRecentSearches] = useState([
    "Lorem ipsum 1",
    "Lorem ipsum 2",
    "Lorem ipsum 3",
    "Lorem ipsum 4",
    "Lorem ipsum 5",
    "Lorem ipsum 6",
    "Lorem ipsum 7",
    "Lorem ipsum 8",
    "Lorem ipsum 9",

  ]);

  const removeItem = (item) => {
    setRecentSearches((prevItems) => prevItems.filter((i) => i !== item));
  };

  const clearAll = () => {
    setRecentSearches([]);
  };

  return (
    <Container mx={{ lg: 100, md: 50, sm: 50, xs: 50 }} my={30} fluid>
      <Flex mx={{ lg: 100, md: 50, sm: 50, xs: 50 }} gap={30}>
        <Flex>
          <Text fz={28} fw={700}>
            Recent
            <br /> Searches
          </Text>
        </Flex>
        <Flex direction="column" >
          <Flex direction="row" >
            {recentSearches.map((item, index) => (
              <Text
                key={index}
                bg={"#F5F5F6"}
                color="#7B7878"
                className={classes.text}
              >
                {item}
                <CloseButton
                  aria-label="Remove search"
                  onClick={() => removeItem(item)}
                />
              </Text>
            ))}
            <Text
              bg={"#D0D8E5"}
              color="#002D74"
              px={10}
              py={4}
              fz={14}
              className={classes.text}
              onClick={clearAll}
              style={{ cursor: "pointer" }}
            >
              clear all
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default RecentSearch;
