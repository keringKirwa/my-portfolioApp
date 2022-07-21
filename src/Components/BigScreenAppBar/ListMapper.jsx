import toast from 'react-hot-toast';
import './bigScreen.css';
import React from 'react';

export const ListMapper = ({ title, id, active, setSelected }) => {
  return (
    <>
      <li
        className={active ? 'nav-item active text-danger' : 'nav-item text-primary'}
        onClick={() => {
          setSelected(id);
          if (id === 'resume') {
            toast.success('Resume Coming Soon.Kirwa is working on it 🤣', {
              duration: 4000,
            });
          }
        }}
      >
        <a className="nav-link" href={`#${id}`}>
          {title}
        </a>
      </li>
    </>
  );
};
