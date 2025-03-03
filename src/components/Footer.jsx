import React from "react";

// You can replace these inline SVGs with your preferred icon library (e.g., FontAwesome)
const TwitterIcon = () => (
    <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M23.953 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.195 9.723 4.897 4.897 0 01.96 9.1v.062a4.916 4.916 0 003.946 4.814 4.902 4.902 0 01-2.212.084 4.916 4.916 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.055 0 14.001-7.496 14.001-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.59z" />
    </svg>
);

const FacebookIcon = () => (
    <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.337v21.326C0 23.402.597 24 1.325 24H12.82v-9.294H9.692V11.31h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.314h3.587l-.467 3.396h-3.12V24h6.116c.729 0 1.325-.598 1.325-1.337V1.337C24 .598 23.404 0 22.675 0z" />
    </svg>
);

const InstagramIcon = () => (
    <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608C4.518 2.5 5.785 2.227 7.151 2.163 8.417 2.105 8.797 2.093 12 2.093M12 0C8.741 0 8.332.015 7.052.072 5.775.128 4.603.428 3.637 1.394 2.67 2.36 2.37 3.532 2.314 4.81.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.056 1.278.356 2.45 1.322 3.416.966.966 2.138 1.266 3.416 1.322C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.278-.056 2.45-.356 3.416-1.322.966-.966 1.266-2.138 1.322-3.416.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.056-1.278-.356-2.45-1.322-3.416-.966-.966-2.138-1.266-3.416-1.322C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
);

const Footer = () => {
    return (
        <footer   id="contact"  className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center animate-fadeInUp">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-2">Jujutsu Kaisen Fan Site</h2>
                        <p className="text-gray-400">Embrace the curse, master your power.</p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        <a
                            href="https://twitter.com"
                            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
                            aria-label="Twitter"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://facebook.com"
                            className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-800 pt-4">
                    <p className="text-center text-gray-500">
                        &copy; {new Date().getFullYear()}   All rights
                        reserved by @Evolux
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
