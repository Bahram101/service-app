import { useQuery } from '@tanstack/react-query'

import { RequestService } from '@/services/request.service'

export const useGetAllRequests = () => {
  const { data: requests, isLoading } = useQuery({
    queryKey: ['requests'],
    queryFn: () => RequestService.getAllRequests(),
    // select: data => console.log('ddddd', data)
  })

  return { requests, isLoading }
}
