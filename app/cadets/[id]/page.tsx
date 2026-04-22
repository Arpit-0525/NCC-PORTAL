import { cadets } from "@/data/cadets";

export default function CadetProfile({ params }: { params: { id: string } }) {
  const cadet = cadets.find((c) => c.id === params.id);

  if (!cadet) return <div>Cadet not found</div>;

  return (
    <div>
      <h1>{cadet.name}</h1>
      <p>{cadet.parentName}</p>
    </div>
  );
}