'use client'
import Image from 'next/image'
import styles from './page.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import Header from '../app/components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Loyal Health Information Network" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
            className={styles.logo}
            src="/doc1.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            priority
          />
        <div className={styles.fileIcon}>
          <AssignmentIcon fontSize="large" className={styles.imganim} />
        </div>
        <Image
            className={styles.logo}
            src="/doc2.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            priority
          />
      </div>

      <div style={{ 
  
  padding: "10px", 
  borderRadius: "5px", 
  textAlign: "center",
  fontSize:'20px'
}}>
  Securely transfers patient records between healthcare providers.
</div>
      <div className={styles.center}>
        <div className={styles.loginPrompt}>
          <a
            href="/login"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              <bold>Login</bold> <span>-&gt;</span>
            </h2>
            <p>Login to transfer patient records</p>
          </a>
        </div>
      </div>
    </main>
  )
}
