import { useRef } from "react";
import * as THREE from "three";

interface MyGrounProps{
    itemRef?:React.MutableRefObject<THREE.Mesh|null>;
}

//수평 기준 -> x축 : 왼쪽 '-' 오른쪽 '+', y축: 위 '+' 아래 '-', z축: 앞 '+' 뒤 '-'
//회전방향 ->  반시계 : '+' ,시계 '-' -> +45도는 반시계 방향으로 45도 
//회전할때는 각도를 라디안을 써야해서 일반 각도 = Math.PI * '각도'/180 해줘야 함

const MyGround:React.FC<MyGrounProps> = ({itemRef}) =>{

    const groundRef = useRef<THREE.Mesh|null>(null);

    return(
        <>
            <mesh
                ref={el=>{
                    groundRef.current = el;
                    if(itemRef?.current){
                        itemRef.current = el;
                    }
                }}
                position={[0,0,0]}
                rotation={[-90*Math.PI/180,0,0]}
            >
                <planeGeometry 
                    args={[40,40,1,1]}
                />
                <meshBasicMaterial color={'#696969'} wireframe={false}/>
            </mesh>
        </>
    );
}

export default MyGround;