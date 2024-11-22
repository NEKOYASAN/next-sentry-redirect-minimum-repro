import { notFound, redirect } from 'next/navigation';

type PageProps = {
  searchParams: Promise<{
    notFound?: string;
    redirect?: string;
  }>;
};

const NotFoundPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  if (searchParams.notFound === 'true') {
    notFound();
  }

  if (searchParams.redirect === 'true') {
    redirect('/example');
  }

  return <div>Not Found test</div>;
};

export default NotFoundPage;
