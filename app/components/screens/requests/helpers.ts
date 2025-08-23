export const getStatusColors = (status: number) => {
  switch (status) {
    case 1:
      return { text: 'text-primary', bg: 'bg-primary' }
    case 2:
      return { text: 'text-error-400', bg: 'bg-error-100' }
    default:
      return { text: 'text-gray-500', bg: 'bg-gray-100' }
  }
}
