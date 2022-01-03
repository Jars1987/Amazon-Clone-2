import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Header from './Header';
import SideOptions from './SideOptions';

function HeaderComponent() {
  const { data: session } = useSession();
  const [openToggle, setOpenToggle] = useState(false);
  return (
    <>
      {openToggle && (
        <>
          <div className='absolute z-40 w-full h-full bg-black opacity-50' />
          <SideOptions
            userName={session.user.name}
            handleToggle={() => setOpenToggle(!openToggle)}
          />
        </>
      )}
      <Header handleToggle={() => setOpenToggle(!openToggle)} />
    </>
  );
}

export default HeaderComponent;
