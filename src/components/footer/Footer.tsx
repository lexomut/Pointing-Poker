import React from 'react';
import styles from './footer.module.scss';
import { authors } from '../../shared/data';
import { GithubLink } from './GithubLink';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {authors.map((author) => {
                    return <GithubLink author={author} key={author.id} />;
                })}
                <a
                    className={styles.rss}
                    href="https://rs.school/react/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.rssYear}>&apos;21</span>
                </a>
            </div>
        </footer>
    );
};
