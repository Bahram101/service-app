export const getSurnameAndName = (fullName: string | undefined) => {
  return fullName?.trim().split(/\s+/).slice(0, 2).join(' ')
}
