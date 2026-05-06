import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { fallbackProjects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState<boolean>(firebaseConfigured);
  const [source, setSource] = useState<"firestore" | "local">(
    firebaseConfigured ? "firestore" : "local"
  );

  useEffect(() => {
    let cancelled = false;
    if (!firebaseConfigured || !db) return;

    (async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("priority", "asc"));
        const snap = await getDocs(q);
        const docs: Project[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Project, "id">),
        }));
        if (!cancelled && docs.length) {
          setProjects(docs);
          setSource("firestore");
        } else if (!cancelled) {
          setSource("local");
        }
      } catch (err) {
        console.warn("[useProjects] Firestore fetch failed, using local data", err);
        if (!cancelled) setSource("local");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, source };
}
