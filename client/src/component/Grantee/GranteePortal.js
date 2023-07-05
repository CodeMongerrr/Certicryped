import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
    fontFamily: "Arial",
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "grey",
    height: "100px",
    display: "flex",
    width: "90%",
    marginBottom: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(1, 1, 1, 1)", // Add shadow to the card

  },
  cardMedia: {
    height: "100%",
    width: "auto",
    objectFit: "contain",
  },
}));

const GranteePortal = ({ getNFTs, get_ids_of_owner }) => {
  const classes = useStyles();
  const [nftData] = useState([
    
    {
      name: "Aditya Roshan Joshi",
      description: "Blockchain Developer",
      image:
        "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
      attributes: [
        {
          trait_type: "Program",
          value: "Blockchain",
        },
      ],
    },
    {
      name: "Emily Thompson",
      description: "Frontend Developer",
      image: "https://example.com/emily.png",
      attributes: [
        {
          trait_type: "Program",
          value: "JavaScript",
        },
      ],
    },
    {
      name: "Michael Rodriguez",
      description: "Data Scientist",
      image: "https://example.com/michael.png",
      attributes: [
        {
          trait_type: "Program",
          value: "Python",
        },
      ],
    },
    {
      name: "Sophia Chen",
      description: "UX Designer",
      image: "https://example.com/sophia.png",
      attributes: [
        {
          trait_type: "Program",
          value: "Figma",
        },
      ],
    },
    {
      name: "Robert Johnson",
      description: "Backend Developer",
      image: "https://example.com/robert.png",
      attributes: [
        {
          trait_type: "Program",
          value: "Java",
        },
      ],
    },
  
  ]);

  console.log(nftData);
  return (
    <div>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Typography variant="h4" className={classes.heading}>
            NFT Data
          </Typography>
          <Box className={classes.cardContainer}>
            {nftData.map((nft, index) => (
              <Card key={index} className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  src={nft.image}
                />
                <CardContent>
                  <Typography variant="h6">{nft.name}</Typography>
                  <Typography variant="body2">{nft.description}</Typography>
                  {nft.attributes.map((attribute, index) => (
                    <Typography key={index} variant="body2">
                      {attribute.trait_type}: {attribute.value}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default GranteePortal;
