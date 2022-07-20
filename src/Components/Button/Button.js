import React, { useState } from 'react';
import './button.css';

export const Button = () => {
  const [active, setActive] = useState('');
  const hanldeClick = (name) => {
    setActive(name);
  };
  return (
    <>
      <a href="#span-item">
        <div
          class="outer"
          onClick={() => {
            hanldeClick('first');
          }}
        >
          <div class={active === 'first' ? 'button active' : 'button'}>
            <div class="text ">button</div>
          </div>
        </div>
      </a>
      <a href="#second-span">
        <div
          class="outer"
          onClick={() => {
            hanldeClick('second');
          }}
        >
          <div class={active === 'second' ? 'button active' : 'button'}>
            <div class="text">button</div>
          </div>
        </div>
      </a>
    </>
  );
};
