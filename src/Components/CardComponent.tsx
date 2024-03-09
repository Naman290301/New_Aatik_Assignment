import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ICard } from "./CardContext";
import image from "../assets/wepik-export-20240305093017T1kU.jpeg";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ card }: { card: ICard }) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} sx={{ width: "300px" }}>
      <div onClick={() => navigate(`/product/${card.id}`)}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" image={image} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: "#3DAC78",
                  textShadow: "1px 1px lightgreen",
                }}
              >
                {card.status}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
}
