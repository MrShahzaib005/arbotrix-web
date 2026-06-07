import RegisterClient from "./RegisterClient";

// 1. The SEO Metadata (Must be resolved on the server)
export const metadata = {
  title: 'Apply for Clearance | Arbotrix',
  description: 'Create your Arbotrix operator profile to access elite physical engineering courses and request hardware provisions.',
};

// 2. The Page rendering the Client Component
export default function RegisterPage() {
  return <RegisterClient />;
}