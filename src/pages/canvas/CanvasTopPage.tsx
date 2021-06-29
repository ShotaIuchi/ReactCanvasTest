import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import CanvasPage from "./CanvasPage";

const CanvasTopPage = () => {
  const match = useRouteMatch();
  return (
    <Router>
      <Layout style={{ padding: 10, backgroundColor: "#ccffff" }}>
        <Route exact path={match.path} component={CanvasPage}></Route>
      </Layout>
    </Router>
  );
};

export default CanvasTopPage;
