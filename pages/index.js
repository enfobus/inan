// my-printing-site/pages/index.js

import { client } from '../lib/sanity';

export async function getStaticProps() {
  const services = await client.fetch(`*[_type == "service"]{_id, title, description, image{asset->{url}}}`);
  return { props: { services } };
}

export default function Home({ services }) {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service._id} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.image && (
              <img src={service.image.asset.url} alt={service.title} width="400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
