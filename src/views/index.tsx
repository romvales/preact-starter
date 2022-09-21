import { NotFound } from './404'
import { About } from './About'
import { Catalog } from './Catalog'
import { Home } from './Home'
import { Info } from './Info'

const routes: Routes = [
  { path: '/', component: Home },
  { path: '/breeds', component: Catalog },
  { path: '/breeds/:id', component: Info },
  { path: '/about', component: About },
  { path: '/404', component: NotFound, default: true },
]

export default routes
export { Catalog, Home, Info, About, NotFound }
