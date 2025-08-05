import React from "react";
import { FaFilePdf, FaDownload, FaRegIdCard, FaFileAlt, FaFileContract } from "react-icons/fa";
import Title from "./Title";

function CertificatesAndCV() {
    return (
        <section id="certificates" className="max-w-4xl mx-auto px-4 py-3 transition-colors duration-300">
            {/* CV Section */}
            <Title id="certificates">Resume & Certifications</Title>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-4 shadow-md dark:shadow-none">

                {/* COVER LETTER */}
                <div>
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaFileAlt /> Cover Letter
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        You can View/Download my Cover Letter.
                    </p>

                    <a
                    href="certs_and_cv/BrianOtinaCoverLetter.pdf"
                    className="inline-flex items-center gap-1 px-3 mr-2 py-1 mb-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                    >
                    <FaFileContract />
                    View
                    </a>

                    <a
                    href="certs_and_cv/BrianOtinaCoverLetter.pdf"
                    download
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                    >
                    <FaDownload />
                    Download
                    </a>
                </div>

                {/* RESUME */}
                <div>
                    <h2 className="text-xl pt-3 font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaFilePdf /> Resume
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        You can View/Download my Resume below.
                    </p>

                    <a
                    href="certs_and_cv/resume_DataAnalyst.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 mr-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                    >
                    <FaFileContract />
                       View
                    </a>

                    <a
                    href="certs_and_cv/resume_DataAnalyst.pdf"
                    download
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                    >
                    <FaDownload />
                       Download
                    </a>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md dark:shadow-none">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
                <FaRegIdCard /> Certifications
                </h2>

                <div className="space-y-2">
                    {/* Certificate 1 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Oracle Autonomous Database Cloud 2025 Professional</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Oracle University - Issued 2025 {""}
                            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=643E0BADD02388F96EFD496978719CBF72F45D8F255F03D9108895FECD9E5C69"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-600 dark:text-cyan-400 hover:underline"
                            >
                                / Badge link
                            </a>
                        </p>
                        <a
                        href="certs_and_cv/OCI/Oracle Autonomous Database Cloud 2025 Professional.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential  →
                        </a>
                    </div>

                    {/* Certificate 2 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Oracle Data Platform 2025 Certified Foundations Associate</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Oracle University - Issued 2025 {""}
                            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=29798D1C4092A6211959922015B55D0E1DDB3CB2A6431FE6F7D989DA232F94B2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-600 dark:text-cyan-400 hover:underline"
                            >
                                / Badge link
                            </a>
                        </p>
                        <a
                        href="certs_and_cv/OCI/Oracle Data Platform 2025 Certified Foundations Associate.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential  →
                        </a>
                    </div>

                    {/* Certificate 3 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">OCI 2025 Certified Foundations Associate</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Oracle University - Issued 2025 {""}
                            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=6DDC75EBC3DD3A0B846F89F3BD5BDD2397BBADAE47F5C01081E02F4577EE4671"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-600 dark:text-cyan-400 hover:underline"
                            >
                                / Badge link
                            </a>
                        </p>
                        <a
                        href="certs_and_cv/OCI/Oracle Cloud Infrastructure 2025 Certified Foundations Associate.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential  →
                        </a>
                    </div>

                    {/* Certificate 4 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Data Analysis with Python</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cognitive Powered by IBM Developer Skills Network - Issued 2025</p>
                        <a
                        href="https://courses.cognitiveclass.ai/certificates/aabb87c54002454986b086e261f713ec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential →
                        </a>
                    </div>

                    {/* Certificate 5 */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Python Programming</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Computer Pride - Issued 2022</p>
                        <a
                        href="certs_and_cv/Python Cert.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline mt-2 inline-block"
                        >
                        View Credential →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CertificatesAndCV;
