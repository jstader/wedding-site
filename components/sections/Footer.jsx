import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <PageSection>
        <InnerWrapper>
          <p className='max-w-2xl'>
            This site was built with love by John with input from Alexis, Nila, and Suzy.
          </p>
        </InnerWrapper>
      </PageSection>
    </footer>
  )
}
export default Footer
