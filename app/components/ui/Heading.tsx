import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

interface IHeading {
  children: React.ReactNode
  className?: string
  isCenter?: false
  backIcon?: boolean
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
  children,
  isCenter = true,
  className,
  backIcon = false
}) => {
  const { goBack, navigate } = useTypedNavigation()
  return (
    <View
      className={cn(
        'bg-white  pl-2 pr-4 pt-2 pb-4 mb-2 relative flex-row  items-center',
        isCenter && 'text-center',
        backIcon ? 'justify-between' : 'justify-center',
        className
      )}
    >
      {backIcon && (
        <Pressable onPress={() => goBack()}>
          <Feather name='chevron-left' size={28} />
        </Pressable>
      )}

      <Text className='font-bold text-xl'>{children}</Text>
    </View>
  )
}

export default Heading
