import { redirect } from "next/navigation";

import { getPhotoUrl } from "@/firebase/db/photo";

const Page = async () => {
  const resumeUrl = "/img/companies/resume.jpg";
  redirect(resumeUrl);
  return null;
};

export default Page;
