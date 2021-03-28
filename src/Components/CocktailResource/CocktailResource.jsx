import React, { useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage'

const CocktailResource = () => {
  const [loading, setLoading] = useState(true)
  const GoogleDoc = () => (
    <iframe 
      width='95%'
      onLoad={() => {setLoading(false)}}
      src="https://docs.google.com/document/d/e/2PACX-1vRQITUftmWFAjGRMuS783oXxp7Cj3IDmWxJF8eo1ht80Owp_OlWuDDADLSmQw-dCa5w1_7VgLklqEOi/pub?embedded=true"
    ></iframe>
  )
  
  return (
    <main className='section__cocktail-resource'>
        {loading ? <LoadingPage inline={true}/> : null}
        <GoogleDoc/>
    </main>
  )
}
export default CocktailResource