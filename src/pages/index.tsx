import { useQuery } from '@apollo/client';
import { HOMEPAGE } from '@queries/homepage';

export default function Home() {
  const { loading, error, data } = useQuery(HOMEPAGE);
  console.log(data);
  return (
    <div />
  );
}
