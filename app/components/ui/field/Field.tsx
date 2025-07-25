import cn from 'clsx'
import { Controller } from 'react-hook-form'

import { Input, InputField } from '../input'

import { IField } from './field.interface'

export const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => {
        return (
          <Input
            className={cn(
              'mt-4 rounded-3xl h-[45px] px-1',
              error ? 'border-red-400' : 'border-[#D6D1D2]',
              className
            )}
          >
            <InputField
              placeholderTextColor='#fff'
              autoCapitalize='none'
              onBlur={onBlur}
              value={(value || '').toString()}
              onChangeText={onChange}
              {...rest}
            />
          </Input>
        )
      }}
    />
  )
}
