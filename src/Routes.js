import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import DetailsAlbum from "./pages/DetailsAlbum";

import GobalStyles from "./GlobalStyle/GlobalStyles";

 const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={DetailsAlbum} />


            </Switch>
            < GobalStyles/>
        </BrowserRouter>
    )
}

export default Routes