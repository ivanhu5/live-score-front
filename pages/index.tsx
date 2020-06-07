import { NextPage } from "next";
import Home from "./Home";

const App: NextPage<{ userAgent: string }> = () => <Home />;

export default App;
