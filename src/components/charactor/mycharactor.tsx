import { useState , useRef } from "react";
//import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface MyCharactorProps{
    itemRef:React.MutableRefObject<THREE.Mesh|null>
}

const MyCharactor:React.FC<MyCharactorProps> = ({itemRef}) =>{

    //redux => state 선언한거 여기다 frame훅으로 이동 로직짜기 ㅅㅄㅄㅄㅄㅄㅄㅅㅄ 이것도 안되면갸 ㅇ때려칠
    const characterRef = useRef<THREE.Mesh|null>(null);

    return(
        <>
            <mesh
                ref={
                    el=>{
                        characterRef.current =el;
                        if(itemRef?.current){
                            itemRef.current =el;
                        }
                    }
                }
                position={[0,0.2,5]}
                scale={[0.2,0.2,0.2]}
            >
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={'black'}/>
                <mesh position={[0,1,0]} scale={[1,1,1]}>
                    <sphereGeometry args={[0.5,24,16]}/>
                </mesh>
                <axesHelper scale={[1,1,1]}/>
            </mesh>
        </>
    );
}

export default MyCharactor;