export function fillPascalTriangle(triangle: number[][], triangleSize: number) {
    for (let i = 2; i < triangleSize; i++) {
        for (let j = 1; j < i; j++) {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
}