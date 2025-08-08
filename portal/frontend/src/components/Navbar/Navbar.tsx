import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <>
            <div className="w-full h-20  flex items-center p-4 border-b-2">
                <div className='flex items-center gap-2'>
                    <img className='h-8' src={logo} />
                    <h1 className='text-2xl '>Patient Management</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar;