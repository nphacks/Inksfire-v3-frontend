import * as THREE from "three";

export function renderArgInput(
  key: string,
  value: any,
  onUpdate: (newValue: any) => void
) {
  // Number inputs
  if (typeof value === "number") {
    const isRange = ["radius", "tube", "width", "height", "depth"].includes(key);
    return isRange ? (
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        value={value}
        onChange={(e) => onUpdate(parseFloat(e.target.value))}
      />
    ) : (
      <input
        type="number"
        value={value}
        onChange={(e) => onUpdate(parseFloat(e.target.value))}
      />
    );
  }

  // Boolean inputs
  if (typeof value === "boolean") {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onUpdate(e.target.checked)}
      />
    );
  }

  // Vector3 inputs
  if (value instanceof THREE.Vector3) {
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        {(["x", "y", "z"] as ("x" | "y" | "z")[]).map((axis) => (
          <input
            key={axis}
            type="number"
            value={value[axis]}
            onChange={(e) => {
              const newVector = value.clone();
              newVector[axis] = parseFloat(e.target.value);
              onUpdate(newVector);
            }}
          />
        ))}
      </div>
    );
  }

  // Vector2[] inputs (Lathe points)
  if (Array.isArray(value) && value.length > 0 && value[0] instanceof THREE.Vector2) {
    return (
      <div>
        {value.map((pt: THREE.Vector2, idx: number) => (
          <div key={idx} style={{ display: "flex", gap: "4px" }}>
            {(["x", "y"] as ("x" | "y")[]).map((axis) => (
              <input
                key={axis}
                type="number"
                value={pt[axis]}
                onChange={(e) => {
                  const newPoints = [...value];
                  newPoints[idx] = pt.clone();
                  newPoints[idx][axis] = parseFloat(e.target.value);
                  onUpdate(newPoints);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  // Other complex types
  if (value instanceof THREE.Curve) {
    return <span>{key} (Curve)</span>;
  }

  return null;
}
