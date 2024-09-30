export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="mx-auto mt-32 w-[35rem]">{children}</main>;
}
