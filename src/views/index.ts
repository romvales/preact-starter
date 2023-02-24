
import { thank_you_route } from '@/views/_status/200s'
import { not_found_route } from '@/views/_status/404'
import { offline_route, maintenance_route } from '@/views/_status/503'
import { internal_server_error_route } from '@/views/_status/500'

import { faqs_route } from '@/views/@company/faqs'
import { landing_route } from '@/views/@company/landing'
import { careers_route } from '@/views/@company/careers/index'
import { contacts_route } from '@/views/@company/contacts'
import { pricings_route } from '@/views/@company/pricings'
import { more_about_us_route } from '@/views/@company/more-about-us'
import { professionals_route } from '@/views/@company/professionals'
import { how_it_works_route } from '@/views/@company/how-it-works'
import { lang_courses_route } from '@/views/@company/lang-courses'
import { login_route } from '@/views/login'

import { services_coworking_space_route } from '@/views/@company/services/coworking-space'
import { services_visa_counselling_route } from '@/views/@company/services/visa-counselling'
import { services_workshops_route } from '@/views/@company/services/workshops'

const ___globalRoutes: Routes = [
    // Login pages
    { path: '/login', component: login_route },
    
    // Status pages
    { name: 'not-found', path: '/error/page-not-found', component: not_found_route, statusCode: 404 },
    { name: 'off', path: '/error/offline', component: offline_route, statusCode: 503 },
    { name: 'maintenance', path: '/error/maintenance', component: maintenance_route, statusCode: 503 },
    { name: 'internal-server-error', path: '/error/internal-server-failure', component: internal_server_error_route, statusCode: 500 },
]

const companyRoutes: Routes = [

    // Static pages
    { path: '/', component: landing_route },
    { path: '/careers', component: careers_route },
    { path: '/contacts', component: contacts_route },
    { path: '/faqs', component: faqs_route },
    { path: '/how-it-works', component: how_it_works_route },
    { path: '/more-about-us', component: more_about_us_route },
    { path: '/professionals', component: professionals_route },
    { path: '/lang-courses/:lang', component: lang_courses_route },
    { path: '/shared-workspace', component: services_coworking_space_route },
    { path: '/visa-counselling', component: services_visa_counselling_route },
    { path: '/workshops/:workshop', component: services_workshops_route },

    // Pricing pages
    { path: '/pricings', component: pricings_route },
    { path: '/lang-courses/:lang/pricings', component: pricings_route },
    { path: '/visa-counselling/pricings', component: pricings_route },
    { path: '/shared-workspace/pricings', component: pricings_route },

    // Greetings pages
    { name: 'thank-you', path: '/greetings/thank-you/:page', component: thank_you_route, statusCode: 202 },

    ...___globalRoutes,
]

const blogRoutes: Routes = [
    
    ...___globalRoutes,
]

const policiesRoutes: Routes = [

    ...___globalRoutes,
]

const monolithRoutes: Routes = [
    
    ...___globalRoutes,
]

export default companyRoutes