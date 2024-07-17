'use client';


import { Logo } from '@/public/images';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { persistor, useAppDispatch } from '@/redux/store';
import { resetAuth } from '@/redux/features/auth/authSlice';
import adminSideNavigationLinkData from '@/public/data/adminSideNavigationLinkData';

const AdminSideNavigation = () => {
  const params = usePathname();
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    persistor.purge();
    dispatch(resetAuth());
    navigate.push('/auth/login');
  };

  return (
    <div className="w-[240px] min-h-screen">
      <div className="px-3 pt-5 mb-10">
        <Link href='/'>
          <Image
            src={Logo}
            alt="Lincolns Landing"
            className="object-contain mx-auto"
            priority
          />
        </Link>
      </div>
      {adminSideNavigationLinkData(params?.split('/')[2]).map(
        (obj: any, i: number) => (
          <div key={i} className="grid grid-cols-9 mb-6 items-center group">
            <FontAwesomeIcon
              icon={obj.icon}
              className={`${obj?.isActive
                ? 'bg-slate-600 rounded-tr-2xl rounded-br-2xl text-[#90cf3b]'
                : 'text-zinc-400'
                } col-span-2 py-2 pl-2 pr-3 w-4 h-4 duration-200 group-hover:text-[#90cf3b]`}
            />
            <Link
              className={`${obj.isActive ? 'text-[#90cf3b] font-bold' : 'text-zinc-400'
                } col-span-7 duration-200 group-hover:text-[#90cf3b]`}
              href={obj.linkKey}
            >
              {obj.textKey}
            </Link>
          </div>
        )
      )}
      <div
        onClick={handleLogout}
        className="grid grid-cols-9 mb-6 items-center cursor-pointer group"
      >
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className={`fa-solid fa-right-from-bracket text-zinc-400 col-span-2 py-2 pl-2 pr-3 w-4 h-4 duration-200 group-hover:text-[#90cf3b]`}
        />
        <p className="text-zinc-400 col-span-7 duration-200 group-hover:text-[#90cf3b]">
          Logout
        </p>
      </div>
    </div>
  );
};

export default AdminSideNavigation;
