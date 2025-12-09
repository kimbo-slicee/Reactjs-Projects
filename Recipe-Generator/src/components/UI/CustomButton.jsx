export function CustomButton({type, onClick, children, className, disabled,icon,...props}) {
    return (
        <button
        type={type || "button"}
        onClick={onClick}
        className={` flex items-center justify-center rounded-md font-medium transition-colors duration-300 cursor-pointer ${className || ""}`}
        disabled={disabled}
        {...props}
        >
            <span>{children}</span>
            {icon && <span className="ml-2 h-5 w-5">{icon}</span>}
        </button>
    )
}