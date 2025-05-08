"use client"; // Mark this file as a Client Component

import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
      {/* Metadata for SEO */}
      <Head>
        <title>Privacy Policy - Huno Pty Ltd</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* Main Privacy Policy Section */}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="privacy-policy">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-center text-gray-600 mb-8">
              Last Updated: 23 March 2024 | Effective Date: 03 March 2024
            </p>

            {/* Section 1: Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to <strong>Huno Pty Ltd</strong>. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website or services. By accessing or using our Service, you agree to the terms outlined in this policy.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, contact details, and any other information you voluntarily provide.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> IP address, browser type, device information, usage data, cookies, and similar technologies.
                </li>
              </ul>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>To provide and improve the Service.</li>
                <li>To send newsletters, updates, and promotional materials.</li>
                <li>To enforce our Terms and Conditions and protect our platform.</li>
                <li>To comply with applicable laws and legal obligations.</li>
              </ul>
            </section>

            {/* Section 4: Sharing of Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third parties under the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>With trusted service providers who assist us in operating the Service.</li>
                <li>With advertisers for targeted advertising purposes.</li>
                <li>When required by law, regulation, or legal process.</li>
                <li>In the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            {/* Section 5: Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on applicable laws, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access, rectify, or erase your personal data.</li>
                <li>Restrict or object to the processing of your data.</li>
                <li>Request a copy of your data or transfer it to another entity.</li>
                <li>Withdraw consent for processing your data.</li>
                <li>Lodge a complaint with a statutory authority.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:support@hotelsguides.net"
                  className="text-blue-600 hover:underline"
                >
                  support@hotelsguides.net
                </a>.
              </p>
            </section>

            {/* Section 6: Cookies and Tracking Technologies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We and third-party advertisers may use cookies and similar technologies to track user activity on our website. These technologies help us improve the Service and deliver targeted advertisements. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* Section 7: Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect your information from loss, misuse, or unauthorized access. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 8: Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <address className="text-gray-700 not-italic">
                <p>Huno Pty Ltd</p>
                <p>c/o Hall Chadwick</p>
                <p>2-26 Park Street, NSW 2000, Australia</p>
                <p>Email:{" "}
                  <a
                    href="mailto:support@hotelsguides.net"
                    className="text-blue-600 hover:underline"
                  >
                    support@hotelsguides.net
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;