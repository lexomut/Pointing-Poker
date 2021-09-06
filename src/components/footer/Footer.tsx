import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <a
                    className={styles.github}
                    href="https://github.com/lexomut"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>Alexey Pirozerskiy</span>
                </a>
                <a
                    className={styles.github}
                    href="https://github.com/LenarFF"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>LenarFF</span>
                </a>
                <a
                    className={styles.github}
                    href="https://github.com/OKitel"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>Olga Kitel</span>
                </a>
                <a
                    className={styles.rss}
                    href="https://rs.school/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.rssYear}>&apos;21</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
