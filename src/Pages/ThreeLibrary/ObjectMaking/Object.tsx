import type { ReactNode } from "react"
import type { TypedMeshProps } from "../Models/Mesh"
import type { TypedMaterialProps } from "../Models/Material"

export interface ObjectProps extends TypedMeshProps, TypedMaterialProps {
  children?: ReactNode
}

export function Object({ geometry, children, ...props }: ObjectProps) {
  if (!geometry) throw new Error("Geometry is required for ReusableObject")

  return (
    <mesh {...props} geometry={geometry}>
      <meshStandardMaterial {...props} />
      {children}
    </mesh>
  )
}
