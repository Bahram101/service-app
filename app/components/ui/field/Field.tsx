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
          <Input>
            <InputField value={value} />
          </Input>
        )
      }}
    />
  )
}
