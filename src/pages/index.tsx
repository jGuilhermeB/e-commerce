import CategorySection from "@/CategorySection"
import BannerSection from "@/components/BannerSection"
import PageWrapper from "@/components/PageWrapper"

export default function Home (){
  return(
    <PageWrapper>
      <BannerSection />
      <CategorySection />
    </PageWrapper>
  )
}