import { useState, useEffect } from "react";
import { Container, Flex, Text, CloseButton } from "@mantine/core";
import useStyle from "./style";

const Recent = () => {
  const { classes } = useStyle();

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem("flightSearch");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const removeItem = (type, id) => {
    setRecentSearches((prevSearches) =>
      prevSearches.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            [type]: "", 
          };
        }
        return item;
      })
    );
    localStorage.setItem(
      "flightSearch",
      JSON.stringify(
        recentSearches.map((item, index) => {
          if (index === id) {
            return {
              ...item,
              [type]: "",
            };
          }
          return item;
        })
      )
    );
  };

  const clearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem("flightSearch");
  };

  return (
    <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }} my={50} fluid>
      <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 20, sm: 30 }}>
        <Flex>
          <Text fz={28} fw={700}>
            Recent
            <br /> Searches
          </Text>
        </Flex>
        <Flex direction="column" gap={20}>
          <Flex direction="row" wrap="wrap" gap={20}>
            {recentSearches.map((item, index) => (
              <Flex direction="row" key={index} gap={10}>
                {item.from && (
                  <Flex
                    bg={"#F5F5F6"}
                    className={classes.text}
                    align="center"
                    px={10}
                    py={4}
                  >
                    <Text fz={14} color="#7B7878">
                       {item.from}
                    </Text>
                    <CloseButton
                      aria-label="Remove from search"
                      onClick={() => removeItem("from", index)}
                      ml={10}
                    />
                  </Flex>
                )}

                {item.to && (
                  <Flex
                    bg={"#F5F5F6"}
                    className={classes.text}
                    align="center"
                    px={10}
                    py={4}
                  >
                    <Text fz={14} color="#7B7878">
                      {item.to}
                    </Text>
                    <CloseButton
                      aria-label="Remove to search"
                      onClick={() => removeItem("to", index)}
                      ml={10}
                    />
                  </Flex>
                )}
              </Flex>
            ))}
            {recentSearches.length > 0 && (
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
            )}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Recent;
