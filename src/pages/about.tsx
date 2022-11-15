import { approach } from 'contents/index';
import type { GetStaticProps } from 'next';

import PageSEO from '@/common/components/PageSEO';
import client from '@/lib/gql/client';
import { GET_TEAM_MEMBERS } from '@/lib/gql/queries/teamMembers';
import AboutModule from '@/modules/About';
import ApproachModule from '@/modules/Approach';
import LayoutModule from '@/modules/Layout';
import OurteamModule from '@/modules/Ourteam';
import type { TeamMemberEntityResponseCollection } from '@/types';

interface IAboutPageProps {
  teamMembers: TeamMemberEntityResponseCollection;
}

const AboutPage = ({ teamMembers }: IAboutPageProps) => {
  return (
    <LayoutModule>
      <PageSEO
        title="About Impact Media"
        description="Impact Media is a professional audio-visual and public relations agency."
      />
      <AboutModule />
      <OurteamModule people={teamMembers?.data || []} color="light" />
      <ApproachModule approach={approach} />
    </LayoutModule>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: teamMembersData } = await client.query({
    query: GET_TEAM_MEMBERS,
  });

  return {
    props: {
      teamMembers: teamMembersData.teamMembers,
    },
  };
};
