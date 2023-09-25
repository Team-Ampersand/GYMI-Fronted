import { apiClient } from 'lib/apiClient';
import { useState } from 'react';

interface Props {
  url: string;
  method: string;
  data: any;
}

export const useFetch = async ({ url, method, data: fetchData }: Props) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState<boolean>(false);

  try {
    setLoading(true);

    const { data } = await apiClient({
      url: url,
      method: method,
      data: fetchData,
    });
  } catch (e: any) {
    setError(e);
  } finally {
    setLoading(false);
  }
  return { data, error, isLoading };
};
