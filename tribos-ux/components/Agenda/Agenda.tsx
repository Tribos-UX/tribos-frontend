// React
import React from "react";

// Icons
import { default as IconButton } from "@mui/material/IconButton";
import {
  AgendaIcon,
  ChevronRightOutlined,
  PinIcon,
  sinalMais,
} from "../common/Icons";

// Better Carousel
import Carousel from "better-react-carousel";

// Material Design
import { Avatar, ListItemText } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

// Styles
import styles from "./Agenda.module.scss";

// Components
import DaysOfweek from "./Days/DaysOfweek";

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Agenda({ dayOfweek }) {
  const [dense, setDense] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <span className={styles.agenda_icon}>{<AgendaIcon />}</span>
        Sua agenda
        <IconButton aria-label="adicionar">{sinalMais}</IconButton>
      </div>
      <div>
        <Carousel
          rows={1}
          cols={6}
          containerStyle={{
            background: "#FBFBFC",
            "box-shadow": "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
            "border-radius": "1rem",
          }}
        >
          <Carousel.Item>
            <DaysOfweek day={"seg"} number={1} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"seg"} number={1} />
          </Carousel.Item>
        </Carousel>
      </div>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {dayOfweek}
        </Typography>

        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
          }}
          dense={dense}
        >
          {generate(
            <ListItem
              sx={{
                background: "#FBFBFC",
                boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1)",
                borderRadius: "0.5rem",
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="mostrar dia da semana">
                  <ChevronRightOutlined />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    background: "#f2f2f2",
                    borderRadius: 1,
                  }}
                >
                  <PinIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </Grid>
    </div>
  );
}
