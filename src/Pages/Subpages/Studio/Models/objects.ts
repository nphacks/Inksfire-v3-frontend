import * as THREE from "three"

export const defaultMeshProps = {
    position: new THREE.Vector3(0, 0, 0),
    rotation: new THREE.Vector3(0, 0, 0),
    scale: new THREE.Vector3(1, 1, 1),
    castShadow: true,
    receiveShadow: true,
    visible: true,
    frustumCulled: true,
    renderOrder: 0,
    userData: {},
};

export const defaultMaterialProps = {
    color: "#ffffff",
    opacity: 1,
    transparent: false,
    wireframe: false,
    metalness: 0.5,
    roughness: 0.5,
    emissive: "#000000",
    emissiveIntensity: 1,
    side: THREE.FrontSide,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0,
    toneMapped: true,
};


export let shapes = [
    {
        object: "Box",
        geometry: THREE.BoxGeometry,
        args: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 }
    },
    {
        object: "Capsule",
        geometry: THREE.CapsuleGeometry,
        args: { radius: 1, length: 2, capSegments: 4, radialSegments: 8 }
    },
    {
        object: "Circle",
        geometry: THREE.CircleGeometry,
        args: { radius: 1, segments: 8, thetaStart: 0, thetaLength: Math.PI * 2 }
    },
    {
        object: "Cone",
        geometry: THREE.ConeGeometry,
        args: { radius: 1, height: 2, radialSegments: 8, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: Math.PI * 2 }
    },
    {
        object: "Cylinder",
        geometry: THREE.CylinderGeometry,
        args: { radiusTop: 1, radiusBottom: 1, height: 2, radialSegments: 8, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: Math.PI * 2 }
    },
    {
        object: "Dodecahedron",
        geometry: THREE.DodecahedronGeometry,
        args: { radius: 1, detail: 0 }
    },
    // {
    //     object: "Extrude",
    //     geometry: "ExtrudeGeometry",
    //     args: { shapes: [], options: {} } // shapes: Shape[], options: ExtrudeGeometryOptions
    // },
    {
        object: "Icosahedron",
        geometry: THREE.IcosahedronGeometry,
        args: { radius: 1, detail: 0 }
    },
    {
        object: "Lathe",
        geometry: THREE.LatheGeometry,
        args: { points: [new THREE.Vector2(0,0), new THREE.Vector2(1,1)], segments: 12, phiStart: 0, phiLength: Math.PI * 2 }
    },
    {
        object: "Octahedron",
        geometry: THREE.OctahedronGeometry,
        args: { radius: 1, detail: 0 }
    },
    {
        object: "Plane",
        geometry: THREE.PlaneGeometry,
        args: { width: 1, height: 1, widthSegments: 1, heightSegments: 1 }
    },
    {
        object: "Polyhedron",
        geometry: THREE.PolyhedronGeometry,
        args: { vertices: [], indices: [], radius: 1, detail: 0 } // vertices: number[], indices: number[]
    },
    {
        object: "Ring",
        geometry: THREE.RingGeometry,
        args: { innerRadius: 0.5, outerRadius: 1, thetaSegments: 8, phiSegments: 1, thetaStart: 0, thetaLength: Math.PI * 2 }
    },
    // {
    //     object: "Shape",
    //     geometry: "ShapeGeometry",
    //     args: { shapes: [] } // shapes: Shape[]
    // },
    {
        object: "Sphere",
        geometry: THREE.SphereGeometry,
        args: { radius: 1, widthSegments: 8, heightSegments: 6, phiStart: 0, phiLength: Math.PI * 2, thetaStart: 0, thetaLength: Math.PI }
    },
    {
        object: "Tetrahedron",
        geometry: THREE.TetrahedronGeometry,
        args: { radius: 1, detail: 0 }
    },
    {
        object: "Torus",
        geometry: THREE.TorusGeometry,
        args: { radius: 1, tube: 0.4, radialSegments: 8, tubularSegments: 6, arc: Math.PI * 2 }
    },
    {
        object: "TorusKnot",
        geometry: THREE.TorusKnotGeometry,
        args: { radius: 1, tube: 0.4, tubularSegments: 64, radialSegments: 8, p: 2, q: 3 }
    },
    {
        object: "Tube",
        geometry: THREE.TubeGeometry,
        args: { path: new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 0), new THREE.Vector3(2, 0, 0)]), tubularSegments: 64, radius: 1, radialSegments: 8, closed: false } // path: THREE.Curve
    }
]

export const geometryMap: Record<string, any> = {
    BoxGeometry: THREE.BoxGeometry,
    CapsuleGeometry: THREE.CapsuleGeometry,
    CircleGeometry: THREE.CircleGeometry,
    ConeGeometry: THREE.ConeGeometry,
    CylinderGeometry: THREE.CylinderGeometry,
    DodecahedronGeometry: THREE.DodecahedronGeometry,
    IcosahedronGeometry: THREE.IcosahedronGeometry,
    LatheGeometry: THREE.LatheGeometry,
    OctahedronGeometry: THREE.OctahedronGeometry,
    PlaneGeometry: THREE.PlaneGeometry,
    PolyhedronGeometry: THREE.PolyhedronGeometry,
    RingGeometry: THREE.RingGeometry,
    SphereGeometry: THREE.SphereGeometry,
    TetrahedronGeometry: THREE.TetrahedronGeometry,
    TorusGeometry: THREE.TorusGeometry,
    TorusKnotGeometry: THREE.TorusKnotGeometry,
    TubeGeometry: THREE.TubeGeometry,
};

export interface ObjectGroupProps {
    objects: typeof example_objects;
    position?: THREE.Vector3;
    rotation?: THREE.Euler;
    scale?: THREE.Vector3;
}

export let example_objects = [
    {
        "object": "TorusKnot",
        "geometry": "TorusKnotGeometry",
        "args": {
            "radius": 1,
            "tube": 0.4,
            "tubularSegments": 63,
            "radialSegments": 8,
            "p": 2,
            "q": 3
        },
        "id": "565e8136-18a1-4f7c-a318-b7cd78b64d07",
        "meshProps": {
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "castShadow": false,
            "receiveShadow": false,
            "visible": true,
            "frustumCulled": false,
            "renderOrder": 0,
            "userData": {}
        },
        "materialProps": {
            "color": 8915980,
            "opacity": 1,
            "transparent": false,
            "wireframe": false,
            "metalness": 0.45,
            "roughness": 0.5,
            "emissive": 11941173,
            "emissiveIntensity": 0.24,
            "side": 0,
            "depthTest": false,
            "depthWrite": false,
            "alphaTest": 0.21,
            "toneMapped": true
        }
    },
    {
        "object": "Plane",
        "geometry": "PlaneGeometry",
        "args": {
            "width": 3,
            "height": 1,
            "widthSegments": 1,
            "heightSegments": 1
        },
        "id": "172a92ad-4506-43cb-8912-4f459faf514b",
        "meshProps": {
            "position": {
                "x": 3,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 1,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "castShadow": true,
            "receiveShadow": true,
            "visible": true,
            "frustumCulled": true,
            "renderOrder": 0,
            "userData": {}
        },
        "materialProps": {
            "color": 2261293,
            "opacity": 1,
            "transparent": false,
            "wireframe": false,
            "metalness": 0.76,
            "roughness": 0.22,
            "emissive": "#000000",
            "emissiveIntensity": 1,
            "side": 0,
            "depthTest": true,
            "depthWrite": true,
            "alphaTest": 0,
            "toneMapped": true
        }
    },
    {
        "object": "Sphere",
        "geometry": "SphereGeometry",
        "args": {
            "radius": 1,
            "widthSegments": 8,
            "heightSegments": 6,
            "phiStart": 0,
            "phiLength": 6.283185307179586,
            "thetaStart": 0,
            "thetaLength": 3.141592653589793
        },
        "id": "e3ece651-c9da-4639-b758-0229c58d3d9e",
        "meshProps": {
            "position": {
                "x": -3,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "castShadow": true,
            "receiveShadow": true,
            "visible": true,
            "frustumCulled": true,
            "renderOrder": 0,
            "userData": {}
        },
        "materialProps": {
            "color": 16768614,
            "opacity": 1,
            "transparent": false,
            "wireframe": false,
            "metalness": 0.5,
            "roughness": 0.5,
            "emissive": "#000000",
            "emissiveIntensity": 1,
            "side": 0,
            "depthTest": true,
            "depthWrite": true,
            "alphaTest": 0,
            "toneMapped": true
        }
    }
]

export let example_objects_2 = [
    {
        "object": "TorusKnot",
        "geometry": "TorusKnotGeometry",
        "args": {
            "radius": 2,
            "tube": 0.1,
            "tubularSegments": 63,
            "radialSegments": 8,
            "p": 2,
            "q": 3
        },
        "id": "565e8136-18a1-4f7c-a318-b7cd78b64d07",
        "meshProps": {
            "position": {
                "x": -2,
                "y": 1,
                "z": -1
            },
            "rotation": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "castShadow": false,
            "receiveShadow": false,
            "visible": true,
            "frustumCulled": false,
            "renderOrder": 0,
            "userData": {}
        },
        "materialProps": {
            "color": 8915980,
            "opacity": 1,
            "transparent": false,
            "wireframe": false,
            "metalness": 0.45,
            "roughness": 0.5,
            "emissive": 11941173,
            "emissiveIntensity": 0.24,
            "side": 0,
            "depthTest": false,
            "depthWrite": false,
            "alphaTest": 0.21,
            "toneMapped": true
        }
    },
    {
        "object": "Plane",
        "geometry": "PlaneGeometry",
        "args": {
            "width": 3,
            "height": 1,
            "widthSegments": 1,
            "heightSegments": 1
        },
        "id": "172a92ad-4506-43cb-8912-4f459faf514b",
        "meshProps": {
            "position": {
                "x": 3,
                "y": 0,
                "z": -2
            },
            "rotation": {
                "x": 1,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "castShadow": true,
            "receiveShadow": true,
            "visible": true,
            "frustumCulled": true,
            "renderOrder": 0,
            "userData": {}
        },
        "materialProps": {
            "color": 2261293,
            "opacity": 1,
            "transparent": false,
            "wireframe": false,
            "metalness": 0.76,
            "roughness": 0.22,
            "emissive": "#000000",
            "emissiveIntensity": 1,
            "side": 0,
            "depthTest": true,
            "depthWrite": true,
            "alphaTest": 0,
            "toneMapped": true
        }
    }
]