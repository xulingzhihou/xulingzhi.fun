import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const iconStyle = { fontSize: '2em' };
    return (
        <footer className="flex flex-col items-end">
            <div className="text-3xl font-bold mt-28 p-4">Let's Connect 😎</div>
            <div className="flex flex-row-reverse p-4 m-4 h-32">
                <a
                    href="https://www.instagram.com/liiingeee"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4 w-6 h-6"
                >
                    <FaInstagram style={iconStyle} />
                </a>
                <a
                    href="https://www.github.com/xulingzhihou"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4 w-6 h-6"
                >
                    <FaGithub style={iconStyle} />
                </a>
                <a
                    href="https://www.linkedin.com/in/xulingzhi/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4 w-6 h-6"
                >
                    <FaLinkedin style={iconStyle} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
