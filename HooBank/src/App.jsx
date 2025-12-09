import style from "./style.js";
import {Billing,Business,CardDeal, Clients,
    CTA,Footer, Hero, NavBar, Stats, Testimonials} from "./components"
import styles from "./style.js";
const App=()=>(
    <div className="bg-primary w-full overflow-hidden ">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`${style.boxWidth}`}>
                <NavBar/>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>
        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                <Stats/>
                <Business/>
                <Billing/>
                <CardDeal/>
                <Testimonials/>
                <Clients/>
                <CTA/>
                <Footer/>
            </div>
        </div>
    </div>
)
export default App;