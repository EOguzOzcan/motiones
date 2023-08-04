import React from 'react'
import {
	Container,
	SimpleGrid,
	Title,
	Image,
	Text,
	List,
	Divider
} from '@mantine/core'
import {aboutContent} from '@/utils/aboutContent'
import {useMediaQuery} from '@mantine/hooks'

const imageContent = <Image mx='auto' src='left.png' alt='Random image' />

const mockdata = () => {
	return (
		<div className='text-gray-600'>
			<Title className='m-3' order={1}>{aboutContent.title}</Title>
			<List className='text-gray-600' size={'xl'} spacing="xl">
				<List.Item className='m-3'>
					<Text>
						{aboutContent.paragraphs[0].toString()}
						<Divider
							size='md'
							color='blue'
							style={{maxWidth: 200, marginLeft: '10%'}}
							className='m-3'
						/>
						<List withPadding className='text-gray-600' size={'xl'} spacing="xl">
							<List.Item className='m-3'>
								<Text>{aboutContent.paragraphs[1].toString()}</Text>
								<Divider
									size='md'
									color='blue'
									style={{maxWidth: 200, marginLeft: '30%'}}
									className='m-3'
								/>
								<List withPadding className='text-gray-600' size={'xl'} spacing="xl">
									<List.Item className='m-3'>
										<Text>{aboutContent.paragraphs[2].toString()}</Text>
									</List.Item>
								</List>
							</List.Item>
						</List>
					</Text>
				</List.Item>
			</List>
		</div>
	)
}

const NewProduct = () => {
	const matches = useMediaQuery('(max-width: 1200px)')

	return (
		<Container my='xl' mx={34} fluid={true}>
			<SimpleGrid spacing={0} cols={matches ? 1 : 2}>
				<div className='p-5'>{mockdata()}</div>
				<div>{imageContent}</div>
			</SimpleGrid>
		</Container>
	)
}

export default NewProduct
