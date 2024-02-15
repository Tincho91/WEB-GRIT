import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";

const Neander = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      {/* PROYECTO 1 */}
      <Box
        position="relative"
        maxW="1280px"
        mx="auto"
        backgroundImage={{
          base: "url('/images/heroMobile.png')",
          md: "url('/images/neanderBg.png')",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        maxH="90vh"
        minH="450px"
      >
        <Image
          src="/images/proyectos/bg1.png"
          alt="Image 3"
          minW="100%"
          h="100%"
          minH="450px"
        />

        <Flex
          bottom="5%"
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
          textAlign="left"
          paddingX={{ base: "2rem", md: "3rem", xl: "5%" }}
          py={10}
          position="absolute"
        >
          <Text
            color="white"
            fontSize="16px"
            fontFamily="Travels"
            fontWeight="300"
            textTransform="uppercase"
            pb="1"
          >
            Proyecto
          </Text>
          <Heading
            color="white"
            fontSize={{ base: "35px", sm: "6vw", md: "55px", lg: "72px" }}
            fontWeight="bold"
            fontFamily="Travels"
            textTransform="uppercase"
            lineHeight={{ base: "25px", sm: "6vw", md: "55px", lg: "67px" }}
            textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
            pb="5"
          >
            NEANDER
          </Heading>
          <Text
            color="#EBEBEB"
            fontSize="14px"
            fontFamily="Ubuntu Mono"
            maxWidth="60%"
          >
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras, las cuales se distinguen por su calidad, cuidado del medio
            ambiente e integración con la comunidad.
          </Text>
          <Link href="/proyectos/neander">
            <Button
              mt="5"
              type="link"
              textAlign="center"
              textTransform="uppercase"
              color="#4139C6"
              fontFamily="Travels"
              bgColor="white"
              h="36px"
              width="fit-content"
            >
              Ver Proyecto
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Neander;