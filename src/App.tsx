import React, { FC, useContext } from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import './custom.scss'

import Homepage from './page/Homepage';
import About from './page/About';
import Page404 from './page/404';
import { LangContext } from './context/lang';


const App: FC = () => {
    const { dispatch: { translate }} = useContext(LangContext);
    

return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Homepage translate={translate} />
                </Route>
                <Route path='/about' exact>
                    <About translate={translate }/>
                </Route>
                <Route path='*' exact>
                    <Page404 translate={translate} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
