import * as THREE from "three";

export function renderMaterialPropsInput(
  key: string,
  value: any,
  onUpdate: (newValue: any) => void
) {
  // Boolean props
  if (typeof value === "boolean") {
    return (
      <label>
        {key}: 
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onUpdate(e.target.checked)}
        />
      </label>
    );
  }

  // Number props
  if (typeof value === "number") {
    // Use range for specific properties
    const useRange = ["opacity", "metalness", "roughness", "emissiveIntensity", "alphaTest"].includes(key);
    return useRange ? (
      <label>
        {key}: 
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={value}
          onChange={(e) => onUpdate(parseFloat(e.target.value))}
        />
      </label>
    ) : (
      <label>
        {key}: 
        <input
          type="number"
          value={value}
          onChange={(e) => onUpdate(parseFloat(e.target.value))}
        />
      </label>
    );
  }

  // Color props
  if (value instanceof THREE.Color || typeof value === "string") {
    return (
      <label>
        {key}: 
        <input
          type="color"
          value={value instanceof THREE.Color ? `#${value.getHexString()}` : value}
          onChange={(e) => onUpdate(new THREE.Color(e.target.value))}
        />
      </label>
    );
  }

  return null;
}
