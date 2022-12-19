import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

function Item({item , width}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // THe numbet of items in the cart
    const  [count , setCount] = useState(1)
    const [isHoverd ,setIsHoverd] = useState(false);
    const { palette : {neutral} } = useTheme();

    const {category, price ,name, image} = item.attributes;
    // Coming from srtapi
    const {
        data: {
          attributes: {
            formats: {
              medium: { url },
            },
          },
        },
      } = image;


  return (
   <Box width ={width}>
         <Box position = "relative" 
        sx={{ borderRadius: "3.9rem",overflow:"overlay", shades: "0 0 10px 0 rgba(0,0,0,0.2)"}}

         onMouseOver={() => setIsHoverd(true)} 
         onMouseOut = {() => setIsHoverd(false)}
         >
            <img
                alt={item.name}
                width="300px"
                height="400px"
                src={`http://localhost:1337${url}`}
                // Will send them to the item page
                onClick={() => navigate(`/item/${item.id}`)}
                style={{ cursor: "pointer" }}
            />
            <Box
            display={isHoverd ? "blocked" : "none"}
            position="absolute"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                
                // AMOUNMT
                >
                    <Box 
                    display="flex"
                    alignItems="center"
                    backgroundColor={shades.neutral[100]}
                    borderRadius="5px"
                    >
                     <IconButton
                          onClick={() =>
                            setCount(Math.max(count-1, 1))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography color={shades.primary[300]}>{count}</Typography>
                        <IconButton
                          onClick={() =>
                           setCount(count + 1)
                          }
                        >
                          <AddIcon />
                        </IconButton>
                    </Box>
                    {/* Button */}
                    <Button
                    onClick={() => {
                        dispatch(addToCart({ item: { ...item, count } }));
                        }}
                        sx={{ backgroundColor: shades.primary[300], color: "white" }}
                                >   
                        Add to Cart
                    </Button>
                </Box>
            </Box>
         </Box>
         <Box mt="4px">
            <Typography variant="subtitle2" color={neutral.dark}>
            {/* Replace the Category to the right FORMAT! */}
                {category.replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </Typography>
            <Typography>
                {name}
            </Typography>
            <Typography fontWeight="bols">
                ${price}
            </Typography>
         </Box>
   </Box>
  )
}

export default Item
