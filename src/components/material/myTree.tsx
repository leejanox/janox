import { useRef } from "react";
import * as THREE from "three"

interface MyTreeProps{
    itemRef?:React.MutableRefObject<THREE.Mesh|null>
}

const MyTree:React.FC<MyTreeProps>=({itemRef})=>{

    const woodRef = useRef<THREE.Mesh|null>(null);
    const leafRef = useRef<THREE.Mesh|null>(null);

    return(
        <>
            <mesh
                ref={el=>{
                    woodRef.current = el;
                    if(itemRef){
                        itemRef.current =el;
                    }
                }}
                position={[0,0.7,0]}
                scale={[0.2,0.7,0.2]}
            >
                <cylinderGeometry args={[1,1,2,8]}/>
                <meshStandardMaterial color={'#FFAEC9'}/>
                <mesh 
                    ref={el=>{
                        leafRef.current=el;
                    }}
                    scale={[0.2,0.5,0.2]}
                    position={[0,1.2,0]}
                >
                    <coneGeometry args={[14,2,24,1]}/>
                    <meshStandardMaterial color={'green'}/>
                </mesh>
            </mesh>
        </>
    );
}

export default MyTree;