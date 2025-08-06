import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import { Button, ButtonText } from '@/components/ui/button'

import { IButton } from '@/types/button.interface'

const   CustomBtn: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {

  return (
    <Button className={cn('bg-primary', className)} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Button>
  )
}

export default CustomBtn
