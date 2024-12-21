import * as A from "@components/footer/footer.styles"
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

interface FooterProps{
    itemRef:React.RefObject<HTMLDivElement>
}

const Footer:React.FC<FooterProps> = ({itemRef}) => {

    const currentMode = useSelector((state:RootState)=>state.mode.value);

    return(
        <A.Footer ref={itemRef} height={2} mode={currentMode}>
        </A.Footer>
    );
}

export default Footer;