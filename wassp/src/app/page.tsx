import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Button variant="contained">Hello world</Button>
      </div>
    </main>
  )
}
