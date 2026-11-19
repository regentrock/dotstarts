'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#faq', label: 'Dúvidas' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        {/* Logo */}
        <Link href="#topo" className={styles.logo} aria-label="DotStarts, início" onClick={close}>
          <Image
            src="/Dotstarts-3.png"
            alt="DotStarts"
            width={140}
            height={28}
            priority
            className={styles.logoImg}
          />
        </Link>

        {/* Toggle mobile */}
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className={`${styles.icon} ${styles.iconMenu}`} aria-hidden="true">
            <use href="#i-menu" />
          </svg>
          <svg className={`${styles.icon} ${styles.iconClose}`} aria-hidden="true">
            <use href="#i-close" />
          </svg>
        </button>

        {/* Links */}
        <ul id="menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contato" className={styles.cta} onClick={close}>
              Pedir orçamento
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}