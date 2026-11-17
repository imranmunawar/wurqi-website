import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("enterprise-work-management");

export { generateMetadata };
export default Page;
