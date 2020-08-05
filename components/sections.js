import React from 'react'
import { HeroBanner } from 'components'

const SideBySide = ({ fields }) => <h1>SIDE BY SIDE</h1>
const CollectionGrid = ({ fields }) => <h1>COLLECTION GRID</h1>

export default function Sections({ sections }) {
  return sections.map(section => {
    const type = section.sys.contentType.sys.id
    switch (type) {
      case "heroBanner": {
        return <HeroBanner fields={section.fields} />
      }
      case "sideBySide": {
        return <SideBySide fields={section.fields} />
      }
      case "colectionGrid": {
        return <CollectionGrid fields={section.fields} />
      }
    }
  })
}
