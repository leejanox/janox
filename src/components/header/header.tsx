import { toggle } from "@redux/modeSlice";
import { useDispatch, useSelector } from "react-redux";
import {ModeChange} from "@components/button/button.styles"
import { CiDark } from "react-icons/ci";
import * as A from "@components/header/header.styles"
import { Link } from "react-router-dom";
import { RootState } from "@redux/store";
import { useEffect } from "react";

interface HeaderProps {
    itemRef:React.RefObject<HTMLDivElement>
}

const Header:React.FC<HeaderProps> = ({itemRef}) =>{

    const currentMode = useSelector((state:RootState)=>state.mode.value); //true : light , false : dark
    const dispatch = useDispatch(); 

    useEffect(()=>{
        console.log(currentMode)
    },[])

    const Menu= [`Home`,`Gallery`,`Study`,`About`]

    return(
        <A.header ref={itemRef}>
            <h4>leejanox</h4>
            <A.navMenu>
                {Menu.map((value,index)=>(
                    <Link key={index} to={`/${value}`} state={value}>
                        {value}
                    </Link>
                ))}
                <ModeChange 
                    mode={currentMode}
                    onClick={()=>dispatch(toggle())}
                >
                    <CiDark/>
                </ModeChange>
            </A.navMenu>
        </A.header>
    );
}

export default Header;