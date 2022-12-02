import { PlusIcon } from '@heroicons/react/outline';
import after from 'public/assets/icons/after.svg';
import attendee from 'public/assets/icons/attendee.svg';
import custom from 'public/assets/icons/custom.svg';
import dos from 'public/assets/icons/dos.svg';
import flag from 'public/assets/icons/flag.svg';
import grammar from 'public/assets/icons/grammar.svg';
import guideline from 'public/assets/icons/guideline.svg';
import invite from 'public/assets/icons/invite.svg';
import launch from 'public/assets/icons/launch.svg';
import logo from 'public/assets/icons/logo.svg';
import personality from 'public/assets/icons/personality.svg';
import post from 'public/assets/icons/post.svg';
import posts_6 from 'public/assets/icons/posts_6.svg';
import prep from 'public/assets/icons/prep.svg';
import press_release from 'public/assets/icons/press_release.svg';
import smpost from 'public/assets/icons/smpost.svg';
import speaker from 'public/assets/icons/speaker.svg';
import thankyou from 'public/assets/icons/thankyou.svg';
import visuals from 'public/assets/icons/visuals.svg';
import web from 'public/assets/icons/web.svg';
import event_branding from 'public/assets/services/event_branding.svg';
import event_comm from 'public/assets/services/event_comm.svg';
import marketing from 'public/assets/services/event_marketing.svg';

import type { IContent } from '@/pages/services/event-communication';

interface IOptions {
  label: string;
  popup: IContent;
}

interface IService {
  title: string;
  image: any;
  options: IOptions[];
}

const services: IService[] = [
  {
    title: 'MARKETING',
    image: marketing,
    options: [
      {
        label: 'Facebook',
        popup: {
          serviceId: 8,
          title: 'FACEBOOK',
          subtitle: 'Marketing',
          contents: [
            {
              title: 'PREPARATION PHASE',
              text: [
                {
                  value: 'Development of Research and Campaign Strategy',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Development of Value Propositions and Visual Assets',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value:
                    'Facebook/Google Ad Account Opening and Ads Installation',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: prep,
            },
            {
              title: 'LAUNCH PHASE',
              text: [
                {
                  value: 'Ads Launch',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Tracking, Optimizing, Improving Ads',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Regular Reporting',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: launch,
            },
            {
              title: 'REVIEW PHASE',
              text: [
                {
                  value: 'Evaluation and Analysis Report',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Debriefing',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: after,
            },
          ],
        },
      },
      {
        label: 'Google',
        popup: {
          serviceId: 9,
          title: 'GOOGLE',
          subtitle: 'Marketing',
          contents: [
            {
              title: 'PREPARATION PHASE',
              text: [
                {
                  value: 'Development of Research and Campaign Strategy',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Development of Value Propositions and Visual Assets',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value:
                    'Facebook/Google Ad Account Opening and Ads Installation',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: prep,
            },
            {
              title: 'LAUNCH PHASE',
              text: [
                {
                  value: 'Ads Launch',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Tracking, Optimizing, Improving Ads',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Regular Reporting',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: launch,
            },
            {
              title: 'REVIEW PHASE',
              text: [
                {
                  value: 'Evaluation and Analysis Report',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Debriefing',
                  decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ),
                },
              ],
              icon: after,
            },
          ],
        },
      },
    ],
  },
  {
    title: 'COMMUNICATION',
    image: event_comm,
    options: [
      {
        label: 'Basic',
        popup: {
          serviceId: 4,
          title: 'BASIC',
          subtitle: 'Communication',
          contents: [
            {
              title: 'EVENT BANNER',
              text: [
                {
                  value: 'Matches your organisation’s visual identity ',
                },
                {
                  value: '1 style suggestion, fits up to 5 sizes',
                },
                {
                  value: 'X Revisions',
                },
              ],
              icon: flag,
            },
            {
              title: 'WEBSITE EVENT ANNOUNCEMENT ARTICLE',
              text: [
                {
                  value: 'Up to 300 words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Unlimited copy revisions',
                },
              ],
              icon: web,
            },
            {
              title: '2 SOCIAL MEDIA EVENT VISUALS',
              text: [
                {
                  value: 'Matches your event’s visual identity',
                },
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: '2 revisions',
                },
              ],
              icon: visuals,
            },
            {
              title: 'PRESS RELEASE',
              text: [
                {
                  value: 'Up to 450 words',
                },
                {
                  value: 'Highly focused on your call-to-action',
                },
                {
                  value: 'Unlimited copy revisions',
                },
              ],
              icon: press_release,
            },
            {
              title: 'EVENT INVITATION',
              text: [
                {
                  value: 'Matches your organisation’s visual identity',
                },
                {
                  value: 'Fits up to 5 sizes',
                },
                {
                  value: 'X revisions',
                },
              ],
              icon: invite,
            },
            {
              title: '3 SOCIAL MEDIA EVENT POSTS',
              text: [
                {
                  value: 'Up to 300 words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Unlimited copy revisions',
                },
              ],
              icon: post,
            },
            {
              title: 'POST-EVENT FOLLOW-UP MAIL TO ATTENDEES',
              text: [
                {
                  value: 'Up to X words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: '2 revisions',
                },
              ],
              icon: attendee,
            },
            {
              title: 'POST-EVENT FOLLOW-UP MAIL TO SPEAKERS',
              text: [
                {
                  value: 'Up to 300 words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: '2 revisions',
                },
              ],
              icon: speaker,
            },
          ],
        },
      },
      {
        label: 'Full',
        popup: {
          serviceId: 5,
          title: 'FULL',
          subtitle: 'Communication',
          contents: [
            {
              title: 'EVENT BANNER',
              text: [
                {
                  value: 'Matches your organisation’s visual identity ',
                },
                {
                  value: 'Unlimited revisions included',
                },
                {
                  value: '2 style suggestions, fits up to 10 sizes',
                },
              ],
              icon: flag,
            },
            {
              title: '3 WEBSITE EVENT ANNOUNCEMENT ARTICLES',
              text: [
                {
                  value: 'Up to X words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Unlimited copy revisions',
                },
              ],
              icon: web,
            },
            {
              title: '6 SOCIAL MEDIA EVENT VISUALS',
              text: [
                {
                  value: 'Matches your event’s visual identity',
                },
                {
                  value:
                    'Photos, banners, GIFs, short videos (max. 30 seconds)',
                },
                {
                  value: 'Unlimited revisions',
                },
              ],
              icon: posts_6,
            },
            {
              title: 'PRESS RELEASE (WITH MEDIA PRESS LIST AND PITCH)',
              text: [
                {
                  value: 'Up to X words',
                },
                {
                  value: 'Highly focused on your call-to-action',
                },
                {
                  value: 'Unlimited copy revisions',
                },
              ],
              icon: press_release,
            },
            {
              title: 'EVENT INVITATION (WITH BUILD-OUT ON YOUR EMAIL SOFTWARE)',
              text: [
                {
                  value: 'Matches your organisation’s visual identity',
                },
                {
                  value: 'Fits up to X sizes',
                },
                {
                  value: 'Unlimited revisions',
                },
              ],
              icon: invite,
            },

            {
              title: '6 SOCIAL MEDIA EVENT POSTS (ACROSS ALL CHANNELS)',
              text: [
                {
                  value: 'Up to X words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: '○	Unlimited copy revisions',
                },
              ],
              icon: visuals,
            },
            {
              title: 'POST-EVENT FOLLOW-UP MAIL TO ATTENDEES AND SPEAKERS',
              text: [
                {
                  value: 'Up to X words',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Choose your own style',
                },
                {
                  value: 'Thank you’ video (max. 30 seconds)',
                },
                {
                  value: 'Unlimited revisions',
                },
              ],
              icon: thankyou,
            },

            {
              title: 'CUSTOM',
              text: [
                {
                  value: 'Adapted to your needs',
                },
              ],
              icon: custom,
            },
          ],
        },
      },
    ],
  },
  {
    title: 'BRANDING & IDENTITY',
    image: event_branding,
    options: [
      {
        label: 'Visual',
        popup: {
          serviceId: 6,
          title: 'VISUAL',
          subtitle: 'Branding & Identity',
          contents: [
            {
              title: 'LOGO',
              text: [
                {
                  value: 'Choose between 3 logo styles',
                },
                {
                  value: 'Unlimited revisions',
                  /* decorator: (
                    <PlusIcon className="w-4 h-4 text-theme-primary" />
                  ), */
                },
              ],
              icon: logo,
            },
            {
              title: 'IMAGERY GUIDE',
              text: [
                {
                  value: 'Visual reference guide with 10 images',
                },
                {
                  value: 'Tailored to your organisation',
                },
                {
                  value:
                    'Key criteria in selecting images for public communication',
                },
              ],
              icon: smpost,
            },
            {
              title: 'BRAND GUIDE',
              text: [
                {
                  value: (
                    <div>
                      <strong>Colour Palette</strong>
                      <br />
                      <span>
                        Visual colour guide with primary and secondary
                        complementary colours
                      </span>
                    </div>
                  ),
                },
                {
                  value: <br />,
                },
                {
                  value: (
                    <div>
                      <strong>Font & Typography </strong>
                      <br />
                      <span>
                        Written guidelines with primary and secondary fonts,
                        including typography style, line weight, curvature, and
                        spacing
                      </span>
                    </div>
                  ),
                },
              ],
              icon: guideline,
            },
          ],
        },
      },
      {
        label: 'Verbal',
        popup: {
          serviceId: 7,
          title: 'VERBAL',
          subtitle: 'Branding & Identity',
          contents: [
            {
              title: 'PERSONALITY PROFILE',
              text: [
                {
                  value:
                    'Written guidelines on personality traits, stance, attitude, demeanour, and disposition of your organisation',
                },
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value:
                    'Consistent messaging across all public-facing communication materials',
                },
              ],
              icon: personality,
            },
            {
              title: 'LANGUAGE GUIDE',
              text: [
                {
                  value:
                    'Written guidelines on abbreviations, acronyms, capitalisation, contractions, symbols, icons, numbers, and more',
                },
              ],
              icon: grammar,
            },
            {
              title: 'DO-S & DON’T-S GUIDE',
              text: [
                {
                  value:
                    'Written guidelines on what to do and what not to do when portraying your organisation across all public-facing communication materials',
                },
              ],
              icon: dos,
            },
          ],
        },
      },
    ],
  },
];

export { services };
