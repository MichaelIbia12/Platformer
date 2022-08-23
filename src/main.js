import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/font.css'
import './assets/responsive.css'
import './assets/animation.css'
import './assets/icons/css/all.css'
import './assets/icons/css/brands.css'
import './assets/icons/css/fontawesome.css'
import './assets/icons/css/regular.css'
import './assets/icons/css/solid.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */


import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */


library.add(faFacebook, faGoogle, faTwitter, faInstagram)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
