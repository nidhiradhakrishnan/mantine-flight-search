import React, { useState } from "react";
import {
  NavLink,
  Button,
  Image,
  Container,
  Flex,
  Drawer,
  Burger,
  MediaQuery,
  Card,
} from "@mantine/core";
import headerImage from "../Images/headerImage.png";
import useStyles from "./style";
import { useMediaQuery } from "@mantine/hooks";

const Header = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Adjust the size as needed

  const navlinks = [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "About Us", link: "/about" },
    { key: 3, name: "Services", link: "/services" },
    { key: 4, name: "Packages", link: "/packages" },
    { key: 5, name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
         <Card
            bg="white"
          radius={23}
 
        
        >
          <Flex justify={'space-around'} >
            <Image src={headerImage} alt="Logo" width={193} height={64} />

            <MediaQuery largerThan="md"  >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                className={classes.burger}
              />
            </MediaQuery>

            <MediaQuery smallerThan="md"  >
              <Flex
                direction="row"
                align="center"
                gap="md"
                className={classes.navDesktop}
              >
                {navlinks.map((item) => (
                  <NavLink
                    key={item.key}
                    label={item.name}
                    href={item.link}
                    className={classes.navLink}
                  />
                ))}
                <Button fz={20} h={47} w={189} className={classes.agentPortal}>
                  Agent Portal
                </Button>
                <Button fz={20} h={47} w={189} className={classes.login}>
                  Login
                </Button>
              </Flex>
            </MediaQuery>

            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              padding="md"
              size="md"
              className={classes.drawer}
            >
              <Flex direction="column" gap="md">
                {navlinks.map((item) => (
                  <NavLink
                    key={item.key}
                    label={item.name}
                    href={item.link}
                    className={classes.drawerNavLink}
                  />
                ))}

                {isSmallScreen && (
                  <>
                    <Button
                      fz={20}
                      h={47}
                      w="100%"
                      className={classes.drawerButton}
                    >
                      Agent Portal
                    </Button>
                    <Button
                      fz={20}
                      h={47}
                      w="100%"
                      className={classes.drawerButton}
                    >
                      Login
                    </Button>
                  </>
                )}
              </Flex>
            </Drawer>
          </Flex>
        </Card>
     </>
  );
};

export default Header;
