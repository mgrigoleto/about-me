import type { CSSProperties } from "react"

export function assemble(step = 0): { "data-assemble": string; style: CSSProperties } {
    return {
        "data-assemble": "",
        style: { "--reveal": step } as CSSProperties,
    }
}
