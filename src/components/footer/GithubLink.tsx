import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import { Author } from '../../shared/types';
import styles from './footer.module.scss';

export function GithubLink(props: { author: Author }): JSX.Element {
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
