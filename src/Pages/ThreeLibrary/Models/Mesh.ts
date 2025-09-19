import * as THREE from "three"

// Mesh-level props
export interface TypedMeshProps {
    geometry?: THREE.BufferGeometry        // The shape of the mesh (e.g., box, sphere, custom)
    position?: [number, number, number] | THREE.Vector3  // Mesh location in 3D space
    rotation?: [number, number, number] | THREE.Euler    // Rotation in radians around X, Y, Z axes
    scale?: [number, number, number] | THREE.Vector3     // Size multiplier on X, Y, Z axes
    quaternion?: THREE.Quaternion        // Alternative to rotation; represents rotation in 4D, avoids gimbal lock
    matrix?: THREE.Matrix4               // Custom transformation matrix for the mesh
    matrixAutoUpdate?: boolean           // Whether Three.js updates the matrix automatically
    visible?: boolean                    // Show or hide the mesh
    castShadow?: boolean                 // Mesh casts shadow onto other objects
    receiveShadow?: boolean              // Mesh receives shadows from other objects
    frustumCulled?: boolean              // Exclude mesh from rendering if outside camera view
    renderOrder?: number                 // Force the order in which this mesh is rendered
    userData?: Record<string, any>       // Custom data storage for this mesh
    onClick?: (event: THREE.Event) => void          // Callback when mesh is clicked
    onPointerOver?: (event: THREE.Event) => void    // Callback when pointer hovers over mesh
    onPointerOut?: (event: THREE.Event) => void     // Callback when pointer leaves mesh
    onPointerMove?: (event: THREE.Event) => void    // Callback when pointer moves over mesh
}
