import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../images/4127298.jpg";
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
    // backgroundImage: `${img}`,
    backgroundImage: `url(${img})`,
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    // overflowX: "hidden",
    // overflowY:"",
    // Add transition effect for the blur change
  },
  contentContainer: {
    position: "relative", // Set position to relative for centering
    textAlign: "center", // Center the text horizontally
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
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Set the grid to have 2 columns
    gap: theme.spacing(1), // Add a gap between the cards
    justifyContent: "center", // Center the cards horizontally
  },

  blurred: {
    filter: "blur(5px)", // Set initial blur to 0
    transition: "filter 0.3s ease",
  },
  card: {
    backgroundColor: "white",
    height: "100px",
    display: "flex",
    width: "90%",
    marginBottom: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(1, 1, 1, 1)", // Add shadow to the card
    borderRadius: theme.spacing(100), // Add rounded corners to the card
    cursor: "pointer", // Add cursor pointer for click interaction
    transition: "transform 0.3s ease", // Add transition effect for popping out
  },
  cardMedia: {
    height: "100%",
    width: "auto",
    objectFit: "contain",
  },
  poppedOutContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  poppedOutCard: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(1, 1, 1, 1)",
    // Add any other desired styles for the popped-out card
  },
}));

const GranteePortal = ({ getNFTs, get_ids_of_owner }) => {
  const classes = useStyles();
  const [isCardClicked, setCardClicked] = useState(false); // State variable to track whether a card is clicked
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // State variable to store the index of the selected card

  const handleCardClick = (index) => {
    setCardClicked(true);
    setSelectedCardIndex(index);
  };

  const handleCloseCard = () => {
    setCardClicked(false);
    setSelectedCardIndex(-1);
  };

  const nftData = [

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

  ];

  return (
    <div>
      <Box className={`${classes.root}`} >
        <Container maxWidth="md">
          <Box className={classes.contentContainer}>
            <Typography variant="h4" className={classes.heading}>
              NFT Data
            </Typography>
          </Box>
          <Box className={`${classes.cardContainer} ${isCardClicked ? classes.blurred : ""}`}>
            {nftData.map((nft, index) => (
              <Card
                key={index}
                className={classes.card}
                onClick={() => handleCardClick(index)}
              >
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
          {selectedCardIndex !== -1 && (
            <Box className={classes.poppedOutContainer}>
              <Card className={classes.poppedOutCard} onClick={handleCloseCard}>
                <CardContent>
                  <Typography variant="h6">
                    {nftData[selectedCardIndex].name}
                  </Typography>
                  <Typography variant="body2">
                    {nftData[selectedCardIndex].description}
                  </Typography>
                  {nftData[selectedCardIndex].attributes.map((attribute, index) => (
                    <Typography key={index} variant="body2">
                      {attribute.trait_type}: {attribute.value}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default GranteePortal;
