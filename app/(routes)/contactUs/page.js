import DaynamicPageBanner from "@components/Shared/DynamicPageBanner/DaynamicPageBanner";
import contact_banner_img from "../../../public/assets/img/breadcrumb/01.jpg"

export default function contactUs() {
  return (
    <div className="mt-32">
        <DaynamicPageBanner image={contact_banner_img} pageTitle={"Contact Us"}/>
    </div>
  )
}
