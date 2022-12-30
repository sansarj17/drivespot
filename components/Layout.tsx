import Navbar from "./Navbar";

interface IProps{
	children: React.ReactNode;
}
export default function Layout({children} : IProps) {
  return (
	<div>
		<Navbar/>
		{children}
	</div>
  )
}
