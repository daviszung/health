import Image from "next/image";

export type ProductProps = {
	img: string;
	title: string;
	text: string;
};

export function Product({ img, title, text }: ProductProps) {
	return (
		<div className="flex flex-col">
			<div className="relative w-[309px] h-[370px] mb-5">
				<Image src={img} fill alt="image of product" className="rounded-3xl" />
			</div>
			<p className="text-black text-4xl font-bold mb-1 pr-24">{title}</p>
			<p className="text-zinc-500 text-3xl font-medium pr-24">{text}</p>
		</div>
	);
}
