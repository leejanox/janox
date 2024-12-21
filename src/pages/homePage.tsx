import MainLayout from "@layouts/mianLayout";
import { RotateButton } from "@components/button/button.styles";
import { TbRotate360 } from "react-icons/tb";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";


import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import MyBox from "@components/material/myBox"
import MyGround from "@components/ground/myGround";
import MySphere from "@components/material/mySphere";
import MyTree from "@components/material/myTree";
import MyCharactor from "@components/charactor/mycharactor";

const HomePage = () =>{

    const currentMode = useSelector((state:RootState)=>state.mode.value);
    const myBoxRef = useRef<THREE.Mesh>(null);
    const myGroundRef = useRef<THREE.Mesh>(null);

    //카메라 상태 변경 참조 -> OrbitControlsChangeEvent
    //위치, 회전 , zoom 상태 추적 가능 -> 이거 추적해서 씬 내 다른 객체 위치나 상태 변경할때 씀
    //ex: 카메라 시점에 따라 특정 객체를 강조하거나, 카메라 위치를 기반으로 다른 물체 위치 계산
    //카메라 상태를 UI로 표현 가능 회전 각도를 실시간으로 UI에 표시 등

    const handleRotationBox = () => {
        if(myBoxRef.current){
            myBoxRef.current.rotation.y += 0.5;
        }
    };

    //캐릭터 통제 ㅇㅇ
    const myCharactorRef = useRef<THREE.Mesh>(null);

    //<PerspectiveCamera makeDefault position={[0, 5, 4]} fov={1.5}/>
    //axes ->  주황: x축 , 초록: y축 , 파랑: z축
    return(
        <MainLayout>
            <Canvas style={{width:`100vw`,height:`100vh`}} tabIndex={0}>
                <directionalLight position={[10,10,1]}/>

                <axesHelper scale={[5,5,5]} position={[0,0.2,0]}/>
                <OrbitControls 
                    enableRotate={true} 
                    enablePan={true} 
                    enableDamping={true} 
                    dampingFactor={0.25} 
                    enableZoom={true}
                />

                <MyBox itemRef={myBoxRef}/>
                <MySphere />
                <MyGround itemRef={myGroundRef}/>
                <MyTree/>
                <MyCharactor itemRef={myCharactorRef}/>
            </Canvas>
            <RotateButton mode={currentMode} onClick={handleRotationBox}>
                <TbRotate360/>
            </RotateButton>
        </MainLayout>
    );
}

export default HomePage;