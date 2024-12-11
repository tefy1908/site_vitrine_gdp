import { Box } from "@mui/material";
import LogoFooter from "../Assets/Icon/logoFooter";
import PhoneIcon from "../Assets/Icon/PhoneIcon";
import MailIcon from "../Assets/Icon/MailIcon";
import FacebookIcon from "../Assets/Icon/FacebookIcon";
import LinkedinIcon from "../Assets/Icon/LinkedinIcon";
import InstagramIcon from "../Assets/Icon/InstagramIcon";
import YoutubeIcon from "../Assets/Icon/YoutubeIcon";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexGrow={1}
      justifyContent={"space-between"}
      padding={"10px 100px"}
      sx={{position : 'fixed' , bottom : 0}}
      width={"100%"}
      border={1}
      borderColor={"#3C3E3E"}
    >
      <Box display={'flex'} alignItems={'center'}>
        <LogoFooter />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={'60px'}
      >
        <Box>Pages</Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={'50px'}
        >
          <Box>Accueil</Box>
          <Box>Comment ça marche ?</Box>
          <Box>Vous êtes ?</Box>
          <Box>FAQ</Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={'60px'}
      >
        <Box>Pages légales</Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={'50px'}
          
        >
          <Box>Mentions légales</Box>
          <Box>CGV</Box>
          <Box>Politiques de confidentialité</Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap='60px'
      >
        <Box>Contact</Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap='50px'
          
        >
          <Box  display={'flex'} gap={"10px"}>
            <PhoneIcon/>
            <Box>06 00 00 00 O0</Box>
          </Box>
          <Box display={'flex'} gap={"10px"}>
            <MailIcon/>
            <Box>partagegdp@gmail.com</Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}  gap={"40px"}>
            <FacebookIcon />
            <LinkedinIcon/>
            <InstagramIcon/>
            <YoutubeIcon/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
