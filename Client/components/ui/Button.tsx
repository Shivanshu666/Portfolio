import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${className}`}
      >
        <span className={styles.shine}></span>

        <span className={styles.content}>
          {children}

          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      <span className={styles.shine}></span>

      <span className={styles.content}>
        {children}

        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </button>
  );
}