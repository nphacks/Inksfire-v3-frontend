import * as THREE from "three";
import { geometryMap, type ObjectGroupProps } from "../Models/objects";
import { Object as ReusableObject } from "../../../ThreeLibrary/ObjectMaking/Object";

export const ObjectGroup = ({ objects, position, rotation, scale }: ObjectGroupProps) => {
    return (
        <group
            position={position || new THREE.Vector3(0, 0, 0)}
            rotation={rotation || new THREE.Euler(0, 0, 0)}
            scale={scale || new THREE.Vector3(1, 1, 1)}
        >
            {objects.map((obj) => {
                const GeometryConstructor = geometryMap[obj.geometry];
                if (!GeometryConstructor) return null;

                const geometryInstance = new GeometryConstructor(...Object.values(obj.args));

                // Convert meshProps to proper THREE types
                const meshProps = {
                    position: obj.meshProps.position instanceof THREE.Vector3
                        ? obj.meshProps.position
                        : new THREE.Vector3(obj.meshProps.position.x, obj.meshProps.position.y, obj.meshProps.position.z),
                    rotation: new THREE.Euler(
                        obj.meshProps.rotation.x,
                        obj.meshProps.rotation.y,
                        obj.meshProps.rotation.z
                    ),
                    scale: obj.meshProps.scale instanceof THREE.Vector3
                        ? obj.meshProps.scale
                        : new THREE.Vector3(obj.meshProps.scale.x, obj.meshProps.scale.y, obj.meshProps.scale.z),
                    castShadow: obj.meshProps.castShadow,
                    receiveShadow: obj.meshProps.receiveShadow,
                    visible: obj.meshProps.visible,
                };

                const materialProps = {
                    ...obj.materialProps,
                    side: obj.materialProps.side as THREE.Side, // cast number to THREE.Side
                    color: new THREE.Color(obj.materialProps.color), // convert number to THREE.Color
                    emissive: new THREE.Color(obj.materialProps.emissive),
                };


                return (
                    <ReusableObject
                        key={obj.id}
                        geometry={geometryInstance}
                        {...meshProps}
                        {...materialProps}
                    />
                );
            })}
        </group>
    );
};