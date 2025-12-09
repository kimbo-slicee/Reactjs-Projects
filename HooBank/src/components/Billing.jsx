import styles, {layout} from "../style.js";
import {apple, bill, google} from "../assets/index.js";

export const Billing = () => (
    <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        {/*Gradient Span */}
        <span className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></span>
        <span className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></span>
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden"/> billing & invoicing.
    </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt6">
            <img src={apple} alt="appel Stor" className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"/>
            <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
    </div>
    </section>
)