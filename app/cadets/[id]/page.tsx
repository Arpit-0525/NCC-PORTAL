import { cadets } from "@/data/cadets";
import { useAuth } from "@/context/AuthContext";

export default function CadetProfile({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const isAdmin = user.role === "admin";
  const cadet = cadets.find((c) => c.id === params.id);

  if (!cadet) return <div>Cadet not found</div>;

  return (
    <div>
      <h1>{cadet.name}</h1>
      <p>{cadet.parentName}</p>
      {isAdmin && (
        <button className="btn btn-primary">
          Edit Cadet
        </button>
      )}
    </div>
  );
}