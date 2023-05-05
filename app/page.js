'use client'
import Image from 'next/image'
import styles from './page.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoSsr from '@mui/base/NoSsr';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p> */}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      
      <div className={styles.fileIcon}>
      <AssignmentIcon fontSize="large" className={styles.imganim}/>
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
