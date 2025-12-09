import styles, {layout} from "../style.js";
import {Button} from "./Button.jsx";
import FeatureCard from "./FeatureCard.jsx";

export const Business = () => {
    return (
        <section className={`${layout.section}`}>
        <div id="features"  className={`${layout.sectionInfo} `}>
            <h2 className={`${styles.heading2}`}>
                You do the business,<br className="sm:block hidden"/>
                we’ll handle the money.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt- 5`}>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <Button styles="mt-10"/>
        </div>
            {/*Feature Section */}
            <FeatureCard/>
        </section>
    )
}