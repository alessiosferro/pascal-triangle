import { fillPascalTriangle } from "./fillPascalTriangle";
import { getTriangularMatrix } from "./getTriangularMatrix";

const formatter = new Intl.NumberFormat("it");

export function getPascalTriangle(triangleSize: number): PascalTriangle {
    const triangle = getTriangularMatrix(triangleSize);

    fillPascalTriangle(triangle, triangleSize);

    return triangle.map((row) => row.map((value) => ({
        rawValue: value,
        formattedValue: formatter.format(value),
    })))
}

export type PascalTriangle = PascalTriangleValue[][]

export interface PascalTriangleValue {
    rawValue: number;
    formattedValue: string
}