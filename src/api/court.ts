import { useFetch } from 'hooks/useFetch';

export const GetAllCourt = async () => {
  const { data } = await useFetch({ url: '/court', method: 'get' });
  return data;
};

export const GetCourt = async (courtId: string) => {
  const { data } = await useFetch({ url: `/court/${courtId}`, method: 'get' });
  return data;
};

export const BanCourt = async (courtId: string) => {
  const { data, error } = await useFetch({
    url: `/court/ban/${courtId}`,
    method: 'get',
  });

  if (error.response.status === '404') return;
  if (error.response.status === '500') return;

  return data;
};
