import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("enterprise-project-management");

export { generateMetadata };
export default Page;
