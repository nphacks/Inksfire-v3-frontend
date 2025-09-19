import * as THREE from "three"

export interface TypedMaterialProps {
    color?: THREE.Color | string | number        // Base color of the material
    opacity?: number                              // Transparency amount (0 = fully transparent, 1 = fully opaque)
    transparent?: boolean                         // Enable transparency
    wireframe?: boolean                            // Render material as wireframe
    metalness?: number                             // How metallic the surface looks (0 = non-metal, 1 = fully metal)
    roughness?: number                             // Surface roughness (0 = smooth/shiny, 1 = rough/dull)
    emissive?: THREE.Color | string | number      // Self-illumination color (glow)
    emissiveIntensity?: number                     // Strength of the emissive glow
    map?: THREE.Texture                            // Base texture map
    normalMap?: THREE.Texture                      // Normal map for simulating bumps
    roughnessMap?: THREE.Texture                   // Texture to control roughness per pixel
    metalnessMap?: THREE.Texture                   // Texture to control metalness per pixel
    emissiveMap?: THREE.Texture                    // Texture for emissive color per pixel
    envMap?: THREE.Texture                         // Environment map for reflections
    side?: THREE.Side                              // Which sides of the material to render (FrontSide, BackSide, DoubleSide)
    depthTest?: boolean                            // Enable/disable z-buffer depth testing
    depthWrite?: boolean                           // Enable/disable writing to depth buffer
    alphaTest?: number                             // Discard pixels with alpha below this threshold
    toneMapped?: boolean                            // Include material in tone mapping
}
