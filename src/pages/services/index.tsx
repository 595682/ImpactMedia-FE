import React from 'react';

import PageSEO from '@/common/components/PageSEO';
import LayoutModule from '@/modules/Layout';
import MainServicesModule from '@/modules/MainServices';

const ServicesPage = () => {
  return (
    <LayoutModule fullFooter>
      <PageSEO
        title="Services | Impact Media"
        description="Impact Media offers a variety of high quality services, including Video Production, Animated Video Production, Live Streams & Webinars, and Events & Public Relations."
      />
      <MainServicesModule />
    </LayoutModule>
  );
};
export default ServicesPage;
