import React, { FC, ReactNode } from 'react'

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
import { View } from 'react-native'

type BaseAccordionProps = {
  title: string
  children: ReactNode
}

const BaseAccordion: FC<BaseAccordionProps> = ({ title, children }) => {
  return (
    <Accordion
      size='md'
      variant='filled'
      type='single'
      isCollapsible={true}
      isDisabled={false}
      className='rounded-2xl'
    >
      <AccordionItem value='a' className='rounded-2xl'>
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>{title}</AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} className='ml-3' />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} className='ml-3' />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText className=''>
            <View className='gap-3'>{children}</View>
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default BaseAccordion
