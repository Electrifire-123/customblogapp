
const Shimmer = () => {
  return (
    <div>
        <header className='py-3 shadow bg-blue-200'>
    
        <nav className="flex">
            <div className='mr-4'>
            {/* <Link to='/'>
                <Logo width="70px"/>
            </Link> */}
            </div>
            <ul className='flex ml-auto'>
            {/* {navItems.map((item)=>
                item.active? (
                <li key={item.name}>
                    <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                </li>
                ) : null
            )} */}
            {/* {authStatus && (
                <li>
                <LogoutBtn/>
                </li>
            )} */}
            </ul>
        </nav>
        {/* </Container> */}
        </header>
        <section className="relative overflow-hidden py-10 bg-blue-200 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                {/* <Logo width="100px" /> */}
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    
                                </li>
                                <li className="mb-4">
                                    
                                </li>
                                <li className="mb-4">
                                    
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    
                                </li>
                                <li className="mb-4">
                                    
                                </li>
                                <li className="mb-4">
                                    
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    
                                </li>
                                <li className="mb-4">
                                    
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    </div>
  )
}

export default Shimmer