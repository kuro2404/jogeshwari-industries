import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ProductRange from "../components/ProductRange";

export default function Home() {
  return (
    <>
      <SeoHead title='Jogeshwari Industries' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <ProductRange />
      </Layout>
    </>
  );
}
