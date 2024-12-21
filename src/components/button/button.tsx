export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    onClick?:()=>void;
    text?:string;
}

const Button:React.FC<ButtonProps> = ({children,onClick,text,...rest}) =>{
    return(
        <button
            onClick={onClick}
            {...rest}
        >
            {children}
            {text}
        </button>
    )
}

export default Button;