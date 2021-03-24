import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

const MenuBuilder = React.lazy(() => import('../MenuBuilder/MenuBuilder'))
import CocktailResource from '../CocktailResource/CocktailResource'
import Header from '../Header/Header'
import OriginalCocktails from '../OriginalCocktails/OriginalCocktails'

const MenuBuilderLazy = () => (
  <Suspense fallback={<div>...Loading</div>}>
    <MenuBuilder />
  </Suspense>
)
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={OriginalCocktails}/>
        <Route path='/cocktails/:id' component={OriginalCocktails} />
        <Route path='/menu-builder' component={MenuBuilderLazy} />
        <Route path='/cocktail-resource' component={CocktailResource} />
        <Route component={OriginalCocktails} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter