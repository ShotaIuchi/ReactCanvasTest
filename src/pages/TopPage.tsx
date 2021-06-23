import { Layout } from "antd";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SubTopPage from "./sub/SubTopPage";

const TopPage = () => {
  const _padding = 10;
  return (
    <Router>
      <Layout style={{ padding: _padding, backgroundColor: "#ccccff" }}>
        <Link to="/sub">SubTopPage</Link>
      </Layout>
      <Layout style={{ padding: _padding, backgroundColor: "#ccffcc" }}>
        <Route exact path="/sub" component={SubTopPage}></Route>
      </Layout>
    </Router>
  );
};

export default TopPage;
