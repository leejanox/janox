import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import * as ML from "@layouts/mainLayout.styles"
import { useEffect, useRef } from "react";

interface MainLayoutProps {
    children:React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) =>{

    const headerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const updateLayout=()=>{        
            if(headerRef.current && footerRef.current && contentRef.current){
            //상단 위치 고정하면 캔바스는 full인데 밑으로 내려가서 짤림 -> 일단 제외
            //contentRef.current.style.top = `${headerRef.current.offsetHeight}px`
            contentRef.current.style.minHeight = 
                `${
                    window.innerHeight - headerRef.current.offsetHeight - footerRef.current.offsetHeight
                }px`
        }}
        updateLayout();
        window.addEventListener(`resize`,updateLayout)
        return () => window.removeEventListener(`resize`,updateLayout)
    },[])

    return(
        <ML.Wrap>

            <Header itemRef={headerRef}/>

            <ML.Content ref={contentRef}>
                {children}
            </ML.Content>
            
            <Footer itemRef={footerRef}/>

        </ML.Wrap>
    );
}
export default MainLayout;