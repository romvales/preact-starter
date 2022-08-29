import { LPageView } from './LPageView'
import { RootView } from './RootView'

const routes: Routes = [
  { path: '/', component: RootView },
  { path: '/home', component: LPageView },
]

export default routes
