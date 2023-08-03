import Image from 'next/image'

type IVerticalFeatureRowProps = {
	title: string
	description: string
	image: string
	imageAlt: string
	reverse?: boolean
}

const ThreeFeature = (props: IVerticalFeatureRowProps) => {



	return (
		<div className="card flex flex-col justify-start items-center h-96 w-96 space-y-4 text-center mt-6 md:mt-0">
			<div>
				<Image
					src={props.image}
					alt={props.imageAlt}
					width={100}
					height={100}
				/>
			</div>
			<div >
				<h2 className='font-medium text-3xl'>{props.title}</h2>
			</div>
			<div>
				<p className='px-2 md:px-0 text-xl'>{props.description}</p>
			</div>
		</div>
	)
}

export {ThreeFeature}
