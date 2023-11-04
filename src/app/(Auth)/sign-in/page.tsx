'use client'
import React from 'react'
import SignInpImg from '@/public/images/Login.jpg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { SignupSchema, SignupSchemaType } from '@/src/common/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Button } from '@/src/common/components/ui/button'
import Link from 'next/link'
const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupSchemaType>({
        resolver: zodResolver(SignupSchema),
    });

    const onSubmit = (data: SignupSchemaType) => {
        console.log(data)
    }

    return (
        <section className='w-5/6 mx-auto'>
            <div className='w-12/12 flex justify-between items-center gap-x-4'>
                <div className='w-6/12'>
                    <Image src={SignInpImg} alt='Sign Up' />
                </div>
                <div className='w-6/12 space-y-4 '>
                    <h1 className='text-secondary text-5xl font-semibold'>Hi, Welcome to <Link href="/" className='text-black'>GoMeal</Link><span className='text-primary'>.</span></h1>
                    <p className='text-gray-400'>Sign in to your Go-Meal account to continue your culinary journey</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>

                        <label htmlFor="email" className='text-base tracking-wide'>Email</label>
                        <div className="flex items-center border-b-[1px]">
                            <AiOutlineMail size={20} className='mr-2' />
                            <input
                                {...register('email')}
                                id='email' name='email' type="email" className='w-full focus:outline-none bg-transparent' placeholder='Enter your email' />
                        </div>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                        <label htmlFor="password" className='text-base tracking-wide'>Password</label>
                        <div className="flex items-center border-b-[1px]">
                            <RiLockPasswordLine size={20} className='mr-2' />
                            <input
                                {...register('password')}
                                id='password' name='password' type="password" className='w-full focus:outline-none bg-transparent' placeholder='Enter your password' />
                        </div>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <Button className='w-full shadow-primary shadow-sm'>Sign In</Button>
                        <div>
                            <p className="text-center mt-5 text-gray-400">
                                Not registered yet?{" "}
                                <Link href="/sign-up" className="font-semibold text-secondary">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage