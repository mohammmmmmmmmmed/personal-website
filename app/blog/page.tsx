import Link from "next/link";
import { Button } from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";
import BlogSection from "@/components/BlogSection";

export const revalidate = 0;

const Page = () => {
  return (
    <div className="px-4 pb-10">
      <div className="flex flex-col items-center mb-4 gap-2">
        <Link href="/" prefetch={true}>
          <Button
            isIconOnly
            className="dark:border-knight dark:bg-transparent dark:border-2 bg-[#ece7e7] border-0"
            radius="full"
            variant="bordered"
          >
            <RxCross2 />
          </Button>
        </Link>
        <h1 className="text-2xl font-[500]">My Blog</h1>
      </div>
      <BlogSection />
    </div>
  );
};

export default Page;
