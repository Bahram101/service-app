export const getSurnameAndName = (fullName: string | undefined) => {
  return fullName?.trim().split(/\s+/).slice(0, 2).join(' ')
}

export type Status = 'active' | 'done' | 'total'

const map: Record<Status, string> = {
  active: 'text-error-600',
  done: 'text-blue',
  total: 'text-primary'
}

export const getStatusColor = (status: Status): string => {
  return map[status]
}
