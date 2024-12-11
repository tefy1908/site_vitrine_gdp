import { Box } from "@mui/material";
import Logo from "../Assets/Icon/logo";
import SearchIcon from "../Assets/Icon/SearchIcon";
const NavBar = ()=>{
    return(
        <Box display={"flex"} justifyContent={"space-between"} padding={" 36px 85px"} alignItems={'center'} boxShadow="0px 4px 4px 0px #00000040" 
>
            <Box><Logo/></Box>
            <Box fontSize={'24px'} lineHeight={"2.4px"} textAlign={'center'} color={"#3C3E3E"}>Accueil</Box>
            <Box fontSize={'24px'} lineHeight={"2.4px"} textAlign={'center'} color={"#3C3E3E"}>Comment ça marche ?</Box>
            <Box fontSize={'24px'} lineHeight={"2.4px"} textAlign={'center'} color={"#3C3E3E"}>Vous êtes ?</Box>
            <Box fontSize={'24px'} lineHeight={"2.4px"} textAlign={'center'} color={"#3C3E3E"}>FAQ</Box>
            <Box fontSize={'24px'} lineHeight={"2.4px"} textAlign={'center'} color={"#3C3E3E"}><SearchIcon/></Box>

        </Box>

    )
    
    

}

export default NavBar;