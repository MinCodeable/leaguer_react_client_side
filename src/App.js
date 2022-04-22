import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./layout/layout";
import Aspects from "./pages/Aspects";
import ChampionDetail from "./pages/ChampionDetail";
import Champions from "./pages/Champions";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Champions/>}/>
          <Route path="champions" element={<Champions/>} > 
            <Route path=":id" element={<ChampionDetail/>}/>
          </Route>
          <Route path="aspects" element={<Aspects/>}/>
          <Route path="*" elemetn={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
