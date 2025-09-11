import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import React, { FC, ReactNode, useState } from 'react'
import { Text, View } from 'react-native'

import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icon'

import { TypeFeatherIconNames } from '@/types/icon.interface'

type BaseAccordionProps = {
  title: string
  children: ReactNode
  icon: TypeFeatherIconNames
  value?: string
}

const BaseAccordion: FC<BaseAccordionProps> = ({
  title,
  children,
  icon,
  value
}) => {
  return (
    <AccordionItem value={value ?? 'default'} className='rounded-2xl px-4'>
      <AccordionTrigger className='pb-3 p-0'>
        {({ isExpanded }: { isExpanded: any }) => {
          return (
            <AccordionHeader
              className={cn(
                'w-full flex-row justify-between py-3 border-grayLight',
                isExpanded && 'border-b'
              )}
            >
              <View className='flex-row gap-2 items-center'>
                <Feather name={icon} size={22} style={{ color: '#15803d' }} />
                <AccordionTitleText className='text-primary uppercase ml-2'>
                  {title}
                </AccordionTitleText>
              </View>
              {isExpanded ? (
                <AccordionIcon
                  as={ChevronUpIcon}
                  className='mr-2 right-4 top-1'
                />
              ) : (
                <AccordionIcon
                  as={ChevronDownIcon}
                  className='mr-2 right-4 top-1'
                />
              )}
            </AccordionHeader>
          )
        }}
      </AccordionTrigger>
      <AccordionContent className='p-0 py-3'>
        <AccordionContentText className='pl-[9px]'>
          <View className='gap-3 border-l-4 border-primary pl-3'>
            {children}
          </View>
        </AccordionContentText>
      </AccordionContent>
    </AccordionItem>
  )
}

export default BaseAccordion
