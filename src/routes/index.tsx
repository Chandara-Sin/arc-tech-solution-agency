import { BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
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
