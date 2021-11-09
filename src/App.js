import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Messages from './components/Messages'
import { prefetch } from '@layer0/prefetch/window/prefetch'

const App = () => {
  const [mounted, setMounted] = useState('print')
  useEffect(() => {
    setMounted('all')
    // register a listener for SW messages to prefetch images from the PLP API responses
    const { serviceWorker } = navigator
    if (serviceWorker) {
      serviceWorker.addEventListener('message', (event) => {
        if (event.data.action === 'prefetch') {
          prefetch(event.data.url, event.data.as, event.data.options)
        }
      })
    }
  }, [])

  return (
    <>
      <Helmet>
        <link
          media={mounted}
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/messages" component={Messages} />
        <Route path="/about" component={About} />
        <Redirect to="/" /> */}
      </Switch>
    </>
  )
}

export default App
