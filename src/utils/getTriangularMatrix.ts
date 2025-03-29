/**
 * Returns a triangular matrix
 *
 * e.g. triangleSize: 3
 * [
 * [1],
 * [1, 1],
 * [1, 1, 1]
 * ]
 */
export function getTriangularMatrix(triangleSize: number) {
  return Array.from({ length: triangleSize }, (_, i) => Array(i + 1).fill(1));
}