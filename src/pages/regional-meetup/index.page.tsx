import * as React from 'react';
import { NextPage } from 'next';

import { getI18nProps } from '~/utils/i18n.utils';
import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

import Header from './Header';
import VideoRecord from './VideoRecord';
import HowToJoin from './HowToJoin';
import SharedContent from './SharedContent';
import QandA from './QandA';
import JoinNow from './JoinNow';

const title = '地区活动';
const description =
  'TiDB 地区活动是通过各地区组织者举办的地区技术交流活动，每期地区组织活动以“连接地区技术人，分享技术实践”为核心目的，目前我们已在天津、石家庄、济南、武汉、广州等地举办多场地区组织活动。';

const seo = {
  title,
  description,
  keywords: ['TiDB', 'Meetup', 'HTAP', '地区分享'],
};

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Header data={{ title, description }} />
      <VideoRecord />
      <HowToJoin />
      <SharedContent />
      <QandA />
      <JoinNow />
    </CoreLayout>
  );
};

export default Hackathon2022;

export const getServerSideProps = async (ctx) => {
  //const client = await api.initStrapiClient();
  //
  //const data = await Promise.all([
  //  client.get('tidbio-hackathon-2021-leaderboards'),
  //  client.get('tidbio-hackathon-2021-news'),
  //]);
  //@ts-ignore
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
      //data: jsConvert.camelKeys(
      //  {
      //    leaderboard: data[0],
      //    news: data[1],
      //  },
      //  {
      //    recursive: true,
      //    recursiveInArray: true,
      //  }
      //),
    },
  };
};
