import React from 'react'
import {
	Container,
	SimpleGrid,
	Title,
	Image,
	Text,
	List,

} from '@mantine/core'
import {aboutContent} from '@/utils/aboutContent'
import {useMediaQuery} from '@mantine/hooks'

const imageContent = <Image mx="auto" width={900} height={350} className='object-cover' radius="lg" src="/container2.jpg" alt="Random image" />

const mockdata = () => {
	return (
		<div className="text-gray-600">
			<Title className="m-3 text-black font-bold" order={1}>
				{aboutContent.title}
			</Title>
			<List className="text-gray-600" size={'xl'} spacing="xl">
				<List.Item className="m-3">
					<Text>
						{aboutContent.paragraphs[0].toString()}

						<List.Item className="my-4">
							<Text>{aboutContent.paragraphs[1].toString()}</Text>

							<List.Item className="my-4">
								<Text>{aboutContent.paragraphs[2].toString()}</Text>
							</List.Item>
						</List.Item>
					</Text>
				</List.Item>
			</List>
		</div>
	)
}

const NewProduct = () => {
	const matches = useMediaQuery('(max-width: 1200px)')

	return (
		<Container my="xl" mx={34} fluid={true}>
			<SimpleGrid spacing={0} cols={matches ? 1 : 2}>
				<div className="p-5">{mockdata()}</div>
				<div>{imageContent}</div>
			</SimpleGrid>
		</Container>
	)
}

export default NewProduct
