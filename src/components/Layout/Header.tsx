import Image from 'next/image';
const Header = () => {
    return (
        <div className="">
            <div className='flex flex-row items-center'>
                <Image src="/logo.png" width={70} height={70} alt="logo" />
                <h1 className="text-4xl font-bold pl-6">Elevation Finder</h1>
            </div>

            <h2 className="text-lg pt-6 pb-3">Explore elevation levels by interacting with the map:</h2>
        </div>
    );
}

export default Header;