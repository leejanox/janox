import * as THREE from "three";
import { useRef } from "react";
//import { useFrame } from "@react-three/fiber";

interface MyBoxProps{
    itemRef:React.MutableRefObject<THREE.Mesh|null>
}

const MyBox:React.FC<MyBoxProps> = ({itemRef}) => {

    const boxRef1 = useRef<THREE.Mesh|null>(null)

    /*
    //프레임마다 자동회전
    useFrame((_,delta)=>{
        if(itemRef.current){
            itemRef.current.rotation.y += delta;
        }
    })
    */

    return(
        <>
            <mesh
                ref={el =>{
                    boxRef1.current =el;
                    if(itemRef){
                        itemRef.current = el;
                    }
                }}
                position={[-5,1,0]}
                rotation={[0 , 45 * Math.PI / 180 ,0]}
            >
                <boxGeometry args={[0.2,2,0.2]}/>
                <meshStandardMaterial color={"teal"} wireframe={false}/>
                <axesHelper scale={[2,2,2]}/>
            </mesh>
        </>
    );
}
export default MyBox;