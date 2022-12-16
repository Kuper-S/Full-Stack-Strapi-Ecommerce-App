import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <Box>

        </Box>
    )
}
export default Navbar;