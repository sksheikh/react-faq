import React from 'react'
import Faq from './Faq'

export default function Faqs(props) {
  const {faqs} = props

  const renderFaqs = faqs.map(faq => <Faq key={faq.id} {...faq}/>)
  return (
    <section>
      {renderFaqs}
    </section>
  )
}
