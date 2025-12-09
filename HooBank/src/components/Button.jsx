export const Button = ({styles}) => (
    <button className={`py-4 px-6 bg-blue-gradient relative font-poppins font-medium rounded-xl group/button inline-flex items-center justify-center overflow-hidden text-primary transition-all duration-300 ease-in-out hover:scale-110 
          hover:shadow-[0_0px_20px_rgba(0,246,255,0.5)] border-none ${styles}`}
    >
        <span className="text-[18px]">Get Stared</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
            <div className="relative h-full w-10 bg-white/30"></div>
        </div>
    </button>

)
