import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { cardContext } from "./CardContext";
import CardComponent from "./CardComponent";

const CardComponents = () => {
  const cardCtx = useContext(cardContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  return isLoading ? (
    <p>Loading</p>
  ) : cardCtx?.cards?.length ? (
    <Grid
      container
      gap={4}
      sx={{ justifyContent: "flex-start", minHeight: "85vh" }}
    >
      {cardCtx?.cards?.map((card) => (
        <CardComponent card={card} key={card.id}></CardComponent>
      ))}
    </Grid>
  ) : (
    <p>No Card Found</p>
  );
};

export default CardComponents;
