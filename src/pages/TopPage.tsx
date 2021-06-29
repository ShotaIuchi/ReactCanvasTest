import { Layout } from "antd";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CanvasTopPage from "./canvas/CanvasTopPage";

const TopPage = () => {
  const _padding = 10;
  return (
    <Router>
      <Layout style={{ padding: _padding, backgroundColor: "#ccccff" }}>
        <Link to="/canvas">Canvas</Link>
      </Layout>
      <Layout style={{ padding: _padding, backgroundColor: "#ccffcc" }}>
        <Route exact path="/canvas" component={CanvasTopPage}></Route>
      </Layout>
    </Router>
  );
};

export default TopPage;
