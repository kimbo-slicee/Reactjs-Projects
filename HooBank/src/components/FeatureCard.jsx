import styles, {layout} from "../style.js";
import {features} from "../constants/index.js";
const FeatureCard = () => (
        <div className={`${layout.sectionImg} flex-col`}>
            {
                features.map((feature,index)=>(
                    <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index===features.length}?'mb-6':'mb-0' feature-card`}>
                        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
                            <img src={feature.icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
                        </div>
                        <div className={`flex-1 flex flex-col ml-3`}>
                            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{feature.title}</h4>
                            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[23px] mb-1">{feature.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
);

export default FeatureCard;