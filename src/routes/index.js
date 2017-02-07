import CoreLayout from '../layouts/CoreLayout'
import Home from '../components/Home'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    // CounterRoute(store)
  ]
})

export default createRoutes
