import { Text, Accordion, Container } from "@mantine/core";
import useStyle from "./style";
const Faq = () => {
  const { classes } = useStyle();
  return (
    <Container className={classes.bg} fluid py={50} >
      <Text fz={47} fw={700} style={{ textAlign: "center" }}>
        FAQ
      </Text>
      <Text fz={22} c={"#515253"} style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore <br />
        magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </Text>
      <Container mx={{ lg: 100, md: 50, sm: 20, xs: 10 }}  fluid>

      <Accordion variant="separated" radius="md" defaultValue="customization" my={70} styles={(theme) => ({
        item: {
          borderRadius: theme.radius.md, 
        },
        control: {
          borderRadius: theme.radius.md, 
        },
        content: {
          borderRadius: theme.radius.md,
        },
      })}>
        <Accordion.Item value="customization">
          <Accordion.Control bg={"#0B0A12"} c={"#CCCCCC"} fz={18}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ?
          </Accordion.Control>
          <Accordion.Panel c={"#939393"}  fz={18}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control bg={"#0B0A12"} c={"#CCCCCC"} fz={18}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem?
          </Accordion.Control>
          <Accordion.Panel c={"#939393"} fz={18}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control bg={"#0B0A12"} c={"#CCCCCC"} fz={18}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit?
          </Accordion.Control>
          <Accordion.Panel c={"#939393"}  fz={18}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-rings">
          <Accordion.Control bg={"#0B0A12"} c={"#CCCCCC"}fz={18}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis?
          </Accordion.Control>
          <Accordion.Panel c={"#939393"}  fz={18}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      </Container>
    </Container>
  );
};
export default Faq;
