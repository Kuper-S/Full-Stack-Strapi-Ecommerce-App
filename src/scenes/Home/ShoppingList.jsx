import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";


function ShoppingList() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const breakPoint = useMediaQuery("(min-width:600px)");
    console.log('items', items);

    const handleChange = () => (event, newValue) => {
        setValue(newValue);
    };

    async function getItems() {
        const items = await fetch("http://localhost:1337/api/items?populate=image",
        { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
      }
    
      useEffect(() => {
        getItems();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
      const topRatedItems = items.filter((item) => item.attributes.category === "topRated");
      const newArraivals = items.filter((item) => item.attributes.category === "newArrivals");
      const bestSellers = items.filter((item) => item.attributes.category === "bestSellers");

  return (
    <Box
    width="80%"
    margin="80px auto"
    >
        <Typography variant="h3" textAlign="center">
            Our Featured <b>Products</b>
        </Typography>
        <Tabs
        textColor="primary"
        indecatecolor="primary"
        value={value}
        onChange={handleChange}
        centered
        tabindecatorprops={{sx: {display: breakPoint? "block" : "none"}}}
        sx = {{m: "25px", "& .MuiTabs-indicator": {flexWrap: "wrap"}}}
        >
            <Tab label="All" value="all" />
            <Tab label="Top Rated" value="topRated" />
            <Tab label="New Arrivals" value="newArrivals" />
            <Tab label="Best Sellers" value="bestSellers" />

        </Tabs>
        <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
        
        >
            {value === "all" && items.map((item) => (
                <Item  item={item} key={`${item.name}-${item.id}`} />
            ))}
            
            {value === "newArrivals" && newArraivals.map((item) => (
                <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
            {value === "bestSellers" && bestSellers.map((item) => (
                <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
            {value === "topRated" && topRatedItems.map((item) => (
                <Item item={item} key={`${item.name}-${item.id}`} />

            ))}
        </Box>
    </Box>
  )
}

export default ShoppingList
