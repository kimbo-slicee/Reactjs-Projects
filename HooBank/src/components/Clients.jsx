import styles from "../style.js";
import {clients} from "../constants/index.js";
import {motion} from "framer-motion";

export const Clients = () => (
    <section className={`${styles.flexCenter}flex overflow-hidden relative my-4 min-h-[20vh]`}>
        <motion.div className={`${styles.flexCenter} flex gap-8 whitespace-nowrap`}
                    initial={{y:-10,x: "100%"}}
                    animate={{y:-10,x: "-100%"}}
                        transition={{
                        repeat: Infinity,
                        duration: 10, // Adjust the duration for animation speed
                        ease: "linear",
                    }}
        >
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain"/>
                </div>
            ))}
        </motion.div>
        <motion.div className={`${styles.flexCenter} flex gap-8 whitespace-nowrap`}
                    initial={{y:50, x: "-100%"}}
                    animate={{y:50 ,x: "100%"}}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
        >
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain"/>
                </div>
            ))}
        </motion.div>
    </section>
)