import {quotes} from "../assets/index.js";
import {motion} from "framer-motion";
export const FeedbackCard = ({name,title,content,img}) => {
    return (
        <motion.div
            className="flex justify-between flex-col
         px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0
          feedback-card hover:scale-110 transition-all duration-500 cursor-pointer shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
            <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
            <p className="font-poppins font-normal text-[18px]
             leading-[32px] text-white my-10">{content}</p>
            <div className="flex flex-row items-center" >
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[18px]
                    leading-[20px] text-white ">{name}</h4>
                    <p className="font-poppins font-normal text-[16px]
                    leading-[20px] text-dimWhite">{title}</p>
                </div>
            </div>

        </motion.div>
    )
}