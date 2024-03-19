 /* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, CustomFunc, icon, Color, dotColor }) => (
  <TooltipComponent content={title}
  position='BottomCenter'>
    <button 
    type='button' 
    onClick={CustomFunc} 
    style={{color: Color}} 
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}

      </span>

    </button>

  </TooltipComponent>
);


const Navbar = () => {
  const{ currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
      title='menu' 
      CustomFunc={() => handleActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
      Color={currentColor}
      icon={<AiOutlineMenu/>} />

      <div className='flex'>
      <NavButton 
      title='Cart' 
      // eslint-disable-next-line no-undef
      CustomFunc={() => handleClick('cart')} 
      Color={currentColor}
      icon={<FiShoppingCart/>} />
      
      <NavButton 
      title='Chat'
      dotColor='#03c9d7' 
      // eslint-disable-next-line no-undef
      CustomFunc={() => handleClick('chat')} 
      Color={currentColor}
      icon={<BsChatLeft/>} />
      
      <NavButton 
      title='notifications'
      dotColor='#03c9d7'
      // eslint-disable-next-line no-undef
      CustomFunc={() => handleClick('notification')} 
      Color={currentColor}
      icon={<RiNotification3Line/>} />
      
      <TooltipComponent 
      content='Profile'
      position='BottomCenter'>
        <div className='flex items-center gap-2 curor-pointer p-1 hover:bg-light-gray rounded-1g'
        // eslint-disable-next-line no-undef
        onClick={() => handleClick('userProfile')}>
          <img 
          className='rounded-full w-8 h-8'
          src={avatar}
           />
           <p>
            <span className='text-gray-400'>Hi, </span> {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Jennifer</span>
           </p>
           <MdKeyboardArrowDown 
           className='text-gray-400 text-14'/>

        </div>

      </TooltipComponent>
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>
  );
};

export default Navbar;