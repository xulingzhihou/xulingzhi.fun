import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-row-reverse py-2  mt-8">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer" className="mx-2">
                <FaInstagram />
            </a>
            <a href="https://www.github.com/yourusername" target="_blank" rel="noreferrer" className="mx-2">
                <FaGithub />
            </a>
        </footer>
    );
};

export default Footer;