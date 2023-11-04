const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="h-screen bg-[#f5ebdc] overflow-auto">
            <div className="w-full h-full max-w-screen-xl mx-auto">
                {children}
            </div>
        </main>
    )
}

export default LandingLayout