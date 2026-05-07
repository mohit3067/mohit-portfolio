import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { fallbackProjects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState<boolean>(false);
  const [source, setSource] = useState<"firestore" | "local">("local");
  const [isUpdating, setIsUpdating] = useState<boolean>(firebaseConfigured);

  useEffect(() => {
    let cancelled = false;
    if (!firebaseConfigured || !db) {
      setLoading(false);
      return;
    }

    (async () => {
      // Create a timeout to prevent hanging forever
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore fetch timeout")), 8000)
      );

      try {
        const q = query(collection(db, "projects"), orderBy("priority", "asc"));

        // Race the fetch against the timeout
        const snap = await Promise.race([getDocs(q), timeoutPromise]) as any;

        const docs: Project[] = snap.docs.map((d: any) => ({
          id: d.id,
          ...(d.data() as Omit<Project, "id">),
        }));

        if (!cancelled && docs.length > 0) {
          setProjects(docs);
          setSource("firestore");
        } else if (!cancelled) {
          console.log("[useProjects] No projects found in Firestore, staying with local data");
        }
      } catch (err) {
        console.warn("[useProjects] Firestore fetch failed or timed out, staying with local data", err);
      } finally {
        if (!cancelled) {
          setIsUpdating(false);
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, source, isUpdating };
}
