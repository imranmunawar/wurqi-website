import { createLandingRoute } from "@/features/landing/createLandingRoute";

const { generateMetadata, Page } = createLandingRoute("okr-management");

export { generateMetadata };
export default Page;
