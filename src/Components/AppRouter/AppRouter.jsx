import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

const CocktailResource = React.lazy(() => import('../CocktailResource/CocktailResource'))
const MenuBuilder = React.lazy(() => import('../MenuBuilder/MenuBuilder'))
import LoadingPage from '../LoadingPage/LoadingPage'
import Header from '../Header/Header'
import OriginalCocktails from '../OriginalCocktails/OriginalCocktails'

const MenuBuilderLazy = () => (
  <Suspense fallback={<LoadingPage />}>
    <MenuBuilder />
  </Suspense>
)

const CocktailResourceLazy = () => (
  <Suspense fallback={<LoadingPage />}>
    <CocktailResource />
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
        <Route path='/cocktail-resource' component={CocktailResourceLazy} />
        <Route component={OriginalCocktails} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter