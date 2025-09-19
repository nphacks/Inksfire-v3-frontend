import { Canvas } from "@react-three/fiber";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './Styles/Testing.css'
import { OrbitControls } from "@react-three/drei";
import { example_objects, example_objects_2 } from "./Models/objects";
import { ObjectGroup } from "./Components/ObjectGroup";

export const Testing = () => {
    return (
        <div className="app-page studio-page">
            <Splitter style={{ height: '90vh', width: "100vw" }}>
                <SplitterPanel size={80} minSize={40}>
                    <div className="studio-canvas">
                        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                            <ambientLight />

                            {/* Render example objects in a group */}
                            <ObjectGroup objects={example_objects} />
                            <ObjectGroup objects={example_objects_2} />

                            <axesHelper args={[15]} />
                            <gridHelper args={[10, 10, 'gray']} />
                            <OrbitControls />
                        </Canvas>
                    </div>
                </SplitterPanel>
                <SplitterPanel size={20} minSize={5}>
                    <div className="studio-settings">Hello</div>
                </SplitterPanel>
            </Splitter>
        </div>
    );
};
