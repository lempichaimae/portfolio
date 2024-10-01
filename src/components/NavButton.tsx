import React from 'react';

interface NavButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`text-sm font-mavenPro text-[#3E333F] cursor-pointer relative
        ${active ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NavButton;
