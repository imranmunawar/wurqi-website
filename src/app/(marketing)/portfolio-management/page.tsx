import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("portfolio-management");

export { generateMetadata };
export default Page;
