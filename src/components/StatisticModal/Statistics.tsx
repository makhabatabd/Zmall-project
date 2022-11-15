import React, { useEffect, useState } from 'react';
import {
  Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, LabelList,
  ResponsiveContainer,
} from 'recharts';
import {
  StatisticsOpacity,
  StatisticsSection,
  StatisticsInner,
  StatisticsHead,
  StatisticsTitle,
  StatisticsBlocks,
  StatisticsLeft,
  StatisticsRight,
  StatisticsDate,
  StatisticsView,
  StatisticsBurn, StatisticsBurnTitle, StatisticsBurnSubtitle, StatisticsBtn,
} from './Statistic.style';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import RenderCustomTick from './RenderCustomTick/RenderCustomTick';


interface DataType {
  name: string,
  uv: number,
  pv: number,
  amt: number,
}

interface ResultType {
  phone_views_count: number,
  views_count: number,

  [key: string]: {
    phone_views_count: number,
    views_count: number
  } | number,
}

interface ResType {
  name: string,
  uv: number,
  pv: number,
  amt: number
}


const Statistics = ({ result }: ResultType) => {

  const [data, setData] = useState<DataType[]>([]);

  const fetchData = () => {
    const res: ResType[] = [];
    for (let i = 0; i < Object.keys(result).length; i++) {
      if (Object.keys(result)[i] !== 'phone_views_count' && Object.keys(result)[i] !== 'views_count') {
        res.push({
          name: Object.keys(result)[i],
          uv: Object.values(result)[i]?.phone_views_count,
          pv: Object.values(result)[i]?.views_count,
          amt: 200,
        });
      }
    }
    setData(res);
  };


  useEffect(() => {
    fetchData();
  }, [result]);


  const renderCustomizedLabel = (props: any) => {
    const { x, y, index } = props;

    return (
      <g>
        <text fill='#828282' x={x + 1} y={y - 6}>{data[index]?.uv + data[index]?.pv}</text>
      </g>
    );
  };

  const onCloseStatic = () => {
    // toggleStatic(false);
    console.log('-------------------');
  };
  return (
    <StatisticsSection>
      <StatisticsOpacity onClick={onCloseStatic} />
      <StatisticsInner>
        <StatisticsHead>
          <StatisticsTitle>Статистика просмотров объявления за месяц</StatisticsTitle>
          <svg onClick={onCloseStatic} width={13} height={13} viewBox='0 0 13 13' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M6.31371 5.18211L11.4049 0.0909372L12.5362 1.22231L7.44508 6.31348L12.5362 11.4046L11.4049 12.536L6.31371 7.44485L1.22254 12.536L0.0911689 11.4046L5.18234 6.31348L0.0911689 1.22231L1.22254 0.0909369L6.31371 5.18211Z'
                  fill='#BDBDBD' />
          </svg>
        </StatisticsHead>
        <StatisticsBlocks>
          <StatisticsLeft>
            <ResponsiveContainer width={617} debounce={1} height={398}>
              <BarChart width={617} height={380} data={data} margin={{ top: 0, right: 0, bottom: 40, left: 0 }}>
                <Line dataKey='uv' stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' vertical={false} strokeDasharray='3 3' />
                <Tooltip content={<CustomTooltip />} />
                <XAxis dataKey='name'
                       tickLine={true}
                       interval={0}
                       angle={-90}
                       tickMargin={30}
                       tickSize={0}
                       tick={RenderCustomTick} />
                <YAxis axisLine={false} tickSize={0} tickCount={7} domain={[0, 'dataMax']} padding={{ top: 30 }}
                       tickMargin={10} />
                <Bar dataKey='uv' stackId='a' fill='#2A2349' barSize={12} />
                <Bar dataKey='pv' stackId='a' fill='#00CCDB' barSize={12}>
                  <LabelList dataKey='name' content={renderCustomizedLabel} />
                </Bar>

              </BarChart>
            </ResponsiveContainer>
          </StatisticsLeft>
          <StatisticsRight>
            <StatisticsDate>С 7 января 2022 по 6 февраля 2022</StatisticsDate>
            <StatisticsView>
              <p>Просмотров сегодня:<span> {typeof result !== 'number' && result.phone_views_count}</span></p>
              <p>Просмотров всего:<span> {typeof result !== 'number' && result.views_count}</span></p>
            </StatisticsView>
            <StatisticsBurn>
              <svg width={44} height={80} viewBox='0 0 44 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M38.7742 67.0967H5.22576C3.09157 67.0967 1.3548 68.8335 1.3548 70.9676V76.1289C1.3548 78.2631 3.09157 79.9999 5.22576 79.9999H38.7742C40.9083 79.9999 42.6451 78.2631 42.6451 76.1289V70.9676C42.6451 68.8335 40.9083 67.0967 38.7742 67.0967Z'
                  fill='#00CCDB' />
                <path
                  d='M37.4838 5.16129C33.9264 5.16129 31.0322 8.05548 31.0322 11.6129V18.0981C29.9509 17.2787 28.6193 16.7742 27.1612 16.7742C25.0438 16.7742 23.1767 17.8142 21.9999 19.3948C20.8232 17.8142 18.9561 16.7742 16.8386 16.7742C15.3806 16.7742 14.049 17.2787 12.9677 18.0981V6.45161C12.9677 2.89419 10.0735 0 6.51607 0C2.95865 0 0.0644531 2.89419 0.0644531 6.45161V41.1239V51.6129V52.2942C0.0644531 56.0723 2.02316 59.4942 5.22574 61.4077V67.0968H7.80639V59.8477L7.09284 59.4916C4.34962 58.1187 2.6451 55.3613 2.6451 52.2942V51.6129V41.1239C2.6451 39.08 3.44123 37.1574 4.88639 35.7123C5.59865 35.0013 6.42832 34.4452 7.35477 34.0581L20.2128 28.7006C20.7135 28.4929 21.2425 28.3871 21.7845 28.3871C24.0374 28.3871 25.8709 30.2194 25.8709 32.5445C25.8709 34.1987 24.8838 35.68 23.3561 36.3161L10.387 41.72V46.4516C10.387 50.009 13.2812 52.9032 16.8386 52.9032C18.9561 52.9032 20.8232 51.8632 21.9999 50.2826C23.1767 51.8632 25.0438 52.9032 27.1612 52.9032C30.7186 52.9032 33.6128 50.009 33.6128 46.4516V33.5484V23.2258V11.6129C33.6128 9.47871 35.3496 7.74194 37.4838 7.74194C39.618 7.74194 41.3548 9.47871 41.3548 11.6129V52.2942C41.3548 55.3613 39.6503 58.1187 36.907 59.4903L36.1935 59.8477V67.0968H38.7741V61.409C41.9767 59.4955 43.9354 56.0723 43.9354 52.2955V11.6129C43.9354 8.05548 41.0412 5.16129 37.4838 5.16129ZM6.36252 31.6761C5.12381 32.1923 4.01413 32.9355 3.06187 33.8864C2.91478 34.0335 2.78187 34.1923 2.6451 34.3458V6.45161C2.6451 4.31742 4.38187 2.58065 6.51607 2.58065C8.65026 2.58065 10.387 4.31742 10.387 6.45161V23.2258V29.6774V30L6.36252 31.6761ZM19.2206 26.3187L12.9677 28.9239V23.2258C12.9677 21.0916 14.7045 19.3548 16.8386 19.3548C18.9728 19.3548 20.7096 21.0916 20.7096 23.2258V25.9123C20.2025 25.9948 19.7019 26.1187 19.2206 26.3187ZM16.8386 50.3226C14.7045 50.3226 12.9677 48.5858 12.9677 46.4516V43.4413L20.7096 40.2155V46.4516C20.7096 48.5858 18.9728 50.3226 16.8386 50.3226ZM31.0322 46.4516C31.0322 48.5858 29.2954 50.3226 27.1612 50.3226C25.027 50.3226 23.2903 48.5858 23.2903 46.4516V39.1394L24.3483 38.6981C26.8412 37.6594 28.4515 35.2439 28.4515 32.4723C28.4515 29.3161 26.2399 26.6787 23.2903 25.9923V23.2258C23.2903 21.0916 25.027 19.3548 27.1612 19.3548C29.2954 19.3548 31.0322 21.0916 31.0322 23.2258V33.5484V46.4516Z'
                  fill='#2A2349' />
              </svg>
              <StatisticsBurnTitle>Жгите ваши объявления!</StatisticsBurnTitle>
              <StatisticsBurnSubtitle>Купите услуги продвижения магазина</StatisticsBurnSubtitle>
              <StatisticsBtn type='button'>жечь!</StatisticsBtn>
            </StatisticsBurn>
          </StatisticsRight>
        </StatisticsBlocks>
      </StatisticsInner>
    </StatisticsSection>
  );
};


export default Statistics;

