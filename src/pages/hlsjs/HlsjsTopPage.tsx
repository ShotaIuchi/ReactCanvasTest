import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import HlsjsPage from "./HlsjsPage";

const HlsjsTopPage = () => {
  const match = useRouteMatch();
  return (
    <Router>
      <Layout style={{ padding: 10, backgroundColor: "#ccffff" }}>
        <Route exact path={match.path} component={HlsjsPage}></Route>
      </Layout>
    </Router>
  );
};

export default HlsjsTopPage;
