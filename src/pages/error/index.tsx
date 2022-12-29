import { FC } from "react";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import internalServerError from "../../assets/image/internal-server-error.gif";
import { useNavigate } from "react-router-dom";

const ErrorPage: FC = () => {
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
        <Box style={{ width: "30rem" }}>
          <CardMedia
            component="img"
            src={internalServerError}
            alt="Internal Server Error"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;
