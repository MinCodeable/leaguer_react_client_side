import { BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import ModalPopUpAspect from "./components/modalPopUp/ModalPopUpAspect";
import Layout from "./layout/layout";
import Aspects from "./pages/Aspects";
import ChampionDetail from "./pages/ChampionDetail";
import Champions from "./pages/Champions";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/" />} />
          <Route path="champions" > 
            <Route index element={<Champions/>}/>
            <Route path=":id" element={<ChampionDetail/>}/>
          </Route>
          <Route path="aspects" element={<Aspects/>}/>
          <Route path="modal" element={<ModalPopUpAspect/>}/>
          <Route path="*" elemetn={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
