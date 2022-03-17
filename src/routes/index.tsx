import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import MessageInput from "../components/message-input/MessageInput";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <main className="drawer-content-margin">
        <Box className="container">
          <MessageInput />
        </Box>
      </main>
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />


        <Route path="*" element={<NoMatch />} />
      </Route> */}
    </BrowserRouter>
  );
}

export default Routes;
