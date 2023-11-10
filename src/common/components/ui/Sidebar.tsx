import React from 'react'

type SidebarProps = {
    children: React.ReactNode
    className?: string
}

const Sidebar = ({ children, className }: SidebarProps) => {
    return (
        <aside className={`w-56 h-screen ${className}`}>{children}</aside>
    )
}

export default Sidebar