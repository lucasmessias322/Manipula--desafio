import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import GobalStyles from "./GlobalStyle/GlobalStyles";

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />


            </Switch>
            < GobalStyles/>
        </BrowserRouter>
    )
}

export default Routes