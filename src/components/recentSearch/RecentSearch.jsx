import { useState } from "react";
import { Container, Flex, Text, CloseButton } from "@mantine/core";
import useStyle from "./style";

const RecentSearch = () => {
  const { classes } = useStyle();

  const [recentSearches, setRecentSearches] = useState([
    { id: 1, label: "Lorem ipsum " },
    { id: 2, label: "Lorem ipsum " },
    { id: 3, label: "Lorem ipsum " },
    { id: 4, label: "Lorem ipsum " },
    { id: 5, label: "Lorem ipsum " },
    { id: 6, label: "Lorem ipsum " },
    { id: 7, label: "Lorem ipsum " },
    { id: 8, label: "Lorem ipsum " },
    { id: 9, label: "Lorem ipsum " },
    { id: 10, label: "Lorem ipsum " },


  ]);

  const removeItem = (id) => {
    setRecentSearches((prevSearches) =>
      prevSearches.filter((item) => item.id !== id)
    );
  };

  const clearAll = () => {
    setRecentSearches([]);
  };

  return (
    <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }}  my={50} fluid>
      <Flex
        direction={{ base: "column", sm: "row" }} 
        gap={{ base: 20, sm: 30 }} 
      >
        <Flex>
          <Text fz={28} fw={700}>
            Recent
            <br /> Searches
          </Text>
        </Flex>
        <Flex direction="column" gap={20}>
          <Flex direction="row" wrap="wrap" gap={20}>
            {recentSearches.map((item) => (
              <Flex
                key={item.id}
                bg={"#F5F5F6"}
                className={classes.text}
                align="center"
                px={10}
                py={4}
              >
                <Text fz={14} color="#7B7878">{item.label}</Text>
                <CloseButton
                  aria-label="Remove search"
                  onClick={() => removeItem(item.id)}
                  ml={10}
                />
              </Flex>
            ))}
            <Text
              bg={"#D0D8E5"}
              color={"#002D74"}
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
