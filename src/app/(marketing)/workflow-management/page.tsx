import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("workflow-management");

export { generateMetadata };
export default Page;
