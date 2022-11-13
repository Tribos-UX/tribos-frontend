// Styles
import styles from '../NestedLayout/NestedLayout.module.scss'

import Link from 'next/link';

export default function NestedLayout({ children }) {
  return (
    <main>
      <div className={styles.navbar_nested_layout}>
        <Link href="/">Ux Tribos</Link>
      </div>
      {children}
    </main>
  );
}