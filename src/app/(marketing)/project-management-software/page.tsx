import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("project-management-software");

export { generateMetadata };
export default Page;
