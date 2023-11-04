import React from 'react'

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex items-center justify-center h-screen bg-[#f5ebdc]'>{children}
        </div>
    )
}

export default AuthLayout