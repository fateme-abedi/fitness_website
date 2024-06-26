import React,{useState} from 'react'
import Logo from '@/assets/Logo.png'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfThePage : boolean;
    selectedPage : SelectedPage;
    setSelectedPage : (value: SelectedPage) => void;
    
}

const index = ({isTopOfThePage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    return (
        <nav>
            <div className={`${isTopOfThePage ? "" : "bg-primary-100 drop-shadow"} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt='logo'/>
                        {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                 page='Home'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page = 'Benefits'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page = "Our Classes"
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page='Cotact Us'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>

                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>

                            </div>

                        </div>): (
                            <button 
                             className="rounded-full bg-secondary-500 p-2"
                             onClick={()=>setIsMenuToggled(!isMenuToggled)}
                             >
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )
}
                    </div>
                </div>
            </div>
             {/* Mobile Menu Modal */}
             {!isAboveMediumScreen && isMenuToggled && (
                <div className = "fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className='flex justify-end p-12'>
                        <button onClick = {() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400'/>
                        </button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                <Link 
                                 page='Home'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page = 'Benefits'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page = "Our Classes"
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>
                                <Link 
                                 page='Cotact Us'
                                 selectedPage={selectedPage}
                                 setSelectedPage={setSelectedPage}/>

                    </div>

                </div>
             )}
        </nav>
    )
}

export default index


