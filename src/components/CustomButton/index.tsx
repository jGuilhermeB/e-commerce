
type CustomButttonProps = {
    variant?: "primary" | "outline"| "ghost";
    type?: "button" | "submit" | "reset";
    className?: string,
    children: React.ReactNode
    width?: string;
}

export default function CustomButton({
    variant = "primary",
    type = "button",
    className,
    children,
    width = "w-full"
}: CustomButttonProps) {
    function getStyles() {
        switch (variant) {
            case "primary":
                return `bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] hover:shadow-xl
                 hover:shadow-[#4896ff26] transition-all duration-300 ease-in-out
                  cursor-pointer text-[#1f1f1f]`
            case "outline":
                return `border border-[#2c313a]/50 rounded-xl
                        bg-[#111418] h-[45px] text-[#F1F2F3] flex items-center
                        justify-center gap-4 transition-all duration-300 ease-in-out[
                        cursor-pointer`
            case "ghost":
                return `bg-transparent text-[#fif22f3] flex items-center justify-center`
            default:
                return ""
        }
    }
    return (
        <button
        type={type}
        className={`${width} rounded-lg text-lg font-medium ${getStyles()} ${className}`}
        >
         {children}
        </button>
    )
}