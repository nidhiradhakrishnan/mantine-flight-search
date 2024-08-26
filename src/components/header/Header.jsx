import React from "react";
import {
  NavLink,
  Button,
  Image,
  Container,
  Flex,
} from "@mantine/core";
import { useHover } from '@mantine/hooks';
import headerImage from "../Images/headerImage.png"; 
import useStyles from "./style";

const Header = () => {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  const navlinks = [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "About Us", link: "/about" },
    { key: 3, name: "Services", link: "/services" },
    { key: 4, name: "Packages", link: "/packages" },
    { key: 5, name: "Contact Us", link: "/contact" },
  ];

  return (
    <Container fluid px={0}> 
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        px="md" 
        py="md"
        bg={'white'}
        mx={100}
        mt={29}
        style={{
          borderRadius: '23px', 
          
        }}
      >
        <Image src={headerImage} alt="Logo" width={193} mx={100} height={64} />
        
        <Flex
         mx={100}
          direction="row"
          align="center"
          gap="md"
          
        >
          {navlinks.map((item) => (
            <NavLink
              key={item.key}
              label={item.name}
              href={item.link}
              className={classes.navLink}
            />
          ))}
          <Button fz={20} h={47} w={189} className={classes.agentPortal}>Agent Portal</Button>
          <Button fz={20} h={47} w={189}  className={classes.login}>Login</Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
