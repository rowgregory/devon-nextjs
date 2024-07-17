import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/public/images';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { persistor, useAppDispatch } from '@/redux/store';
import { resetAuth } from '@/redux/features/auth/authSlice';

const AdminMobileNavigation = ({ toggleMobileMenu, close }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleLogout = () => {
    close()
    persistor.purge();
    dispatch(resetAuth());
    navigate.push('/auth/login');
  };

  return (
    <div
      className={`${toggleMobileMenu
        ? 'w-screen left-0 overflow-hidden'
        : 'left-[-100vw] w-none'
        } fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-lime-400 top-4 right-4 absolute cursor-pointer"
      />
      <Link href='/'>
        <Image
          onClick={close}
          src={Logo}
          className="w-40 duration-200 cursor-pointer"
          alt="Lincolns Landing"
        />
      </Link>
      <Link
        onClick={close}
        className="duration-200"
        href="/admin/dashboard"
      >
        Dashboard
      </Link>
      <Link
        onClick={close}
        className="duration-200"
        href="/admin/testimonials"
      >
        Testimonials
      </Link>
      <Link
        onClick={close}
        className="duration-200"
        href="/admin/contacts"
      >
        Contact
      </Link>
      <Link
        onClick={handleLogout}
        className="duration-200"
        href="/auth/login"
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminMobileNavigation;
