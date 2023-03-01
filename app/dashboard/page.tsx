import NotFoundComponent from '@/components/NotFoundComponent';
import Image from 'next/image';

async function getData() {
  const response = await fetch('https://rickandmortyapi.com/api/character/2');
  return response.json();
}
export default async function Dashboard() {
  const data = await getData();
  return (
    <div>
      <NotFoundComponent />
      <Image width={100} height={100} src={data.image} alt="Mort" />
    </div>
  );
}
