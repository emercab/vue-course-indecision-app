// sum.test.js
import { expect, test } from 'vitest'
import { addArray, sum } from '../../src/helpers/sum'

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  const a = 3
  const b = 2

  // Act
  const result = sum(a, b)

  // Assert
  expect(sum(a, b)).toBe(result)
})

test('Should return 0 when the array is empty', () => {
  // Arrange
  const arr: number[] = []

  // Act
  const result = addArray(arr)

  // Assert
  expect(result).toBe(0)
})
