import { PlusIcon } from '@heroicons/react/outline';
import attendee from 'public/assets/icons/attendee.svg';
import custom from 'public/assets/icons/custom.svg';
import flag from 'public/assets/icons/flag.svg';
import invite from 'public/assets/icons/invite.svg';
import post from 'public/assets/icons/post.svg';
import posts_6 from 'public/assets/icons/posts_6.svg';
import press_release from 'public/assets/icons/press_release.svg';
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
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Development of Value Propositions and Visual Assets',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value:
                    'Facebook/Google Ad Account Opening and Ads Installation',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
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
                  value: 'Based on event‘s visual identity',
                },
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: '2 rounds of revision',
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
                  value: 'Based on your call-to-action',
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
                  value: 'Matching corporate identity',
                },
                {
                  value: 'Fitting up to 5 sizes',
                },
                {
                  value: 'Revisions included',
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
              title: 'POST-EVENT MAILING TO ATTENDEES',
              text: [
                {
                  value: 'Based on event‘s visual identity',
                },
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: '2 rounds of revisions',
                },
              ],
              icon: attendee,
            },
            {
              title: 'POST-EVENT MAILING TO SPEAKERS',
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
              icon: speaker,
            },
          ],
        },
      },
      {
        label: 'Google',
      },
    ],
  },
  {
    title: 'EVENT COMMUNICATIONS',
    image: event_comm,
    options: [
      {
        label: 'Basic',
        popup: {
          serviceId: 4,
          title: 'BASIC',
          subtitle: 'Event Communications',
          contents: [
            {
              title: 'EVENT BANNER',
              text: [
                {
                  value: 'Matching corporate identity',
                },
                {
                  value: 'Fitting up to 5 sizes',
                },
                {
                  value: 'Revisions included',
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
                  value: 'Based on event‘s visual identity',
                },
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: '2 rounds of revision',
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
                  value: 'Based on your call-to-action',
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
                  value: 'Matching corporate identity',
                },
                {
                  value: 'Fitting up to 5 sizes',
                },
                {
                  value: 'Revisions included',
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
              title: 'POST-EVENT MAILING TO ATTENDEES',
              text: [
                {
                  value: 'Based on event‘s visual identity',
                },
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: '2 rounds of revisions',
                },
              ],
              icon: attendee,
            },
            {
              title: 'POST-EVENT MAILING TO SPEAKERS',
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
          subtitle: 'Event Communications',
          contents: [
            {
              title: 'EVENT INVITATION',
              text: [
                {
                  value: 'Visual style by your choice',
                },
                {
                  value: 'Unlimited copy revisions',
                },
                {
                  value: 'Integration in your e-mail server, including design',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: invite,
            },
            {
              title: '6 SOCIAL MEDIA POSTS',
              text: [
                {
                  value: 'Integrated call-to-action',
                },
                {
                  value: 'Unlimited copy revisions',
                },
                {
                  value: 'Adapted to all your social media channels',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: posts_6,
            },
            {
              title: '6 VISUALS',
              text: [
                {
                  value: 'Photos, banners, GIFs, short videos (max. 30 sec)',
                },
                {
                  value: 'Unlimited copy revisions',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: visuals,
            },
            {
              title: '2 THANK YOU E-MAILS',
              text: [
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Unlimited revisions',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Style by your choice',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Short thank you video (30sec)',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: thankyou,
            },
            {
              title: 'EVENT BANNER',
              text: [
                {
                  value: 'Based on event’s visual identity',
                },
                {
                  value: 'Unlimited revisions included',
                },
                {
                  value: '2 style suggestions',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value: 'Adapted up to 10 sizes',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: flag,
            },
            {
              title: 'WEBSITE EVENT ANNOUNCEMENT ARTICLE',
              text: [
                {
                  value: 'Tailored to your target audience',
                },
                {
                  value: 'Unlimited revisions included',
                },
                {
                  value: '3 event news articles',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
                {
                  value: '1 post-event summary article',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: web,
            },
            {
              title: 'PRESS RELEASE',
              text: [
                {
                  value: 'Centered around your call-to-action ',
                },
                {
                  value: 'Unlimited copy revisions',
                },
                {
                  value:
                    'Media press list and pitch to publish your press release',
                  decorator: (
                    <PlusIcon className="h-4 w-4 text-theme-primary" />
                  ),
                },
              ],
              icon: press_release,
            },
            {
              title: 'CUSTOM',
              text: [
                {
                  value: 'All of this can be adapted to your needs',
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
    title: 'EVENT BRANDING & IDENTITY',
    image: event_branding,
    options: [
      {
        label: 'Visual',
      },
      {
        label: 'Verbal',
      },
    ],
  },
];

export { services };
