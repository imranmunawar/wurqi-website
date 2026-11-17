import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("work-management-software");

export { generateMetadata };
export default Page;
