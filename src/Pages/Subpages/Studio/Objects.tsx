import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Object as ReusableObject } from "../../ThreeLibrary/ObjectMaking/Object";
import * as THREE from "three"
import { useState } from 'react';
import "./Styles/Objects.css"
import { renderArgInput } from './Utils/renderArgInput';
import { renderMeshPropsInput } from './Utils/renderMeshPropsInput';
import { renderMaterialPropsInput } from './Utils/renderMaterialPropsInput';
import { defaultMaterialProps, defaultMeshProps, example_objects, geometryMap, shapes } from './Models/objects';

export const Objects = () => {
    const [objects, setObjects] = useState<any[]>(example_objects);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
   const addObjectToCanvas = (shape: any) => {
        console.log(shape)
        const newObj = {
            ...shape,
            id: crypto.randomUUID(),
            meshProps: {
                ...defaultMeshProps,
                position: defaultMeshProps.position.clone(),
                rotation: defaultMeshProps.rotation.clone(),
                scale: defaultMeshProps.scale.clone(),
            },
            materialProps: { ...defaultMaterialProps },
        };
        setObjects((prev) => [...prev, newObj]);
        setSelectedId(newObj.id);
    };


    const deleteObjectFromCanvas = () => {
        if (!selectedId) return;
        setObjects((prev) => prev.filter((obj) => obj.id !== selectedId));
        setSelectedId(null); // clear selection
    };

    const saveObject = () => {
        const objectsToSave = objects.map(obj => ({
            ...obj,
            geometry: obj.geometry.name.replace(/^_/, "")
        }));
        console.log(objectsToSave);
    };


    return (
        <>
            <div className="app-page studio-page">
                <Splitter style={{ height: '90vh', width: "100vw" }}>
                    <SplitterPanel size={80} minSize={40}>
                        <div className="studio-canvas">
                            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                                <ambientLight />

                                {objects.map((obj) => {
                                    let geometryInstance;
                                    if (typeof obj.geometry === "string") {
                                        const GeometryConstructor = geometryMap[obj.geometry]; // lookup string
                                        geometryInstance = new GeometryConstructor(...Object.values(obj.args));
                                    } else {
                                        geometryInstance = new obj.geometry(...Object.values(obj.args)); // already constructor
                                    }

                                    return (
                                        <ReusableObject
                                            key={obj.id}
                                            geometry={geometryInstance} 
                                            position={
                                                obj.meshProps.position instanceof THREE.Vector3
                                                ? obj.meshProps.position.clone()
                                                : new THREE.Vector3(obj.meshProps.position.x, obj.meshProps.position.y, obj.meshProps.position.z)
                                            }
                                            scale={
                                                obj.meshProps.scale instanceof THREE.Vector3
                                                ? obj.meshProps.scale.clone()
                                                : new THREE.Vector3(obj.meshProps.scale.x, obj.meshProps.scale.y, obj.meshProps.scale.z)
                                            }
                                            rotation={new THREE.Euler(
                                                obj.meshProps.rotation.x,
                                                obj.meshProps.rotation.y,
                                                obj.meshProps.rotation.z
                                            )}
                                            castShadow={obj.meshProps.castShadow}
                                            receiveShadow={obj.meshProps.receiveShadow}
                                            visible={obj.meshProps.visible}
                                            {...obj.materialProps}
                                            onClick={() => setSelectedId(obj.id)}
                                            />
                                    );
                                })}
                                <axesHelper args={[15]} />
                                <gridHelper args={[10, 10, "gray"]} />
                                <OrbitControls />
                            </Canvas>
                        </div>
                    </SplitterPanel>
                    <SplitterPanel size={20} minSize={5}>
                        <div className="studio-settings">
                            <div>
                                {shapes.map((shape) => (
                                    <button key={shape.object} onClick={() => addObjectToCanvas(shape)}>
                                        {shape.object}
                                    </button>
                                ))}
                                {selectedId && (
                                    <div>
                                        {selectedId && objects.find(o => o.id === selectedId)?.args &&
                                            Object.entries(objects.find(o => o.id === selectedId)!.args).map(([key, value]) => (
                                                <div key={key}>
                                                    <label>{key}: </label>
                                                    {renderArgInput(key, value, (newValue: any) => {
                                                    setObjects((prev) =>
                                                        prev.map((obj) =>
                                                        obj.id === selectedId
                                                            ? { ...obj, args: { ...obj.args, [key]: newValue } }
                                                            : obj
                                                        )
                                                    );
                                                    })}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                            {selectedId && (
                                <div style={{ marginTop: "10px" }}>
                                    <button onClick={deleteObjectFromCanvas}>Delete</button>
                                </div>
                            )}
                            <div style={{ marginTop: "10px" }}>
                                <button onClick={saveObject}>Save</button>
                            </div>

                            {selectedId && (
                                <div style={{ marginTop: "10px" }}>
                                    <div><b>Mesh Properties</b></div>
                                    {Object.entries(objects.find(o => o.id === selectedId)?.meshProps || {}).map(([key, value]) => (
                                    <div key={key}>
                                        <label>{key}: </label>
                                        {renderMeshPropsInput(key, value, (newVal) => {
                                        setObjects(prev => prev.map(obj =>
                                            obj.id === selectedId
                                            ? { ...obj, meshProps: { ...obj.meshProps, [key]: newVal } }
                                            : obj
                                        ));
                                        })}
                                    </div>
                                    ))}

                                    <div><b>Material Properties</b></div>
                                    {Object.entries(objects.find(o => o.id === selectedId)?.materialProps || {}).map(([key, value]) => (
                                    <div key={key}>
                                        <label>{key}: </label>
                                        {renderMaterialPropsInput(key, value, (newVal) => {
                                        setObjects(prev => prev.map(obj =>
                                            obj.id === selectedId
                                            ? { ...obj, materialProps: { ...obj.materialProps, [key]: newVal } }
                                            : obj
                                        ));
                                        })}
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </SplitterPanel>
                </Splitter>
            </div>
        </>
    )
}

