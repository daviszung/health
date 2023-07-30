import Image from "next/image";

type FeatureProps = {
    text: string
    title: string
    img: string
}

export function Feature( { text, title, img }: FeatureProps){
  
  return (
		<>
			<div className="relative w-28 h-28">
				<Image src={img} fill alt="picture of a feature" />
			</div>
			<p className="text-black text-4xl whitespace-nowrap font-bold my-2">{title}</p>
			<p className="w-72 text-zinc-500 text-3xl font-medium">{text}</p>
		</>
  );
};
