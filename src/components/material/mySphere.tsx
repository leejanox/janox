import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"

//sphereGeometry JSX 코드 args속성순서: radius,widthSeg,heightSeg
const MySphere = ()=>{

    const SphereRef = useRef<THREE.Mesh|null>(null);

    
    useFrame((_,delta)=>{
        if(SphereRef.current){
            //SphereRef.current.rotation.y += delta;
            //SphereRef.current.rotation.x += delta;
            SphereRef.current.rotation.z += delta;
        }
    })
    

    return(
        <>
            <mesh
                ref={SphereRef}
                position={[6,6,-3]}
                rotation={[-45*Math.PI/180,0,0]}
            >
                <sphereGeometry 
                    args={[1,32,16]} 
                />
                <meshBasicMaterial 
                    color={'red'}
                    wireframe={true}
                />
                <axesHelper scale={[2,2,2]}/>
            </mesh>
        </>
    );
}

export default MySphere;