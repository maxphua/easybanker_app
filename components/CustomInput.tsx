import React from 'react'
import { FormControl, FormField, FormLabel } from './ui/form'
import { Input } from './ui/input'

const CustomInput = ({form, name, label, placeholder}) => {
  return (
    <div>
        <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <div className='form-item'>
                                        <FormLabel className='form-label'>
                                            {label}
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input 
                                                    placeholder={placeholder}
                                                    className='input-class'
                                                    type='password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage 
                                                className='form-message mt-2'
                                            />
                                        </div>
                                    </div>
                                )}
                            />
    </div>
  )
}

export default CustomInput