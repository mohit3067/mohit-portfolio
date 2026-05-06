import { useEffect, useState } from "react";
import { fetchAndActivate, getRemoteConfig, getString } from "firebase/remote-config";
import { app } from "@/lib/firebase";
import { CONTACT } from "@/data/contact";

/**
 * Hook to fetch dynamic values from Firebase Remote Config.
 * Falls back to local defaults if Firebase is not configured or the fetch fails.
 */
export const useRemoteConfig = () => {
  const [resumeUrl, setResumeUrl] = useState<string>(CONTACT.resumeUrl);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!app) {
      // Firebase not configured, use local default
      setIsLoading(false);
      return;
    }

    const rc = getRemoteConfig(app);

    // Set default values — these are used if fetch fails or Remote Config key is empty
    rc.defaultConfig = {
      resume_url: CONTACT.resumeUrl,
    };

    // Cache for 1 hour in production, 0 in dev
    rc.settings.minimumFetchIntervalMillis =
      import.meta.env.MODE === "development" ? 0 : 3600000;

    fetchAndActivate(rc)
      .then(() => {
        const url = getString(rc, "resume_url");
        if (url) {
          setResumeUrl(url);
        }
      })
      .catch((err) => {
        console.warn("[RemoteConfig] fetch failed, using default resume URL:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { resumeUrl, isLoading };
};
