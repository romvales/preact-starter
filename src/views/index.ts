
import { thank_you_route } from '@/views/_status/200s'
import { not_found_route } from '@/views/_status/404'
import { offline_route, maintenance_route } from '@/views/_status/503'
import { internal_server_error_route } from '@/views/_status/500'

import { faq_route } from '@/views/@company/faq'
import { landing_route } from '@/views/@company/landing'
import { careers_route } from '@/views/@company/careers/index'
import { contacts_route } from '@/views/@company/contacts'
import { more_about_us_route } from '@/views/@company/more-about-us'
import { professionals_route } from '@/views/@company/professionals'
import { how_it_works_route } from '@/views/@company/how-it-works'
import { lang_courses_route } from '@/views/@company/lang-courses'
import { login_route } from '@/views/login'

import { services_coworking_space_route } from '@/views/@company/services/coworking-space'
import { services_visa_counselling_route } from '@/views/@company/services/visa-counselling'
import { services_workshops_route } from '@/views/@company/services/workshops'

import { workshop_pricing_route } from '@/views/@company/services/workshops/_workshop/pricing'
import { lang_courses_pricing_route } from '@/views/@company/lang-courses/_lang/pricing'
import { coworking_space_pricing_route } from '@/views/@company/services/coworking-space/pricing'
import { visa_counselling_pricing_route } from '@/views/@company/services/visa-counselling/pricing'

/**
 * __globalRoutes
 * 
 * This route group can be used to extend an existing route groups. This group contains
 * route that displays a kind of pretty message to the user.
 */
const ___globalRoutes: Routes = [
    // Login pages
    { path: '/login', component: login_route },
    
    // Status pages
    { name: 'not-found', path: '/error/page-not-found', component: not_found_route, statusCode: 404 },
    { name: 'off', path: '/error/offline', component: offline_route, statusCode: 503 },
    { name: 'maintenance', path: '/error/maintenance', component: maintenance_route, statusCode: 503 },
    { name: 'internal-server-error', path: '/error/internal-server-failure', component: internal_server_error_route, statusCode: 500 },

    { name: 'thank-you', path: '/message/thank-you', component: thank_you_route, statusCode: 202 },
]

/**
 * companyRoutes
 */
const companyRoutes: Routes = [

    // Static pages
    { path: '/', component: landing_route },
    { path: '/careers', component: careers_route },
    { path: '/contacts', component: contacts_route },
    { path: '/how-it-works', component: how_it_works_route },
    { path: '/more-about-us', component: more_about_us_route },
    { path: '/professionals', component: professionals_route },
    { path: '/lang-courses/:lang', component: lang_courses_route },
    { path: '/shared-workspace', component: services_coworking_space_route },
    { path: '/visa', component: services_visa_counselling_route },
    { path: '/workshops/:workshop', component: services_workshops_route },

    // Pricing pages
    { path: '/workshops/:workshop/pricing', component: workshop_pricing_route },
    { path: '/lang-courses/:lang/pricing', component: lang_courses_pricing_route },
    { path: '/visa/pricing', component: coworking_space_pricing_route },
    { path: '/shared-workspace/pricing', component: visa_counselling_pricing_route },

    ...___globalRoutes,
]

/**
 * blogRoutes
 */
const blogRoutes: Routes = [
    
    ...___globalRoutes,
]

/**
 * policiesRoutes
 */
const policiesRoutes: Routes = [
    { path: '/faq', component: faq_route },

    ...___globalRoutes,
]

/**
 * monolithRoutes
 */
const monolithRoutes: Routes = [
    
    ...___globalRoutes,
]

// export const routes = { companyRoutes, blogRoutes, policiesRoutes, monolithRoutes }
export default companyRoutes