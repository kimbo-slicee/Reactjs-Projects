import styles from "../style.js";
import {arrowUp} from "../assets/index.js";

export const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer
        transform hover:scale-110 transition duration-300 group hover:shadow-[0_0px_20px_rgba(0,246,255,0.5)]
        `}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img
                        src={arrowUp}
                        alt="arrow"
                        className="w-[23px] h-[23px] object-contain
                             group-hover:translate-x-2 group-hover:-translate-y-2
                             transition-transform duration-300 ease-in-out"
                    />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient">Started</span>
                </p>
            </div>

        </div>
    )
}

