import { Text, Tabs } from "@mantine/core"

import React from "react"

type Props = {
  data: {
    id: string
    title: string
    description: string
  }[]
  index: number
}

function MantineTabs({ data, index }: Props) {
  return (
    <>
      <Tabs key={index} color='orange' defaultValue='0' className='mb-12 mt-8'>
        <Tabs.List>
          {data.map((item, index) => (
            <Tabs.Tab key={index} value={item.id}>
              {item.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {data.map((item, index) => (
          <Tabs.Panel key={index} value={item.id} pt='xs' className=''>
            <Text fz='sm' c='dimmed' mt='sm' className='text-base'>
              {item.description}
            </Text>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  )
}

export default MantineTabs
