import { InformationCircleIcon } from '@heroicons/react/outline';
import React from 'react';

import PageSEO from '@/common/components/PageSEO';
import Wrapper from '@/Layout/Wrapper';
import LayoutModule from '@/modules/Layout';

const PrivacyPolicyPage = () => {
  const topics = [
    {
      id: 'what-data-do-we-collect',
      title: 'What data do we collect?',
      content: `Impact Media Europe collects the following data:
    Personal identification information (Name, email address, phone number, etc.)
    `,
    },
    {
      id: 'how-do-we-collect-your-data',
      title: 'How do we collect your data?',
      content: (
        <div>
          You directly provide Impact Media with most of the data we collect. We
          collect data and process data when you:
          <ul>
            <li>
              • Register online or place an order for any of our products or
              services.
            </li>
            <li>
              • Voluntarily complete a customer survey or provide feedback on
              any of our message boards, via email, or via 3rd parties (i.e.
              Facebook).
            </li>
            <li>• Use or view our website via your browser’s cookies.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-will-we-use-your-data',
      title: 'How will we use your data?',
      content: (
        <div>
          Impact Media Europe collects your data so that we can:
          <ul>
            <li>• Process your order and manage your account.</li>
            <li>
              • Email you with special offers on other products and services we
              think you might like.
            </li>
            <li>
              • Respond to your inquiry and/or interest in our products and
              services.{' '}
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-do-we-store-your-data',
      title: 'How do we store your data?',
      content: `Impact Media Europe securely stores your data at our hosting company’s secure servers located in the EEAS.
    `,
    },
    {
      id: 'marketing',
      title: 'Marketing',
      content: (
        <>
          <p>
            Impact Media Europe would like to send you information about
            products and services of ours that we think you might like. If you
            have agreed to receive marketing, you may always opt out at a later
            date.You have the right at any time to stop Impact Media Europe from
            contacting you for marketing purposes.If you no longer wish to be
            contacted for marketing purposes, please send an e-mail to{' '}
            <a
              href="mailto:office@impact-media.be"
              className="text-blue-600 hover:underline"
            >
              office@impact-media.be
            </a>
          </p>
          <br />
          <br />
          <p>
            Our carefully selected partners and service providers may process
            personal information about you on our behalf as described below:
            “Digital Marketing Service Providers We periodically appoint digital
            marketing agents to conduct marketing activity on our behalf, such
            activity may result in the compliant processing of personal
            information. Our appointed data processors include: (i)Prospect
            Global Ltd (trading as Sopro) Reg. UK Co. 09648733. You can contact
            Sopro and view their privacy policy here:{' '}
            <a href="http://sopro.io" className="text-blue-600 hover:underline">
              http://sopro.io
            </a>
            . Sopro are registered with the ICO Reg: ZA346877 their Data
            Protection Officer can be emailed at:{' '}
            <a
              href="mailto:dpo@sopro.io"
              className="text-blue-600 hover:underline"
            >
              dpo@sopro.io
            </a>
            .”
          </p>
        </>
      ),
    },
    {
      id: 'what-are-your-data-protection-rights',
      title: 'What are your data protection rights?',
      content: (
        <div className="space-y-4">
          <p>
            Impact Media Europe would like to make sure you are fully aware of
            all of your data protection rights. Every user is entitled to the
            following:
          </p>
          <ul className="space-y-4">
            <li>
              The right to access – You have the right to request Impact Media
              Europe for copies of your personal data. We may charge you a small
              fee for this service.
            </li>
            <li>
              The right to rectification – You have the right to request that
              Impact Media Europe correct any information you believe is
              inaccurate. You also have the right to request Impact Media Europe
              to complete the information you believe is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that Impact
              Media Europe erase your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that Impact Media Europe restrict the processing of your personal
              data, under certain conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object
              to Impact Media Europe’s processing of your personal data, under
              certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that
              Impact Media Europe transfer the data that we have collected to
              another organization, or directly to you, under certain
              conditions.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us at
              our email:{' '}
              <a
                href="mailto:office@impact-media.be"
                className="text-blue-600 hover:underline"
              >
                office@impact-media.be
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies',
      content: `Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our websites, we may collect information from you automatically through cookies or similar technology. For further information, visit allaboutcookies.org.
    `,
    },
    {
      id: 'how-do-we-use-cookies',
      title: 'How do we use cookies?',
      content: (
        <div>
          Impact Media Europe uses cookies in a range of ways to improve your
          experience on our website, including:
          <ul>
            <li> Keeping you signed in where applicable;</li>
            <li>Understanding how you use our website.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'what-types-of-cookies-do-we-use',
      title: 'What types of cookies do we use?',
      content: (
        <div>
          <p>
            There are a number of different types of cookies, however, our
            website uses:
          </p>
          <br />
          <div>
            <strong>Functionality </strong>– Impact Media Europe uses these
            cookies so that we recognize you on our website and remember your
            previously selected preferences. These could include what language
            you prefer and location you are in. A mix of first-party and
            third-party cookies are used.
          </div>
          <br />
          <div>
            <strong>Advertising </strong>– Impact Media Europe uses these
            cookies to collect information about your visit to our website, the
            content you viewed, the links you followed and information about
            your browser, device, and your IP address. Impact Media Europe
            sometimes shares some limited aspects of this data with third
            parties for advertising purposes. We may also share online data
            collected through cookies with our advertising partners. This means
            that when you visit another website, you may be shown advertising
            based on your browsing patterns on our website.
          </div>
        </div>
      ),
    },
    {
      id: 'how-to-manage-cookies',
      title: 'How to manage cookies',
      content: `You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.
    `,
    },
    {
      id: 'privacy-policies-of-other-websites',
      title: 'Privacy Policies of other websites',
      content: `The Impact Media Europe website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.
    `,
    },
    {
      id: 'changes-to-our-privacy-policy',
      title: 'Changes to our Privacy Policy',
      content: `Impact Media Europe keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on October 31st, 2022.
    `,
    },
    {
      id: 'how-to-contact-us',
      title: 'How to contact us',
      content: (
        <div>
          If you have any questions about Impact Media Europe’s privacy policy,
          the data we hold on you, or you would like to exercise one of your
          data protection rights, please do not hesitate to contact us. E-mail
          us at:{' '}
          <a
            href="mailto:office@impact-media.be"
            className="text-blue-600 hover:underline"
          >
            office@impact-media.be
          </a>
        </div>
      ),
    },
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return null;
    return element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <PageSEO
        title="Privacy Policy | Impact Media"
        description="Impact Media adheres to the privacy and confidentiality of all users it transacts with."
      />
      <LayoutModule noMap>
        <Wrapper>
          <div className="max-w-4xl pt-24 mx-auto scroll-smooth">
            <h2 className="mt-8 text-4xl">Our Privacy Policy</h2>
            <h3 className="text-xl">Current as of November 2022</h3>
            <div className="my-8">
              <div className="flex flex-col items-center rounded-xl text-theme-primary sm:flex-row sm:p-6">
                <div>
                  <InformationCircleIcon className="w-8 h-8 mb-8 sm:mr-8 sm:mb-0" />
                </div>
                <p className="font-bold">
                  This privacy policy will explain how Impact Media Europe uses
                  the personal data we collect from you when you use our website
                  and when shared by you via 3rd parties (i.e. from a Facebook
                  survey).
                </p>
              </div>
            </div>
            <div className="grid gap-4 scroll-smooth md:grid-cols-12">
              <div className="my-8 rounded-xl md:col-span-4 md:bg-slate-100 md:p-8">
                <h3 className="mb-4 font-semibold">Topics:</h3>
                <ul>
                  {topics.map((topic, index) => (
                    <li key={topic.id} className="md:mb-2">
                      <a
                        onClick={() => scrollToId(topic.id)}
                        className="cursor-pointer hover:underline"
                      >
                        {index + 1}) {topic.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-8 scroll-smooth md:col-span-8 md:ml-8">
                {topics.map((topic) => (
                  <div className="mb-8" key={topic.id} id={topic.id}>
                    <h4 className="mb-4 text-2xl font-bold">{topic.title}</h4>
                    {topic.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </LayoutModule>
    </>
  );
};
export default PrivacyPolicyPage;
