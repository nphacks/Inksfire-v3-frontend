import * as THREE from "three";

export function renderMeshPropsInput(key: string, value: any, setProp: (newVal: any) => void) {
    if (value instanceof THREE.Vector3) {
        return (
            <div style={{ display: "flex", gap: "4px" }}>
                {(["x", "y", "z"] as ("x" | "y" | "z")[]).map((axis) => (
                    <input
                        key={axis}
                        type="number"
                        value={value[axis]}
                        onChange={(e) => {
                            const newVec = value.clone();
                            newVec[axis] = parseFloat(e.target.value);
                            setProp(newVec);
                        }}
                    />
                ))}
            </div>
        );
    }

    if (typeof value === "boolean") {
        return <input type="checkbox" checked={value} onChange={e => setProp(e.target.checked)} />;
    }

    if (typeof value === "number" || typeof value === "string") {
        return <input type="text" value={value} onChange={e => setProp(e.target.value)} />;
    }

    return null;
}
