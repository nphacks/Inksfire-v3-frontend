/**
 * Light Props:
 * color → light color
 * intensity → brightness
 * position → [x, y, z] placement
 * target → where light points (for spot/directional)
 * castShadow → enable shadows
 * shadow-mapSize → shadow resolution [w, h]
 * shadow-bias → shadow acne fix
 * shadow-radius → blur shadow
 * 
 * 
 * Type-specific:
 * - DirectionalLight → like sun, parallel rays
 * - PointLight → omnidirectional, add distance, decay
 * - SpotLight → cone-shaped, add angle, penumbra, distance, decay
 * - HemisphereLight → sky vs ground colors
 * - AmbientLight → global light, no shadows
 */