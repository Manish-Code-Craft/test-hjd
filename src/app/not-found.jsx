import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <>
    <InnerBanner
        title="404 - Page Not Found"
        subtitle="Sorry, the page you are looking for could not be found." 
    /> 
    </>
  );
}