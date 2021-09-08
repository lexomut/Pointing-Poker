import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './footer.module.scss';

interface Author {
    id: number;
    name: string;
    link: string;
}
const authors: Author[] = [
    {
        id: 1,
        name: 'Alexey Pirozerskiy',
        link: 'https://github.com/lexomut',
    },
    {
        id: 2,
        name: 'LenarFF',
        link: 'https://github.com/LenarFF',
    },
    {
        id: 3,
        name: 'Olga Kitel',
        link: 'https://github.com/OKitel',
    },
];

function GithubLink(props: { author: Author }) {
    const {
        author: { name, link },
    } = props;
    return (
        <a className={styles.github} href={link} target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span>{name}</span>
        </a>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {authors.map((author) => {
                    return <GithubLink author={author} key={author.id} />;
                })}
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
