import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import internalServerError from "../assets/image/internal-server-error.gif";

const Error: FC = () => {
  const navigate = useNavigate();
  return (
    <Container className="full-width" style={{ height: "100vh" }}>
      <Box className="d-flex align-center full-height flex-row flex-around">
        <Box>
          <Typography variant="h2" className="text-extra-bold mb-3">
            Page not found...
          </Typography>
          <Typography variant="body1" className="mb-4">
            Sorry, the page you are looking for doesn't exist or have been
            moved...
          </Typography>
          <Button
            variant="contained"
            className="text-transform-none"
            disableElevation
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </Box>
        <CardMedia
          component="img"
          src={internalServerError}
          alt="Internal Server Error"
          sx={{ width: "30rem" }}
        />
      </Box>
    </Container>
  );
};

export default Error;
