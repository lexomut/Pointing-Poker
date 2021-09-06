import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a
                    className="github"
                    href="https://github.com/lexomut"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>Alexey Pirozerskiy</span>
                </a>
                <a
                    className="github"
                    href="https://github.com/LenarFF"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>LenarFF</span>
                </a>
                <a
                    className="github"
                    href="https://github.com/OKitel"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>Olga Kitel</span>
                </a>
                <a className="rss" href="https://rs.school/" target="_blank" rel="noreferrer">
                    <span className="rss-year">&apos;21</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
